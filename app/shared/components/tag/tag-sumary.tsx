import type { TagSummartComponentProps } from "./types";

export function TagSummartComponent(props: TagSummartComponentProps) {
  const { className = "", children, ...rest } = props;
  return (
    <div
      className={`flex border-t-2 border-solid border-black ${className} `}
      {...rest}
    >
      {children}
    </div>
  );
}
