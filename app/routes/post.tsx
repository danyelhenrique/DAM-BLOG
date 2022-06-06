import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/react/routeModules";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { useEffect } from "react";
import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { addCustomScriptTag } from "~/shared/utils/misc";
import { getPostToPostPage } from "~/shared/utils/session.server";
export function headers() {
  return {
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export const loader: LoaderFunction = async ({ params }) => {
  const data = await getPostToPostPage(params?.index as string);

  if (!data || data?.hasOwnProperty("error")) {
    throw redirect("/404");
  }

  return json(data, {
    status: 200,
    headers: { "cache-control": "max-age-3600" },
  });
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "https://dhfc.ghost.io/public/cards.min.css?v=4bb87c3822",
      as: "style",
    },
    {
      rel: "stylesheet",
      href: "https://dhfc.ghost.io/public/cards.min.css?v=4bb87c3822",
    },
  ];
};

const hasHero = false;
export default function Post() {
  useEffect(() => {
    addCustomScriptTag({
      src: "https://dhfc.ghost.io/public/cards.min.js?v=4bb87c3822",
      async: false,
      defer: false,
      locale: "head",
    });
  }, []);
  return (
    <section className="grid px-16 pt-10 mx-auto lg:max-w-section-max ">
      <div className="flex items-center header-post">
        <TagComponent className="flex w-100% justify-center lg:block lg:w-auto">
          <TagComponent.Heading className="text-xs">
            KHARI JOHNSON
          </TagComponent.Heading>
        </TagComponent>

        <CardComponent.Tag className="block mx-3">
          <CardComponent.TagText className="font-WiredMono">
            BUSINESS
          </CardComponent.TagText>
        </CardComponent.Tag>

        <time className="inline-block text-xs text-left text-black font-WiredMono">
          JUN 2, 2022 7:00 AM
        </time>
      </div>

      <h1 className="header-post-title mt-4 pb-4 font-LabGrotesque text-5xl font-semibold tracking-[-0.025em] text-black">
        Satellites and AI Can Help Solve Big Problems—If Given the Chance
      </h1>

      <span className="sub-title font-LabGrotesque text-xl font-bold text-[#333333]	">
        Traditional hurdles stand in the way of ambitious plans to use imagery
        to help feed people, reduce poverty, and protect the planet.
      </span>

      {hasHero && (
        <div>
          <picture>
            <source />
            <img src="" alt="Banner" />
          </picture>
        </div>
      )}

      <article className="post-content">
        <Outlet />
      </article>
    </section>
  );
}
