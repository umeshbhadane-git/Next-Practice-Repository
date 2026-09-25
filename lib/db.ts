import "server-only";

import { promises as fs } from "fs";
import path from "path";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const filePath = path.join(
  process.cwd(),
  "data",
  "tasks.json"
);

export async function getTasks(): Promise<Task[]> {
  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
}

async function saveTasks(tasks: Task[]) {
  await fs.writeFile(
    filePath,
    JSON.stringify(tasks, null, 2),
    "utf-8"
  );
}

export async function addTaskToDb(
  title: string
): Promise<Task> {
  const tasks = await getTasks();

  const task: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };

  tasks.push(task);

  await saveTasks(tasks);

  return task;
}

export async function toggleTaskInDb(
  id: string
): Promise<Task> {
  const tasks = await getTasks();

  const task = tasks.find(
    (task) => task.id === id
  );

  if (!task) {
    throw new Error("Task not found");
  }

  task.completed = !task.completed;

  await saveTasks(tasks);

  return task;
}

export async function deleteTaskFromDb(
  id: string
) {
  const tasks = await getTasks();

  const exists = tasks.some(
    (task) => task.id === id
  );

  if (!exists) {
    throw new Error("Task not found");
  }

  const remainingTasks = tasks.filter(
    (task) => task.id !== id
  );

  await saveTasks(remainingTasks);
}