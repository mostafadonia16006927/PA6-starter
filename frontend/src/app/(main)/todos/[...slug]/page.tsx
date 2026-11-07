export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Catch-all route</h1>
      <p>Slug: {JSON.stringify(slug)}</p>
    </div>
  );
}