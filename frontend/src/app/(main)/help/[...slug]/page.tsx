import Link from "next/link";

export default async function HelpPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div style={{ padding: "2rem" }}>
      <p>
        <Link href="/help">Help</Link>
        {slug.map((part, i) => (
          <span key={i}> &gt; {part}</span>
        ))}
      </p>
    </div>
  );
}