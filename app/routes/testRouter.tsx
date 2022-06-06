import {
  Outlet,
  useFetcher,
  useLoaderData,
  useMatches,
} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import {
  getHighlightPosts,
  getRecentPosts,
  getTodaysPost,
} from "~/shared/utils/session.server";

export const loader: LoaderFunction = async () => {
  const [highlightPosts, todaysPosts, recentPosts] = await Promise.all([
    getHighlightPosts(),
    getTodaysPost(),
    getRecentPosts(),
  ]);

  const lasTagHighlight = highlightPosts[0]?.tags?.reverse()[0];
  // @ts-ignore
  highlightPosts[0].tag = lasTagHighlight;

  const data: any = {
    highlightPost: highlightPosts[0],
    todaysPosts,
    recentPosts,
  };

  return json(data, {
    status: 200,
    headers: { "cache-control": "max-age-3600" },
  });
};

export default () => {
  const state = useLoaderData();
  const mach = useMatches(); // TODO:
  const a = useFetcher();

  console.log("state", a);

  return (
    <h1>
      h1 pai
      <Outlet />
    </h1>
  );
};
