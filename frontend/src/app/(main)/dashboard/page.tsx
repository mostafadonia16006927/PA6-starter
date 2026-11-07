import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h2>Dashboard Home</h2>
      <Link href="/dashboard/settings">Go to settings</Link>
    </div>
  );
}