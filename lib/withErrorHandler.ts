import { NextResponse } from "next/server";
import { ApiError } from "./errors";

export function withErrorHandler<
  T extends (...args: any[]) => Promise<Response>
>(handler: T) {
  return async (...args: Parameters<T>) => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error("API Error:", error);

      if (error instanceof ApiError) {
        return NextResponse.json(
          {
            success: false,
            message: error.message,
            ...(error.details
              ? { details: error.details }
              : {}),
          },
          {
            status: error.statusCode,
          }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: "Internal server error",
        },
        {
          status: 500,
        }
      );
    }
  };
}