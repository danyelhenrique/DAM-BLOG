import { Link } from "@remix-run/react";
import { DAMNLogoIcon } from "../icons/damn-logo";
import { SearchIcon } from "../icons/search";
import { BurguerMenu } from "./burguer-menu";
import { Nav } from "./nav";

export function HeaderComponent() {
  return (
    <header className="fixed top-0 z-10 grid h-[3.5rem] w-100% grid-cols-[auto_auto_minmax(0px,_1fr)_auto_auto_auto] border-b-[1px] border-solid border-border-header bg-[#fff]">
      <div className="flex w-[3.5rem] items-center justify-center p-[0px_0.5rem]">
        <BurguerMenu />
      </div>
      <Link
        to="/"
        className="m-auto mr-[20px] flex min-w-[7.5rem] max-w-[12.5rem] items-center justify-center overflow-hidden"
      >
        <DAMNLogoIcon
          svgProps={{
            height: 37,
          }}
        />
      </Link>
      <div className="flex h-[100%] items-center">
        <Nav />
      </div>
      <div className="relative flex items-center content-end m-0 ml-auto">
        <Link
          to="#void"
          rel="nofollow"
          className="relative m-[0px_2rem_0px_0px] flex h-[100%] items-center  justify-center font-WiredMono text-xs text-black 
          after:absolute after:top-[16px] after:right-[-1rem] after:inline-block after:h-[20px] after:w-[2px] after:bg-[#e5e5e5]"
        >
          SIGN IN
        </Link>
      </div>
      <button
        className="m-[0px_1.5rem_0px_1rem] flex  min-w-[auto] items-center justify-center border-0 p-0"
        type="button"
      >
        <SearchIcon
          svgProps={{
            color: "#333333",
            height: 32,
            width: 32,
          }}
        />
      </button>
    </header>
  );
}
