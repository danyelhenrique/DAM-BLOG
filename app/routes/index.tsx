import { Outlet } from "@remix-run/react";
import { HomeContainer } from "~/Containers/components/home";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <HomeContainer />
      <Outlet />
    </>
  );
}
