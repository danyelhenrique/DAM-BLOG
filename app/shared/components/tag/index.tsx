import type {
  TagComponentProps,
  TagHeadingComponentProps,
  TagLinkComponentProps,
  TagTextComponentProps,
} from "./types";

export function TagComponent({ children, ...rest }: TagComponentProps) {
  return (
    <div
      className={`flex text-sm uppercase leading-6 text-white ${rest.cl || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TagLinkComponent({
  link,
  children,
  ...rest
}: TagLinkComponentProps) {
  return (
    <a
      href={link}
      {...rest}
      className={`flex items-center bg-black ${rest.cl || ""}`}
    >
      {children}
    </a>
  );
}

export function TagHeadingComponent({
  children,
  ...rest
}: TagHeadingComponentProps) {
  return (
    <h2
      className={`flex items-center bg-black p-[0.25rem_0.75rem] text-sm uppercase  leading-6 text-white ${
        rest.cl || ""
      }`}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TagTextComponent({ children, ...rest }: TagTextComponentProps) {
  return (
    <span
      className={`flex items-center  p-[0.25rem_0.75rem] text-sm uppercase leading-6 text-white ${
        rest.cl || ""
      }`}
      {...rest}
    >
      {children}
    </span>
  );
}

TagComponent.Link = TagLinkComponent;
TagComponent.Heading = TagHeadingComponent;
TagComponent.Text = TagTextComponent;
