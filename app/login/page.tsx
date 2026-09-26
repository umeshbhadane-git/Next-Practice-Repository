import { LoginButton } from "@/components/LoginButton";

export default function LoginPage() {
  return (
    <main className="page">
      <h1>Login</h1>

      <p>
        Sign in to access your dashboard.
      </p>

      <LoginButton />
    </main>
  );
}