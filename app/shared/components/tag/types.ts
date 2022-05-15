export type TagComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export type TagLinkComponentProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    link?: string;
  };

export type TagTextComponentProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
};

export type TagHeadingComponentProps =
  React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
  };

export type TagSummartComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  cl?: string;
};
