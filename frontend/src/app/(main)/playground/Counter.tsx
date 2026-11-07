"use client";

import { useState } from "react";

export default function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <strong>{label}</strong>: {count}
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: "1rem" }}>
        +
      </button>
    </div>
  );
}