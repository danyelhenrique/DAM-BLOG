import { useMatches } from "@remix-run/react";

export default () => {
  const [_, { data }] = useMatches();

  console.log("mach", data);

  return <div dangerouslySetInnerHTML={{ __html: data.html }} />;
};
