import GhostContentAPI from "@tryghost/content-api";
import { getRequiredServerEnvVar } from "../utils/misc";

export const GhostApi = new GhostContentAPI({
  url: getRequiredServerEnvVar("GHOST_HOST"),
  key: getRequiredServerEnvVar("GHOST_API_KEY"),
  // @ts-ignore
  version: getRequiredServerEnvVar("GHOST_API_VERSION"),
});
