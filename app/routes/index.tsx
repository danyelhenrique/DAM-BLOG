import { HeaderComponent } from "~/shared/components/header";
import { BurguerMenuProvider } from "~/shared/context/menu";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <BurguerMenuProvider>
        <HeaderComponent />
      </BurguerMenuProvider>
    </>
  );
}
