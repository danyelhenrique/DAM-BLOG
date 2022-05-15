import type { TagSummartComponentProps } from "./types";

export function TagSummartComponent(props: TagSummartComponentProps) {
  return (
    <div
      className={`${props.cl} flex border-t-2 border-solid border-black`}
      {...props}
    >
      {props.children}
    </div>
  );
}
