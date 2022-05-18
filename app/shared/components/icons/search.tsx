type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  screenReaderText?: string;
};

export function SearchIcon({
  svgProps,
  pathProps,
  screenReaderText = "",
}: Props) {
  return (
    <svg
      className="icon icon-search"
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title className="sr-only">
        {!screenReaderText ? "Search" : screenReaderText}
      </title>
      <path
        d="M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.249 8.335l4.458 4.458-1.414 1.414-4.458-4.458a6.5 6.5 0 1 1 1.414-1.414z"
        fillRule="nonzero"
        {...pathProps}
      ></path>
    </svg>
  );
}
