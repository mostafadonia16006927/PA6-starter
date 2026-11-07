import Link from "next/link";
import { Suspense } from "react";
import ActiveLink from "./ActiveLink";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Suspense fallback={<Link href="/">Home</Link>}>
        <ActiveLink href="/">Home</ActiveLink>
      </Suspense>
      <Suspense fallback={<Link href="/todos">Todos</Link>}>
        <ActiveLink href="/todos">Todos</ActiveLink>
      </Suspense>
      <Suspense fallback={<Link href="/login">Login</Link>}>
        <ActiveLink href="/login">Login</ActiveLink>
      </Suspense>
    </nav>
  );
}