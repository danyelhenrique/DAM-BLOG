type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  children?: React.ReactNode;
  screenReaderText: string;
};

export function CloseMenuIcon({
  svgProps,
  pathProps,
  screenReaderText,
}: Props) {
  return (
    <svg
      className="icon icon-close"
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title className="sr-only">{screenReaderText}</title>
      <path
        d="M16 14.586l6.364-6.364 1.414 1.414L17.414 16l6.364 6.364-1.414 1.414L16 17.414l-6.364 6.364-1.414-1.414L14.586 16 8.222 9.636l1.414-1.414z"
        fill-rule="nonzero"
        {...pathProps}
      ></path>
    </svg>
  );
}
