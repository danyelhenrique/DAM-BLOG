type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  screenReaderText?: string;
  svgClassName?: string;
  pathClassName?: string;
};

export function PlayIcon({
  svgProps,
  pathProps,
  containerProps,
  svgClassName = "",
  pathClassName = "",
  screenReaderText = "",
}: Props) {
  return (
    <div {...containerProps}>
      <svg
        className={`icon icon-play ${svgClassName}`}
        focusable="false"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#757575"
        {...svgProps}
      >
        <title className="sr-only">
          {!screenReaderText ? "Play Button" : screenReaderText}
        </title>
        <path
          d="M11 8l14 8-14 8z"
          fillRule="evenodd"
          {...pathProps}
          className={`${pathClassName}`}
        ></path>
      </svg>
    </div>
  );
}
