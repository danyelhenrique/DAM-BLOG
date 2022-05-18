import { Fragment } from "react";
import { NewsletterBanner } from "~/shared/components/news-letter-baner";
import { HomeEighthSection } from "./eighth";
import { HomeFifthSection } from "./fifth-section";
import { HomeFirstSection } from "./first-section";
import { HomeFourthSection } from "./fourth-section";
import { HomeNinthSection } from "./ninth";
import { HomeSecondSection } from "./second-section";
import { HomeSeventhSection } from "./seventh";
import { HomeSixthSection } from "./sixth-section";
import { HomeThirdSection } from "./third-section";

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
    </Fragment>
  );
}
