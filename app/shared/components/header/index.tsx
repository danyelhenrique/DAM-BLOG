/* This example requires Tailwind CSS v2.0+ */

import { BurguerMenu } from "./burguer-menu";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export function HeaderComponent() {
  return (
    <header className="grid grid-cols-[auto_auto_minmax(0px,_1fr)_auto_auto_auto]">
      <div className="flex h-[3.5rem] w-[3.5rem] items-center">
        <BurguerMenu />
      </div>
      <div className="m-auto flex min-w-[7.5rem] max-w-[12.5rem] items-center justify-center overflow-hidden">
        LOGO
      </div>
      <div className="flex h-[100%] items-center">NAV CONTENT</div>
      <div className="relative flex items-center content-end m-0 ml-auto">
        <a
          href="#void"
          rel="nofollow"
          className="relative m-[0px_2rem_0px_0px] block h-[100%]"
        >
          SIGN IN
        </a>
      </div>
      <div className="m-[0px_1.5rem_0px_1rem] flex  min-w-[auto] border-0 p-0">
        SEARCH
      </div>
    </header>
  );
}
