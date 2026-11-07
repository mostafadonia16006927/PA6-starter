import Counter from "./Counter";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: "2rem" }}>
      <Counter label="Layout counter" />
      {children}
    </div>
  );
}