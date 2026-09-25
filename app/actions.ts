"use server";

import { revalidatePath } from "next/cache";

import {
  addTaskToDb,
  deleteTaskFromDb,
  toggleTaskInDb,
} from "@/lib/db";

import {
  addTaskSchema,
  taskIdSchema,
} from "@/lib/validations";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: {
    title?: string[];
  };
};

export async function addTask(
  previousState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const result = addTaskSchema.safeParse({
      title: formData.get("title"),
    });

    if (!result.success) {
      return {
        success: false,
        message: "Please fix the errors.",
        errors: result.error.flatten().fieldErrors,
      };
    }

    await addTaskToDb(result.data.title);

    revalidatePath("/");

    return {
      success: true,
      message: "Task added successfully.",
    };
  } catch (error) {
    console.error("addTask error:", error);

    return {
      success: false,
      message: "Something went wrong while adding the task.",
    };
  }
}

export async function toggleTask(
  formData: FormData
) {
  try {
    const result = taskIdSchema.safeParse({
      id: formData.get("id"),
    });

    if (!result.success) {
      throw new Error("Invalid task ID");
    }

    await toggleTaskInDb(result.data.id);

    revalidatePath("/");
  } catch (error) {
    console.error("toggleTask error:", error);

    throw new Error("Failed to update task");
  }
}

export async function deleteTask(
  formData: FormData
) {
  try {
    const result = taskIdSchema.safeParse({
      id: formData.get("id"),
    });

    if (!result.success) {
      throw new Error("Invalid task ID");
    }

    await deleteTaskFromDb(result.data.id);

    revalidatePath("/");

  } catch (error) {
    console.error("deleteTask error:", error);

    throw new Error("Failed to delete task");
  }
}