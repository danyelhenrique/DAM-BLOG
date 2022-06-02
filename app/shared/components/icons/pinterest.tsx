type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  screenReaderText?: string;
};

export function PinterestIcon({
  svgProps,
  pathProps,
  screenReaderText = "",
}: Props) {
  return (
    <svg
      className="icon icon-pinterest"
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title className="sr-only">{screenReaderText || "pinterest icon"}</title>

      <path
        d="M15.169 18.448C14.793 20.093 14.425 21.678 13.623 22.928C13.377 23.311 13.13 23.793 12.71 24C12.09 20.807 13.387 18.12 13.899 15.436C13.246 14.103 13.652 11.846 15.051 11.59C17.077 11.22 16.543 13.664 16.2 14.8C16.01 15.424 15.671 16.021 15.722 16.705C15.835 18.146 17.648 18.24 18.577 17.497C19.909 16.436 20.295 14.385 20.164 12.7C19.967 10.135 17.062 8.85997 14.496 9.88497C13.173 10.413 11.973 11.628 11.799 13.413C11.709 14.353 11.906 15.104 12.276 15.634C12.331 15.715 12.523 15.857 12.552 16.072C12.61 16.506 12.352 16.974 12.116 17.298C10.802 16.92 10.124 15.741 10.016 14.248C9.76596 10.848 12.558 8.26397 15.841 8.02197C19.348 7.76497 22.126 9.78896 22.384 12.74C22.576 14.933 21.797 17.14 20.561 18.329C19.631 19.221 17.656 20.096 16.041 19.242C15.684 19.052 15.524 18.82 15.169 18.448Z"
        fill="#e5e5e5"
        {...pathProps}
      ></path>
    </svg>
  );
}
