import Link from "next/link";

type Todo = { id: string; title: string; done: boolean };

async function getTodo(id: string): Promise<Todo | null> {
  try {
    const res = await fetch(`${process.env.API_URL}/todos/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function TodoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <h2>{todo.title}</h2>
        <p>ID: {todo.id}</p>
        <p>Status: {todo.done ? "Done" : "Open"}</p>
        <Link href="/todos">Close</Link>
      </div>
    </div>
  );
}