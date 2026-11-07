export default function DashboardLayout({
  children,
  stats,
  recent,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ flex: 1 }}>{stats}</div>
        <div style={{ flex: 1 }}>{recent}</div>
      </div>
      <hr />
      {children}
    </div>
  );
}