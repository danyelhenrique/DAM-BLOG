import { Link, useLoaderData } from "@remix-run/react";
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

export function HomeFirstSection() {
  const state = useLoaderData();

  return (
    <section
      className="mx-auto grid  grid-cols-1  lg:max-w-section-max  lg:grid-cols-[repeat(12,_1fr)] lg:gap-x-10
      lg:gap-y-5 
      lg:px-section-padding
      lg:pt-10
    "
    >
      <TagSummartComponent
        className="relative row-start-1 row-end-2 !border-0 lg:col-start-1 
              lg:col-end-10
              lg:!border-t-2
              before:lg:absolute
              before:lg:top-0
              before:lg:right-[-22px]
              before:lg:block
              before:lg:h-100vh
              before:lg:w-[1px]
              before:lg:bg-border-default
              "
      >
        <TagComponent className="block w-100%">
          <TagComponent.Heading className="flex w-100% justify-center text-center font-WiredMono lg:block lg:w-auto">
            TODAY'S PICKS
          </TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <TagSummartComponent className="col-start-1 col-end-[-1] row-start-3 row-end-4 lg:col-start-10 lg:col-end-[-1] lg:row-start-1 lg:row-end-2">
        <TagComponent>
          <TagComponent.Heading className="text-sm font-WiredMono ">
            MOST RECENT
          </TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <div className="left-area cols-end-[-1] col-start-1 row-start-2 row-end-3 grid max-w-home-left-max grid-cols-1 grid-rows-home-first-section-left lg:col-start-1 lg:col-end-10 lg:row-start-2 lg:grid-cols-[repeat(9,_1fr)_1px] lg:gap-home-left-area-gap ">
        <div className="col-span-3 col-start-1 col-end-4 row-start-1 summaray-list">
          {state?.todaysPosts?.map((topic: any, index: number) => (
            <CardComponent
              key={topic.id}
              className={`mb-4 block pb-4 ${
                index === 0
                  ? "border-b-[1px]   border-solid border-border-default"
                  : ""
              }`}
            >
              <CardComponent.PictureWrapper className="">
                <CardComponent.Image
                  src={topic.feature_image}
                  alt={topic.feature_image_alt || "Banner"}
                ></CardComponent.Image>
                <CardComponent.ImageSource
                  srcSet={topic.feature_image}
                  media="(max-width: 767px)"
                />
              </CardComponent.PictureWrapper>
              <CardComponent.Tag className="block mt-3">
                <CardComponent.TagText className="THE MONITOR font-WiredMono">
                  {topic.primary_tag.name}
                </CardComponent.TagText>
              </CardComponent.Tag>
              <CardComponent.Title to="">{topic.title}</CardComponent.Title>
              <CardComponent.Author className="block mt-2 text-xs uppercase">
                {topic.author}
              </CardComponent.Author>
            </CardComponent>
          ))}
        </div>

        <div className="hero collapse-hero col-start-4 col-end-[-1]  pr-2 ">
          <CardComponent>
            <Link to={`/posts/${state?.highlightPost?.slug}`}>
              <CardComponent.PictureWrapper>
                <CardComponent.Image
                  src={state?.highlightPost?.feature_image}
                  alt="Banner"
                ></CardComponent.Image>
                <CardComponent.ImageSource
                  srcSet={state?.highlightPost?.feature_image}
                  media="(max-width: 767px)"
                />
              </CardComponent.PictureWrapper>
            </Link>

            <CardComponent.Tag className="block mt-3">
              <CardComponent.TagText className="THE MONITOR font-WiredMono">
                {state?.highlightPost?.tag?.name}
              </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title
              to={`/posts/${state?.highlightPost?.slug}`}
              titleProps={{
                className: "text-6xl	font-Druk hover:underline",
              }}
            >
              {state?.highlightPost?.title}
            </CardComponent.Title>
            <Link to={`/posts/${state?.highlightPost?.slug}`}>
              <CardComponent.Description className="my-3 text-base font-BreveText">
                {state?.highlightPost?.excerpt}
              </CardComponent.Description>
            </Link>

            <CardComponent.Author className="text-xs uppercase">
              {state?.highlightPost?.primary_author?.name}
            </CardComponent.Author>
          </CardComponent>
        </div>
      </div>

      <div className="right-area summaray-list row-start-4 row-end-5 lg:col-start-10 lg:col-end-[-1] lg:row-start-2">
        {state.recentPosts.map((topic: any, index: number | string) => (
          <CardComponent
            key={topic.id}
            className={`grid grid-cols-[auto_75px] gap-8 border-b border-solid border-border-default pb-5 pt-5 ${
              index > 0 ? "pt-5" : ""
            }`}
          >
            <div className="">
              <CardComponent.Title
                to="#"
                titleProps={{ className: "text-lg  leading-7" }}
              >
                {topic.title}
              </CardComponent.Title>
              <CardComponent.Author className="block mt-1 text-xs font-WiredMono">
                {topic.primary_author?.name}
              </CardComponent.Author>
            </div>

            <CardComponent.PictureWrapper className="hidden md:block">
              <CardComponent.Image
                src={topic?.feature_image}
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet={topic?.feature_image}
                media="(max-width: 767px)"
              />
            </CardComponent.PictureWrapper>
          </CardComponent>
        ))}
      </div>
    </section>
  );
}
