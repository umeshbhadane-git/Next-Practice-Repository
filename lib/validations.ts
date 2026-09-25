import { z } from "zod";

export const addTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Task title is required")
    .max(100, "Task title must be 100 characters or less"),
});

export const taskIdSchema = z.object({
  id: z
    .string()
    .trim()
    .min(1, "Task ID is required"),
});