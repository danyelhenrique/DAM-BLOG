export type TagComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  cl?: string;
};

export type TagLinkComponentProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    cl?: string;
    link?: string;
  };

export type TagTextComponentProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
  cl?: string;
};

export type TagHeadingComponentProps =
  React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
    cl?: string;
  };

export type TagSummartComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  cl?: string;
};
