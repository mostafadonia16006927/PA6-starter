import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: "no-store" });
  const todos: { id: string; title: string; done: boolean }[] = await res.json();

  const total = todos.length;
  const done = todos.filter((t) => t.done).length;
  const open = total - done;

  return NextResponse.json({ total, done, open });
}