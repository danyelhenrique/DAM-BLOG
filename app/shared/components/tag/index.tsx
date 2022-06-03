import type {
  TagComponentProps,
  TagHeadingComponentProps,
  TagLinkComponentProps,
  TagTextComponentProps,
} from "./types";

export function TagComponent({ children, ...props }: TagComponentProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={`block  text-sm uppercase leading-6 text-white md:flex ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TagLinkComponent({
  link,
  children,
  ...props
}: TagLinkComponentProps) {
  const { className, ...rest } = props;

  return (
    <a
      href={link}
      {...rest}
      className={`flex items-center bg-black ${className || ""}`}
    >
      {children}
    </a>
  );
}

export function TagHeadingComponent({
  children,
  ...props
}: TagHeadingComponentProps) {
  const { className = "", ...rest } = props;

  return (
    <h2
      className={`block items-center bg-black p-[0.25rem_0.75rem] text-center font-WiredMono text-sm uppercase  leading-6 text-white md:flex ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TagTextComponent({
  children,
  ...props
}: TagTextComponentProps) {
  const { className, ...rest } = props;
  return (
    <span
      className={`flex items-center  p-[0.25rem_0.75rem] text-sm uppercase leading-6 text-white ${
        className || ""
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
