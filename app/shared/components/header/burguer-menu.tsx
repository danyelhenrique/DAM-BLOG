import { classNames } from "~/shared/helpers/classNames";
import { useMenu } from "~/shared/hooks/user-menu";

export function BurguerMenu() {
  const { isOpen, toggle } = useMenu();

  const menuClassName = classNames(
    isOpen
      ? `before:top-[7px] before:rotate-[135deg] after:rotate-[-135deg] after:top-[7px]`
      : ``
  );

  return (
    <button
      className={`delay-0 relative block h-[25px] w-[22px] rotate-0 transform-gpu cursor-pointer bg-transparent transition duration-[0.5] ease-in-out 
        before:absolute before:left-0 before:top-[0px] before:h-[2px] before:w-[100%] before:bg-black before:opacity-[1]
        after:absolute after:left-0 after:top-[14px] after:h-[2px] after:w-[100%] after:bg-black after:opacity-[1] ${menuClassName}`}
      onClick={toggle}
    >
      <span
        className={`absolute left-0 top-[7px] h-[2px] w-[100%] bg-black opacity-[1] ${classNames(
          isOpen ? `opacity-[0]` : ``
        )}`}
      ></span>
    </button>
  );
}
