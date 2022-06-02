type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  screenReaderText?: string;
};

export function YouTubeIcon({
  svgProps,
  pathProps,
  screenReaderText = "",
}: Props) {
  return (
    <svg
      className="icon icon-youtube"
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title>{screenReaderText || "YouTube Icon"}</title>
      <path
        d="M23.666 11.76C23.5755 11.4196 23.3971 11.109 23.1488 10.8593C22.9005 10.6095 22.5909 10.4294 22.251 10.337C21.003 10 16 10 16 10C16 10 10.997 10 9.749 10.337C9.40915 10.4294 9.09955 10.6095 8.85121 10.8593C8.60287 11.109 8.42451 11.4196 8.334 11.76C8 13.016 8 15.636 8 15.636C8 15.636 8 18.256 8.334 19.512C8.42436 19.8526 8.60265 20.1634 8.851 20.4133C9.09934 20.6632 9.40903 20.8435 9.749 20.936C10.997 21.273 16 21.273 16 21.273C16 21.273 21.003 21.273 22.251 20.936C22.591 20.8435 22.9007 20.6632 23.149 20.4133C23.3974 20.1634 23.5756 19.8526 23.666 19.512C24 18.257 24 15.636 24 15.636C24 15.636 24 13.016 23.666 11.76ZM14.364 18.015V13.257L18.545 15.637L14.364 18.015Z"
        fill="#e5e5e5"
        {...pathProps}
      ></path>
    </svg>
  );
}
