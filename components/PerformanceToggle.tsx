"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function PerformanceToggle() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const version =
    searchParams.get("version") === "after"
      ? "after"
      : "before";

  return (
    <div className="toggle">

      <button
        className={version === "before" ? "active" : ""}
        onClick={() =>
          router.push("/blog?version=before")
        }
      >
        BEFORE
      </button>

      <button
        className={version === "after" ? "active" : ""}
        onClick={() =>
          router.push("/blog?version=after")
        }
      >
        AFTER
      </button>

    </div>
  );
}