import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { LogoutButton } from "@/components/LogoutButton";
import { ProtectedActionButton } from "@/components/ProtectedActionButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="page">
      <h1>Dashboard</h1>

      <p>
        Welcome,{" "}
        {session.user?.name ?? "User"}!
      </p>

      {session.user?.email && (
        <p>
          Email: {session.user.email}
        </p>
      )}

      {session.user?.image && (
        <img
          src={session.user.image}
          alt="Profile"
          width={80}
          height={80}
          className="avatar"
        />
      )}

      <hr />

      <h2>Protected Server Action</h2>

      <p>
        This operation can only be executed by an
        authenticated user.
      </p>

      <ProtectedActionButton />

      <hr />

      <LogoutButton />
    </main>
  );
}