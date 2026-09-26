"use client";

import { useState } from "react";
import { protectedAction } from "@/app/actions/dashboard";

export function ProtectedActionButton() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAction() {
    setLoading(true);
    setMessage("");

    try {
      const result = await protectedAction();

      setMessage(result.message);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleAction}
        disabled={loading}
      >
        {loading
          ? "Executing..."
          : "Run Protected Server Action"}
      </button>

      {message && (
        <p>{message}</p>
      )}
    </div>
  );
}