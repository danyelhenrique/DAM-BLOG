type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  screenReaderText?: string;
};

export function TiktokIcon({
  svgProps,
  pathProps,
  screenReaderText = "",
}: Props) {
  return (
    <svg
      className="icon icon-tiktok"
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title>{screenReaderText || "Tiktok Icon"}</title>
      <path
        d="M22.6895 14.4733C22.5587 14.486 22.4275 14.4927 22.2961 14.4933C20.8554 14.4935 19.5115 13.7672 18.7223 12.5618V19.1388C18.7223 21.8235 16.546 24 13.8612 24C11.1764 24 9 21.8236 9 19.1388C9 16.454 11.1764 14.2777 13.8612 14.2777C13.9626 14.2777 14.0619 14.2868 14.1616 14.293V16.6887C14.0619 16.6767 13.9638 16.6584 13.8612 16.6584C12.4909 16.6584 11.3802 17.7692 11.3802 19.1394C11.3802 20.5097 12.4909 21.6204 13.8612 21.6204C15.2317 21.6204 16.4419 20.5407 16.4419 19.1703L16.4659 8H18.7576C18.9737 10.0552 20.6308 11.6603 22.6918 11.811V14.4733"
        fill="#e5e5e5"
        {...pathProps}
      ></path>
    </svg>
  );
}
