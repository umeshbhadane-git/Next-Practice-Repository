import type { Task } from "@/lib/db";

import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];

  toggleAction: (
    formData: FormData
  ) => Promise<void>;

  deleteAction: (
    formData: FormData
  ) => Promise<void>;
};

export default function TaskList({
  tasks,
  toggleAction,
  deleteAction,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="empty">
        No tasks yet. Add your first task!
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleAction={toggleAction}
          deleteAction={deleteAction}
        />
      ))}
    </ul>
  );
}