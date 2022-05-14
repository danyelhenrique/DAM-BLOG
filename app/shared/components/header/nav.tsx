import { NavItem } from "./nav-item";

const links = [
  { text: "Backchannel", href: "#void" },
  { text: "Business", href: "#void" },
  { text: "Culture", href: "#void" },
  { text: "Gear", href: "#void" },
  { text: "Ideas", href: "#void" },
  { text: "Science", href: "#void" },
  { text: "Security", href: "#void" },
];
export function Nav() {
  return (
    <nav className="block">
      <ul className="flex max-h-[1.5rem] p-0">
        {links.map((l) => (
          <NavItem key={l.text}>
            <NavItem.NavLink href={l.href} text={l.text} />
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
