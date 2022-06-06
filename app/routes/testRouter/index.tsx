import { useFetcher, useLoaderData, useMatches } from "@remix-run/react";

export default () => {
  const state = useLoaderData();
  const mach = useMatches();
  const a = useFetcher();

  console.log("state", state);
  console.log("mach", mach);
  console.log("a", a);

  return <div>filho</div>;
};
