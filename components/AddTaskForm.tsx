"use client";

import { useActionState } from "react";

import { addTask, type ActionState } from "@/app/actions";
import SubmitButton from "./SubmitButton";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function AddTaskForm() {
  const [state, formAction] = useActionState(
    addTask,
    initialState
  );

  return (
    <form action={formAction} className="add-form">
      <div className="form-row">
        <input
          name="title"
          type="text"
          placeholder="Enter a task..."
          maxLength={100}
          required
        />

        <SubmitButton />
      </div>

      {state.errors?.title && (
        <p className="error">
          {state.errors.title[0]}
        </p>
      )}

      {state.message && (
        <p className={state.success ? "success" : "error"}>
          {state.message}
        </p>
      )}
    </form>
  );
}