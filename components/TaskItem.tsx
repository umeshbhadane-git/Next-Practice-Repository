"use client";

import { useOptimistic } from "react";

import type { Task } from "@/lib/db";

type TaskItemProps = {
  task: Task;
  toggleAction: (
    formData: FormData
  ) => Promise<void>;
  deleteAction: (
    formData: FormData
  ) => Promise<void>;
};

type OptimisticTask = {
  completed: boolean;
};

export default function TaskItem({
  task,
  toggleAction,
  deleteAction,
}: TaskItemProps) {
  const [optimisticTask, addOptimisticTask] =
    useOptimistic<OptimisticTask, boolean>(
      {
        completed: task.completed,
      },
      (_, newCompleted) => ({
        completed: newCompleted,
      })
    );

  async function handleToggle(
    formData: FormData
  ) {
    const nextValue = !optimisticTask.completed;

    addOptimisticTask(nextValue);

    await toggleAction(formData);
  }

  return (
    <li className="task-item">
      <form action={handleToggle}>
        <input
          type="hidden"
          name="id"
          value={task.id}
        />

        <button
          type="submit"
          className={
            optimisticTask.completed
              ? "task-title completed"
              : "task-title"
          }
        >
          {optimisticTask.completed
            ? "✓"
            : "○"}{" "}
          {task.title}
        </button>
      </form>

      <form action={deleteAction}>
        <input
          type="hidden"
          name="id"
          value={task.id}
        />

        <button
          type="submit"
          className="delete-button"
        >
          Delete
        </button>
      </form>
    </li>
  );
}