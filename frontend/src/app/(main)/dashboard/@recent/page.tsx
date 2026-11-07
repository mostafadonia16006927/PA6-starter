type Todo = { id: string; title: string; done: boolean };

async function getRecent(): Promise<Todo[]> {
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: "no-store" });
  if (!res.ok) return [];
  const todos: Todo[] = await res.json();
  return todos.slice(-3).reverse();
}

export default async function RecentDefault() {
  const todos = await getRecent();

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>Recent (last 3)</h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}