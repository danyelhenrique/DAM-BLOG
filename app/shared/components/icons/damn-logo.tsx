type Props = {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  maskProps?: React.SVGProps<SVGMaskElement>;
  gProps?: React.SVGProps<SVGGElement>;
  screenReaderText?: string;
};

export function DAMNLogoIcon({
  svgProps,
  pathProps,
  maskProps,
  gProps,
  screenReaderText = "",
}: Props) {
  return (
    <svg
      width="124"
      height="45"
      viewBox="0 0 124 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <mask
        id="mask0_1_6_damn-logo"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="124"
        height="45"
        {...maskProps}
      >
        <rect width="124" height="45" fill="white" />
      </mask>
      <title className="sr-only">{screenReaderText}</title>
      <g mask="url(#mask0_1_6_damn-logo)" {...gProps}>
        <path
          d="M6.61523 35V34.3496H7.51172C8.51953 34.3496 9.23438 34.0273 9.65625 33.3828C9.91406 32.9961 10.043 32.1289 10.043 30.7812V15.3828C10.043 13.8945 9.87891 12.9629 9.55078 12.5879C9.09375 12.0723 8.41406 11.8145 7.51172 11.8145H6.61523V11.1641H16.3184C19.8809 11.1641 22.5879 11.5684 24.4395 12.377C26.3027 13.1855 27.7969 14.5332 28.9219 16.4199C30.0586 18.3066 30.627 20.4863 30.627 22.959C30.627 26.2754 29.6191 29.0469 27.6035 31.2734C25.3418 33.7578 21.8965 35 17.2676 35H6.61523ZM13.418 33.2773C14.9062 33.6055 16.1543 33.7695 17.1621 33.7695C19.8809 33.7695 22.1367 32.8145 23.9297 30.9043C25.7227 28.9941 26.6191 26.4043 26.6191 23.1348C26.6191 19.8418 25.7227 17.2461 23.9297 15.3477C22.1367 13.4492 19.834 12.5 17.0215 12.5C15.9668 12.5 14.7656 12.6699 13.418 13.0098V33.2773ZM48.4863 27.0195H39.2578L37.6406 30.7812C37.2422 31.707 37.043 32.3984 37.043 32.8555C37.043 33.2188 37.2129 33.541 37.5527 33.8223C37.9043 34.0918 38.6543 34.2676 39.8027 34.3496V35H32.2969V34.3496C33.293 34.1738 33.9375 33.9453 34.2305 33.6641C34.8281 33.1016 35.4902 31.959 36.2168 30.2363L44.6016 10.6191H45.2168L53.5137 30.4473C54.1816 32.041 54.7852 33.0781 55.3242 33.5586C55.875 34.0273 56.6367 34.291 57.6094 34.3496V35H48.2051V34.3496C49.1543 34.3027 49.793 34.1445 50.1211 33.875C50.4609 33.6055 50.6309 33.2773 50.6309 32.8906C50.6309 32.375 50.3965 31.5605 49.9277 30.4473L48.4863 27.0195ZM47.9941 25.7188L43.9512 16.0859L39.8027 25.7188H47.9941ZM72.7617 35L63.5508 14.9434V30.8691C63.5508 32.334 63.709 33.248 64.0254 33.6113C64.459 34.1035 65.1445 34.3496 66.082 34.3496H66.9258V35H58.6289V34.3496H59.4727C60.4805 34.3496 61.1953 34.0449 61.6172 33.4355C61.875 33.0605 62.0039 32.2051 62.0039 30.8691V15.2949C62.0039 14.2402 61.8867 13.4785 61.6523 13.0098C61.4883 12.6699 61.1836 12.3887 60.7383 12.166C60.3047 11.9316 59.6016 11.8145 58.6289 11.8145V11.1641H65.3789L74.0273 29.8145L82.5352 11.1641H89.2852V11.8145H88.459C87.4395 11.8145 86.7188 12.1191 86.2969 12.7285C86.0391 13.1035 85.9102 13.959 85.9102 15.2949V30.8691C85.9102 32.334 86.0742 33.248 86.4023 33.6113C86.8359 34.1035 87.5215 34.3496 88.459 34.3496H89.2852V35H79.1602V34.3496H80.0039C81.0234 34.3496 81.7383 34.0449 82.1484 33.4355C82.4062 33.0605 82.5352 32.2051 82.5352 30.8691V14.9434L73.3418 35H72.7617ZM89.584 11.1641H96.0527L110.625 29.041V15.2949C110.625 13.8301 110.461 12.916 110.133 12.5527C109.699 12.0605 109.014 11.8145 108.076 11.8145H107.25V11.1641H115.547V11.8145H114.703C113.695 11.8145 112.98 12.1191 112.559 12.7285C112.301 13.1035 112.172 13.959 112.172 15.2949V35.3867H111.539L95.8242 16.1914V30.8691C95.8242 32.334 95.9824 33.248 96.2988 33.6113C96.7441 34.1035 97.4297 34.3496 98.3555 34.3496H99.1992V35H90.9023V34.3496H91.7285C92.748 34.3496 93.4688 34.0449 93.8906 33.4355C94.1484 33.0605 94.2773 32.2051 94.2773 30.8691V14.293C93.5859 13.4844 93.0586 12.9512 92.6953 12.6934C92.3438 12.4355 91.8223 12.1953 91.1309 11.9727C90.791 11.8672 90.2754 11.8145 89.584 11.8145V11.1641ZM120.574 31.5898C121.125 31.5898 121.588 31.7832 121.963 32.1699C122.338 32.5449 122.525 33.002 122.525 33.541C122.525 34.0801 122.332 34.543 121.945 34.9297C121.57 35.3047 121.113 35.4922 120.574 35.4922C120.035 35.4922 119.572 35.3047 119.186 34.9297C118.811 34.543 118.623 34.0801 118.623 33.541C118.623 32.9902 118.811 32.5273 119.186 32.1523C119.572 31.7773 120.035 31.5898 120.574 31.5898Z"
          fill="black"
          {...pathProps}
        />
      </g>
    </svg>
  );
}
