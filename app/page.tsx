import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/TaskList";

import { getTasks } from "@/lib/db";

import {
  toggleTask,
  deleteTask,
} from "./actions";

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <main className="container">
      <h1>Task Manager</h1>

      <p className="subtitle">
        Next.js Server Components + Server Actions
      </p>

      <AddTaskForm />

      <section>
        <h2>Tasks</h2>

        <TaskList
          tasks={tasks}
          toggleAction={toggleTask}
          deleteAction={deleteTask}
        />
      </section>
    </main>
  );
}