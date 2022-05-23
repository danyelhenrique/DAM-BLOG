import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

const mockDataMostRecent = [
  {
    id: 1,
    title: "Why It's So Hard to Count Twitter Bots",
    author: "By David S. Miller",
    image: `https://media.wired.com/photos/6284297c3b98bec14441b03c/16:9/pass/Counting-Twitter-Bots-Business-1180782949.jpg`,
  },
  {
    id: 2,
    title: "Roe’s Fall Will Limit Screening for Fatal Congenital Conditions",
    author: "SABRINA WEISS",
    image: `https://media.wired.com/photos/628517cbd2cc3583cf5c902e/16:9/pass/neonatal_chromosomes_science_GettyImages-92544520.jpg`,
  },
  {
    id: 3,
    title: "6 Great Deals on Robot Vacuums and Air Purifiers",
    author: "HALEY SPRANKLE",
    image: `https://media.wired.com/photos/5fd14e4a3df9cf7176d3999b/16:9/pass/Gear-Yeedi-K650.jpg`,
  },
  {
    id: 4,
    title: "14 Essentials You Need in a Car Emergency Kit",
    author: "MATT JANCER",
    image: `https://media.wired.com/photos/626aed96d59c89e6ded93a93/16:9/pass/Performance-Tools-Emergency-Reflective-Triangles---credit-amazon-Gear.jpg`,
  },
  {
    id: 5,
    title: "This Topsy-Turvy Gizmo Tries to Reinvent the Tripod Head",
    author: "Eric Ravenscraft",
    image: `https://media.wired.com/photos/628431cd53dba723bc9d7a5d/16:9/pass/Platyball-Elite-SOURCE-Platypod-copy.jpg`,
  },
];

const mockTodayPick = [
  {
    id: 1,
    title: "The Incredible Shrinking Car Dealership",
    author: "By David S. Miller",
    image: `https://media.wired.com/photos/628431090c454f12d5142777/16:9/pass/New-Honda-Facility-Design-Business.jpg`,
  },
  {
    id: 2,
    title: "A Letter to My Fellow Asian Mothers From the Multiverse",
    author: "ADRIENNE SO",
    image: `https://media.wired.com/photos/628436e4bdc4ad545af73cf9/16:9/pass/A-Letter-To-My-Fellow-Asian-Mothers-Multiverse-EEAAO-Culture.jpg`,
  },
];

const mockFeature = {
  id: 1,
  title: "This Hacktivist Site Lets You Prank Call Russian Officials",
  summary:
    "To protest the war in Ukraine, WasteRussianTime.fun auto-dials Russian government officials, connects them, and lets you listen in to their confusion.",
  author: "ANDY GREENBERG",
  image: `https://media.wired.com/photos/627efe5b83768a9d8a5c8f7e/16:9/pass/Russian-Robocalls-Security-GettyImages-824257794.jpg`,
};

export function HomeFirstSection() {
  return (
    <section className="mx-auto grid max-w-section-max grid-cols-[repeat(12,_1fr)] gap-x-10 gap-y-5  px-section-padding pt-10">
      <TagSummartComponent
        className="relative col-start-1 col-end-10 row-start-1 row-end-2 
              before:absolute
              before:top-0
              before:right-[-22px]
              before:block
              before:h-100vh
              before:w-[1px]
              before:bg-border-default"
      >
        <TagComponent>
          <TagComponent.Heading className="text-sm font-WiredMono ">
            TODAY'S PICKS
          </TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <TagSummartComponent className="col-start-10 col-end-[-1] row-start-1 row-end-2">
        <TagComponent>
          <TagComponent.Heading className="text-sm font-WiredMono ">
            MOST RECENT
          </TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <div className="left-area col-start-1 col-end-10 row-start-2 grid max-w-home-left-max grid-cols-[repeat(9,_1fr)_1px] grid-rows-home-first-section-left gap-home-left-area-gap ">
        <div className="col-span-3 col-start-1 col-end-4 row-start-1 summaray-list">
          {mockTodayPick.map((topic, index) => (
            <CardComponent
              key={topic.id}
              className={`mb-4 block pb-4 ${
                index === 0
                  ? "border-b-[1px]   border-solid border-border-default"
                  : ""
              }`}
            >
              <CardComponent.PictureWrapper>
                <CardComponent.Image
                  src={topic.image}
                  alt="Banner"
                ></CardComponent.Image>
                <CardComponent.ImageSource
                  srcSet={topic.image}
                  media="(max-width: 767px)"
                />
              </CardComponent.PictureWrapper>
              <CardComponent.Tag className="block mt-3">
                <CardComponent.TagText className="THE MONITOR font-WiredMono">
                  THE MONITOR
                </CardComponent.TagText>
              </CardComponent.Tag>
              <CardComponent.Title>{topic.title}</CardComponent.Title>
              <CardComponent.Author className="block mt-2 text-xs uppercase">
                {topic.author}
              </CardComponent.Author>
            </CardComponent>
          ))}
        </div>

        <div className="hero collapse-hero col-start-4 col-end-[-1]  pr-2 ">
          <CardComponent>
            <CardComponent.PictureWrapper>
              <CardComponent.Image
                src={mockFeature.image}
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet={mockFeature.image}
                media="(max-width: 767px)"
              />
            </CardComponent.PictureWrapper>

            <CardComponent.Tag className="block mt-3">
              <CardComponent.TagText className="THE MONITOR font-WiredMono">
                just dao it
              </CardComponent.TagText>
            </CardComponent.Tag>

            <CardComponent.Title
              titleProps={{
                className: "text-6xl	font-Druk",
              }}
            >
              {mockFeature.title}
            </CardComponent.Title>
            <CardComponent.Description className="my-3 text-base font-BreveText">
              {mockFeature.summary}
            </CardComponent.Description>
            <CardComponent.Author className="text-xs uppercase">
              {mockFeature.author}
            </CardComponent.Author>
          </CardComponent>
        </div>
      </div>

      <div className="right-area summaray-list col-start-10 col-end-[-1] row-start-2">
        {mockDataMostRecent.map((topic, index) => (
          <CardComponent
            key={topic.id}
            className={`grid grid-cols-[auto_75px] gap-8 border-b border-solid border-border-default pb-5 pt-5 ${
              index > 0 ? "pt-5" : ""
            }`}
          >
            <div className="">
              <CardComponent.Title
                titleProps={{ className: "text-lg  leading-7" }}
              >
                {topic.title}
              </CardComponent.Title>
              <CardComponent.Author className="block mt-1 text-xs font-WiredMono">
                {topic.author}
              </CardComponent.Author>
            </div>

            <CardComponent.PictureWrapper>
              <CardComponent.Image
                src={topic.image}
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet={topic.image}
                media="(max-width: 767px)"
              />
            </CardComponent.PictureWrapper>
          </CardComponent>
        ))}
      </div>
    </section>
  );
}
