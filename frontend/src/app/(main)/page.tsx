import { Suspense } from "react";

async function Stats() {
  const res = await fetch("http://localhost:3001/api/stats", { cache: "no-store" });
  const stats = await res.json();

  return (
    <div>
      <h2>Stats</h2>
      <ul>
        <li>Total: {stats.total}</li>
        <li>Done: {stats.done}</li>
        <li>Open: {stats.open}</li>
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todo App</h1>

      <Suspense fallback={<p>Loading stats...</p>}>
        <Stats />
      </Suspense>

      <h2>Pages</h2>
      <ul>
        <li><a href="/todos">Todos</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </div>
  );
}