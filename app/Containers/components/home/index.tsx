import { Fragment } from "react";
import { NewsletterBanner } from "~/shared/components/news-letter-baner";
import { HomeEighthSection } from "./eighth";
import { EleventhSession } from "./eleventh-session";
import { HomeFifthSection } from "./fifth-section";
import { HomeFirstSection } from "./first-section";
import { HomeFourthSection } from "./fourth-section";
import { HomeNinthSection } from "./ninth";
import { HomeSecondSection } from "./second-section";
import { HomeSeventhSection } from "./seventh";
import { HomeSixthSection } from "./sixth-section";
import { TenthSession } from "./tenth-session";
import { HomeThirdSection } from "./third-section";
import { TwelfthSession } from "./twelfth-session";

export function HomeContainer() {
  return (
    <Fragment>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
      <HomeFifthSection />
      <HomeSixthSection />
      <HomeSeventhSection />
      <HomeEighthSection />
      <HomeNinthSection />
      <NewsletterBanner />
      <TenthSession />
      <EleventhSession />
      <TwelfthSession />
    </Fragment>
  );
}
