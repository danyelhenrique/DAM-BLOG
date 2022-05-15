import { FooterComponent } from "~/shared/components/footer";
import { HeaderComponent } from "~/shared/components/header";
import { ROOT_CONTEXT_PROVIDERS } from "~/shared/context/root";

export default function RootContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {ROOT_CONTEXT_PROVIDERS.map((Provider, i) => (
        <Provider key={i}>
          <HeaderComponent />
          <main id="app-main">{children}</main>

          <FooterComponent />
        </Provider>
      ))}
    </>
  );
}
