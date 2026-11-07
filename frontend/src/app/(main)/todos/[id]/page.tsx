import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

type Todo = { id: string; title: string; done: boolean };

async function getTodo(id: string): Promise<Todo | null> {
  const res = await fetch(`${process.env.API_URL}/todos/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load todo");
  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = await getTodo(id);
  return { title: todo ? todo.title : "Todo not found" };
}

export default async function TodoDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) notFound();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{todo.title}</h1>
      <p>ID: {todo.id}</p>
      <p>Status: {todo.done ? "Done" : "Open"}</p>
      <Link href="/todos">← Back to todos</Link>
      <DeleteButton id={todo.id.toString()} />
    </div>
  );
}