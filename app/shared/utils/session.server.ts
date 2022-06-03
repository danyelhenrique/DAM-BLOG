import type { Params } from "@tryghost/content-api";
import { GhostApi } from "../services/ghost-api";

async function getHighlightPosts() {
  return GhostApiBrowse({ filter: "tags:[highlight]" });
}

async function getTodaysPost() {
  return GhostApiBrowse({ filter: "tags:[Today]", limit: 2 });
}

async function getRecentPosts() {
  return GhostApiBrowse({ filter: "tags:[recent]", limit: 5 });
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
};
