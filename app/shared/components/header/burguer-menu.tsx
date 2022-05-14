import { classNames } from "~/shared/helpers/classNames";
import { useMenu } from "~/shared/hooks/user-menu";
import { BurguerMenuIcon } from "../icons/burguer-menu";
import { CloseMenuIcon } from "../icons/close-menu";

export function BurguerMenu() {
  const { isOpen, toggle } = useMenu();

  const MenuIcon = !isOpen ? BurguerMenuIcon : CloseMenuIcon;

  return (
    <button
      className={`${classNames(
        isOpen ? `menuOpen` : ``
      )} d-block h-[2rem] w-[2rem]`}
      onClick={toggle}
    >
      <MenuIcon screenReaderText="menu icon" />
    </button>
  );
}
