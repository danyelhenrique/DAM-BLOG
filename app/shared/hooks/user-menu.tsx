import { useContext } from "react";
import { BurguerMenuContext } from "../context/menu";

export function useMenu() {
  const burguerrMenuContext = useContext(BurguerMenuContext);

  return burguerrMenuContext;
}
