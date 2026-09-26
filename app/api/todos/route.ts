import { NextRequest, NextResponse } from "next/server";
import { getTodosCollection } from "@/models/todo";
import {
  createTodoSchema,
} from "@/schemas/todoSchema";
import { ApiError } from "@/lib/errors";
import { withErrorHandler } from "@/lib/withErrorHandler";


// GET /api/todos
export const GET = withErrorHandler(
  async () => {
    const collection = await getTodosCollection();

    const todos = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(
      {
        success: true,
        data: todos,
      },
      {
        status: 200,
      }
    );
  }
);


// POST /api/todos
export const POST = withErrorHandler(
  async (request: NextRequest) => {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      throw new ApiError(
        "Invalid JSON body",
        400
      );
    }

    const result = createTodoSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(
        "Validation failed",
        400,
        result.error.flatten().fieldErrors
      );
    }

    const collection = await getTodosCollection();

    const todo = {
      title: result.data.title,
      completed: result.data.completed,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const insertResult =
      await collection.insertOne(todo);

    const createdTodo = {
      _id: insertResult.insertedId,
      ...todo,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Todo created successfully",
        data: createdTodo,
      },
      {
        status: 201,
      }
    );
  }
);