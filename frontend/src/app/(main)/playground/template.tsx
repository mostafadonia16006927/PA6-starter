import Counter from "./Counter";

export default function PlaygroundTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Counter label="Template counter" />
      {children}
    </div>
  );
}