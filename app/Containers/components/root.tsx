import { FooterComponent } from "~/shared/components/footer";
import { HeaderComponent } from "~/shared/components/header";
import { HomeProvider } from "~/shared/context/home";
import { BurguerMenuProvider } from "~/shared/context/menu";

export default function RootContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BurguerMenuProvider>
        <HomeProvider>
          <HeaderComponent />
          <main id="app-main" className="px-6 mt-16 lg:px-0">
            {children}
          </main>
          <FooterComponent />
        </HomeProvider>
      </BurguerMenuProvider>
    </>
  );
}
