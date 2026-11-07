import Link from "next/link";
import { Suspense } from "react";

type Todo = { id: string; title: string; done: boolean };

async function getTodos(status?: string): Promise<Todo[]> {
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load todos");
  const todos: Todo[] = await res.json();

  if (status === "done") return todos.filter((t) => t.done);
  if (status === "open") return todos.filter((t) => !t.done);
  return todos;
}

async function TodoList({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const todos = await getTodos(status);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            {todo.title} — {todo.done ? "✓" : "○"}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todos</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link href="/todos">All</Link>
        <Link href="/todos?status=open">Open</Link>
        <Link href="/todos?status=done">Done</Link>
        <Link href="/todos/new">+ New</Link>
      </div>

      <Suspense fallback={<p>Loading todos...</p>}>
        <TodoList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}