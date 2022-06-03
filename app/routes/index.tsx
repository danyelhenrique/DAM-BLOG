import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { Fragment } from "react";
import { HomeContainer } from "~/Containers/components/home";
import {
  getHighlightPosts,
  getRecentPosts,
  getTodaysPost,
} from "~/shared/utils/session.server";

type LoaderData = {
  todaysPosts: any;
  recentPosts: any;
  highlightPost: any;
};

export function headers() {
  return {
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export const loader: LoaderFunction = async () => {
  const [highlightPosts, todaysPosts, recentPosts] = await Promise.all([
    getHighlightPosts(),
    getTodaysPost(),
    getRecentPosts(),
  ]);

  const lasTagHighlight = highlightPosts[0]?.tags?.reverse()[0];
  // @ts-ignore
  highlightPosts[0].tag = lasTagHighlight;

  const data: LoaderData = {
    highlightPost: highlightPosts[0],
    todaysPosts,
    recentPosts,
  };

  return json(data, {
    status: 200,
    headers: { "cache-control": "max-age-3600" },
  });
};

export default function Index() {
  // const user = useOptionalUser();

  return (
    <Fragment>
      <HomeContainer />
      <Outlet />
    </Fragment>
  );
}
