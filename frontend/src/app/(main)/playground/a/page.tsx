import Link from "next/link";

export default function APage() {
  return (
    <div>
      <h1>Page A</h1>
      <Link href="/playground/b">Go to B</Link>
    </div>
  );
}