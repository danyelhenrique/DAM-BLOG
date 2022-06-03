import type { TagSummartComponentProps } from "./types";

export function TagSummartComponent(props: TagSummartComponentProps) {
  const { className = "", children, ...rest } = props;
  return (
    <div
      className={`block border-t-2 border-solid border-black md:flex ${className} `}
      {...rest}
    >
      {children}
    </div>
  );
}
