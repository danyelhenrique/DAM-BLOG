import type { Params } from "@tryghost/content-api";
import { GhostApi } from "../services/ghost-api";

async function getHighlightPosts() {
  return GhostApiBrowse({ filter: "tags:[highlight]" });
}

async function getTodaysPost() {
  return GhostApiBrowse({ filter: "tags:[Today]", limit: 2 });
}

async function getRecentPosts() {
  const todayDate = new Date();
  const dateStr = `${todayDate.getFullYear()}-${String(
    Number(todayDate.getDay())
  ).padStart(2, "0")}-${String(todayDate.getMonth()).padStart(
    2,
    "0"
  )} 00:00:00`;
  return GhostApiBrowse({
    filter: `tag:-highlight+tag:-Today+published_at:>'${dateStr}'`,
    //filter: `published_at:>'2017-06-03 23:43:12'`,
    limit: 5,
    // @ts-ignore
    include: "published_at",
  });
}

async function getTrending() {
  return GhostApiBrowse({ filter: "tags:[trending]", limit: 4 });
}

async function getLongreads() {
  return GhostApiBrowse({
    filter: "tags:[long-reads]",
    limit: 1,
  });
}

async function getFistTagsSection() {
  return GhostApiBrowse({
    filter: "tags:[tags-first-tags-section]",
    limit: 1,
  });
}

async function getPostToPostPage(slug: string) {
  try {
    const data = await GhostApi.posts.read({ slug });
    console.log(
      "DATA-----------------------------------------------------------",
      data
    );
    throw data;
    return data;
  } catch {
    return { error: true, message: "Post not found" };
  }
}

async function GhostApiBrowse(params: Params) {
  return GhostApi.posts.browse({
    filter: "tags:[highlight]",
    order: "posts.published_at DESC",
    limit: 1,
    // @ts-ignore
    include: "authors,tags",
    ...params,
  });
}

export {
  GhostApiBrowse,
  getHighlightPosts,
  getTodaysPost,
  getRecentPosts,
  getTrending,
  getLongreads,
  getFistTagsSection,
  getPostToPostPage,
};
