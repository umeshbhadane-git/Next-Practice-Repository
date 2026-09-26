import {
  NextRequest,
  NextResponse,
} from "next/server";

import { ObjectId } from "mongodb";

import { getTodosCollection } from "@/models/todo";

import {
  updateTodoSchema,
} from "@/schemas/todoSchema";

import { ApiError } from "@/lib/errors";
import { withErrorHandler } from "@/lib/withErrorHandler";


// PATCH /api/todos/:id
export const PATCH = withErrorHandler(
  async (
    request: NextRequest,
    context: {
      params: Promise<{ id: string }>;
    }
  ) => {
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      throw new ApiError(
        "Invalid todo ID",
        400
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      throw new ApiError(
        "Invalid JSON body",
        400
      );
    }

    const result =
      updateTodoSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(
        "Validation failed",
        400,
        result.error.flatten().fieldErrors
      );
    }

    const collection =
      await getTodosCollection();

    const updateData = {
      ...result.data,
      updatedAt: new Date(),
    };

    const updateResult =
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: updateData,
        }
      );

    if (updateResult.matchedCount === 0) {
      throw new ApiError(
        "Todo not found",
        404
      );
    }

    const updatedTodo =
      await collection.findOne({
        _id: new ObjectId(id),
      });

    return NextResponse.json(
      {
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo,
      },
      {
        status: 200,
      }
    );
  }
);


// DELETE /api/todos/:id
export const DELETE = withErrorHandler(
  async (
    request: NextRequest,
    context: {
      params: Promise<{ id: string }>;
    }
  ) => {
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      throw new ApiError(
        "Invalid todo ID",
        400
      );
    }

    const collection =
      await getTodosCollection();

    const result =
      await collection.deleteOne({
        _id: new ObjectId(id),
      });

    if (result.deletedCount === 0) {
      throw new ApiError(
        "Todo not found",
        404
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Todo deleted successfully",
      },
      {
        status: 200,
      }
    );
  }
);