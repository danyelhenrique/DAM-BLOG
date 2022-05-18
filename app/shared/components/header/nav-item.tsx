type NavLinkProps = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  "href"
> & {
  text: string;
  href: string;
};

export function NavItem({ children }: { children?: React.ReactNode }) {
  return (
    <li className="mr-[1em] flex h-[1.5rem] items-center justify-center">
      {children}
    </li>
  );
}

export function NavLink({ href, text, ...rest }: NavLinkProps) {
  return (
    <a className="block text-xs uppercase font-WiredMono" href={href} {...rest}>
      {text}
    </a>
  );
}

NavItem.NavLink = NavLink;
