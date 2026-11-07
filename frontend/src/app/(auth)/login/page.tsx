"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    document.cookie = "demo-auth=1; path=/";
    router.push("/dashboard");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}