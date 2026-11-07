"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTodoPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.message || "Failed to create todo");
      return;
    }

    router.push("/todos");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo title"
        />
        <button type="submit">Create</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}