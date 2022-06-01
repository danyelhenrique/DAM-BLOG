import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";

const mock = [
  {
    id: 1,
    title: "Elon Musk’s Twitter Plans Would Mean Less Free Speech for Many",
    image: `https://media.wired.com/photos/628fe072319fcfcacdc6b8b3/16:9/w_768%2Cc_limit/Elon-Musk-Twitter-Free-Speech-Business-1395371348.jpg`,
  },
  {
    id: 2,
    title: "The Most Powerful Story The Onion Ever Wrote",
    image: `https://media.wired.com/photos/62901d31055b58ec351db051/16:9/w_768%2Cc_limit/Pile-Green-Pencils-Most-Powerful-Onion-Story-Culture-530688030.jpg`,
  },
  {
    id: 3,
    title: "23 Best Memorial Day Sales on Mattresses We Love",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },

  {
    id: 4,
    title: "Benjamin Franklin Meets the Blockchain",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },

  {
    id: 5,
    title: "Are TikTok Algorithms Changing How People Talk About Suicide?",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },

  {
    id: 6,
    title: "The Best Cheap Phones for Almost Every Budget",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },
  {
    id: 7,
    title: "An Autonomous Car Blocked a Fire Truck Responding to an Emergency",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },
  {
    id: 8,
    title: "Sneakerella Proves Disney Needs to Try Harder",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },
  {
    id: 9,
    title: "The 11 Best Portable Chargers for All of Your Devices",
    image: `https://media.wired.com/photos/5e335cfe9d953d0008309a14/16:9/w_768%2Cc_limit/Gear-Feature-Allswell-Supreme-Mattress-SOURCE-Allswell.jpg`,
  },
];

export function HomeFifthSection() {
  return (
    <section className="grid grid-cols-3 pt-10 mx-auto max-w-section-max gap-y-0 gap-x-10 px-section-padding ">
      {mock.map(({ title, ...summary }, index) => (
        <CardComponent key={summary.id} className="block pr-4 ">
          {index <= 2 && (
            <>
              <CardComponent.Tag className="inline-block">
                <CardComponent.TagText> </CardComponent.TagText>
                <TagComponent.Heading className="text-xs ">
                  Business
                </TagComponent.Heading>
              </CardComponent.Tag>

              <CardComponent.PictureWrapper
                containerProps={{
                  className: "mb-4",
                }}
              >
                <CardComponent.Image
                  src={summary.image}
                  alt="Banner"
                ></CardComponent.Image>
                <CardComponent.ImageSource
                  srcSet={summary.image}
                  media="(max-width: 767px)"
                />
              </CardComponent.PictureWrapper>
            </>
          )}

          <CardComponent.Title
            titleProps={{
              className: `font-LabGrotesque aaa text-lg flex items-center h-[60px] ${
                index >= 3 && index <= 5 ? " my-3.5" : ""
              }`,
            }}
          >
            {title.length > 62 ? title.substring(0, 62) + "..." : title}
          </CardComponent.Title>

          {index <= 5 && (
            <div className="h-border-height bg-border-default px-section-padding"></div>
          )}
        </CardComponent>
      ))}
    </section>
  );
}
