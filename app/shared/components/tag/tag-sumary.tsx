export function TagSummartComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex border-b-2 border-black border-solid">{children}</div>
  );
}
