import { Link } from "@remix-run/react";
import { Fragment } from "react";
import { DAMNLogoIcon } from "../icons/damn-logo";
import { PinterestIcon } from "../icons/pinterest";
import { TiktokIcon } from "../icons/tiktok";
import { TwitterIcon } from "../icons/twitter";
import { YouTubeIcon } from "../icons/youtube";

const data = [
  {
    title: "MORE FROM WIRED",
    childrens: [
      {
        text: "Subscribe",
        link: "#void",
      },
      {
        text: "Newsletters",
        link: "#void",
      },
      {
        text: "FAQ",
        link: "#void",
      },
      {
        text: "Wired Staff",
        link: "#void",
      },
      {
        text: "Press Center",
        link: "#void",
      },
      {
        text: "Coupons",
        link: "#void",
      },
      {
        text: "Editorial Standards",
        link: "#void",
      },
    ],
  },

  {
    title: "CONTACT",
    childrens: [
      {
        text: "Advertise",
        link: "#void",
      },
      {
        text: "Contact Us",
        link: "#void",
      },
      {
        text: "Customer Care",
        link: "#void",
      },
      {
        text: "Jobs",
        link: "#void",
      },
    ],
  },
];

export function FooterComponent() {
  return (
    <footer className="mt-3 block w-100% bg-black">
      <div className="mx-auto grid	 max-w-section-max grid-cols-[minmax(auto,_720px)_auto_auto] grid-rows-2 pt-12 lg:px-section-padding">
        <div className="flex flex-col ">
          <div className="footer-logo mr-auto">
            <Link
              to="/"
              className="m-auto mr-[20px] flex min-w-[7.5rem] max-w-[12.5rem] items-center justify-center overflow-hidden"
            >
              <DAMNLogoIcon
                svgProps={{
                  height: 37,
                  fill: "#fff",
                  className: "ml-[-27%]",
                }}
                pathProps={{
                  fill: "#fff",
                }}
              />
            </Link>
          </div>

          <p className="max-w-[560px]  font-BreveText text-sm	 text-[#f3f3f3]">
            WIRED is where tomorrow is realized. It is the essential source of
            information and ideas that make sense of a world in constant
            transformation. The WIRED conversation illuminates how technology is
            changing every aspect of our lives—from culture to business, science
            to design. The breakthroughs and innovations that we uncover lead to
            new ways of thinking, new connections, and new industries.
          </p>
        </div>
        <Fragment>
          {data.map((d) => (
            <nav key={d.title}>
              <div className="footer-nav-title font-WiredMono text-xs text-[#e5e5e5]">
                {d.title}
              </div>
              <ul className="navigation__list terx">
                {d.childrens.map((c) => (
                  <li key={c.text} className="navigation__list-item">
                    <a
                      className="navigation__link text-xs	 text-[#999999] hover:underline"
                      href={c.link}
                    >
                      {c.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Fragment>

        <div className="shared-icons flex pt-10 pb-12">
          <Link to="#void" className="flex h-12 w-12">
            <TwitterIcon
              svgProps={{
                className: "w-100% h-100% block",
              }}
            />
          </Link>
          <Link to="#void" className="flex h-12 w-12">
            <PinterestIcon
              svgProps={{
                className: "w-100% h-100% block",
              }}
            />
          </Link>
          <Link to="#void" className="flex h-12 w-12">
            <YouTubeIcon
              svgProps={{
                className: "w-100% h-100% block",
              }}
            />
          </Link>
          <Link to="#void" className="flex h-12 w-12">
            <PinterestIcon
              svgProps={{
                className: "w-100% h-100% block",
              }}
            />
          </Link>
          <Link to="#void" className="flex h-12 w-12">
            <TiktokIcon
              svgProps={{
                className: "w-100% h-100% block",
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
