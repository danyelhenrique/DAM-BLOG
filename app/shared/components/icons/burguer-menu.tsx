type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  screenReaderText: string;
};

export function BurguerMenuIcon({
  svgProps,
  pathProps,
  screenReaderText,
}: Props) {
  return (
    <svg
      className="icon icon-menu block h-[100%] w-[100%] "
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title className="sr-only">{screenReaderText}</title>

      <path
        d="M8 10h16v2H8v-2zm0 5h16v2H8v-2zm0 5h16v2H8v-2z"
        fillRule="evenodd"
        className="fill-[#000000]"
        {...pathProps}
      ></path>
    </svg>
  );
}
