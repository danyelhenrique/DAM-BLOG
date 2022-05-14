import React, { createContext } from "react";
import type { BurguerMenuContextType } from "./menu-types";

export const BurguerMenuContext = createContext({} as BurguerMenuContextType);

export const BurguerMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setMenuOpen] = React.useState<boolean>(false);

  const toggle = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  return (
    <BurguerMenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </BurguerMenuContext.Provider>
  );
};
