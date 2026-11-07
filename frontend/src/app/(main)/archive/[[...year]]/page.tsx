export default async function ArchivePage({
  params,
}: {
  params: Promise<{ year?: string[] }>;
}) {
  const { year } = await params;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{year && year.length > 0 ? year.join(", ") : "All years"}</h1>
    </div>
  );
}