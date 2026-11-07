import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todo not found</h1>
      <p>That todo does not exist.</p>
      <Link href="/todos">← Back to todos</Link>
    </div>
  );
}