"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) router.push("/todos");
  }

  return <button onClick={handleDelete}>Delete</button>;
}