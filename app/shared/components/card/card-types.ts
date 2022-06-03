import type { RemixLinkProps } from "@remix-run/react/components";

export type CardImagePictureProps =
  React.SourceHTMLAttributes<HTMLSourceElement> & {
    srcSet: string;
    media: string;
    cl?: string;
  };

export type CardComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  cl?: string;
};

export type CardPictureWrapperComponentProps =
  React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
  };
export type CardImageComponentProps =
  React.ImgHTMLAttributes<HTMLImageElement> & {
    alt: string | undefined;
    src: string | undefined;
    cl?: string;
  };

export type CardTagTextComponentProps =
  React.HTMLAttributes<HTMLSpanElement> & {
    children?: React.ReactNode;
    cl?: string;
  };

export type CardTagComponentProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    cl?: string;
  };

export type CardTitleComponentProps = RemixLinkProps & {
  className?: string;
  children?: React.ReactNode;
  to?: string;
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
};

export type CardAuthorComponentProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
  cl?: string;
};

export type CardAuthorLinkComponentProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    cl?: string;
  };

export type CardDescriptionComponentProps =
  React.HTMLAttributes<HTMLParagraphElement> & {
    children?: React.ReactNode;
    cl?: string;
  };
