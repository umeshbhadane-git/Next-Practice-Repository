"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function protectedAction() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  console.log(
    "Protected action executed by:",
    session.user.email
  );

  return {
    success: true,
    message: "Protected action executed successfully.",
  };
}