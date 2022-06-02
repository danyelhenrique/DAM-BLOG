import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";

type NavLinkProps = LinkProps & {
  text: string;
};

type NavItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  children?: React.ReactNode;
};

export function NavItem(props: NavItemProps) {
  const { children, className = "", ...rest } = props;

  return (
    <li
      className={`mr-[1em] flex h-[1.5rem] items-center justify-center ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
}

export function NavLink(props: NavLinkProps) {
  const { text, to, className = "", ...rest } = props;
  return (
    <Link
      className={`block font-WiredMono text-xs uppercase hover:underline ${className}`}
      to={to}
      {...rest}
    >
      {text}
    </Link>
  );
}

NavItem.NavLink = NavLink;
