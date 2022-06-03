import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

const mockTrendingTopics = [
  {
    id: 1,
    title: " Your iPhone Is Vulnerable to a Malware Attack Even When It’s Off",
    image:
      "https://media.wired.com/photos/627d7ab00bf49e8805b8af7f/16:9/pass/Tik-Tok-Trend-Mocks-Amber-Heard-Testimony-Culture-1240421859.jpg",
    summary: `Researchers found a way to exploit the tech that enables Apple’s
            Find My feature, which could allow attackers to track location when
            a device is powered down.`,
    author: "By David S. Miller",
  },
  {
    id: 2,
    title: "Your iPhone Is Vulnerable to a Malware Attack Even When It’s Off",
    image:
      "https://media.wired.com/photos/6282eedc0c454f12d5142701/16:9/w_768%2Cc_limit/Ars-iPhone-Ransomware-GettyImages-1239329854.jpg",
    summary: `    Researchers found a way to exploit the tech that enables Apple’s
            Find My feature, which could allow attackers to track location when
            a device is powered down.`,
    author: "John Doe",
  },
  {
    id: 3,
    title: "Your iPhone Is Vulnerable to a Malware Attack Even When It’s Off",
    image:
      "https://media.wired.com/photos/627d8a8bd2cc3583cf5c8fc9/16:9/w_768%2Cc_limit/Red6-Berkut-Flight-Military-Metaverse-Business.jpg",
    summary: ` Researchers found a way to exploit the tech that enables Apple’s
            Find My feature, which could allow attackers to track location when
            a device is powered down.`,
    author: "Berkut",
  },
  {
    id: 4,
    title: "Your iPhone Is Vulnerable to a Malware Attack Even When It’s Off",
    image:
      "https://media.wired.com/photos/6279a4979267f34d77759e9a/16:9/w_768%2Cc_limit/People-Are-Dating-All-Wrong%2C-According-to-Data-Science.jpg",
    summary: ` Researchers found a way to exploit the tech that enables Apple’s
            Find My feature, which could allow attackers to track location when
            a device is powered down.`,
    author: "John Doe",
  },
];

export function HomeSecondSection() {
  return (
    <section className="block pt-10 mx-auto max-w-section-max lg:px-section-padding">
      <TagSummartComponent className="col-start-1 col-end-10 row-start-1 row-end-2">
        <TagComponent className="flex w-100% justify-center lg:block lg:w-auto">
          <div className="block w-100% md:w-auto lg:flex">
            <TagComponent.Heading>TRENDING STORIE</TagComponent.Heading>
            <TagComponent.Heading className="hidden !bg-transparent pl-6 font-WiredMono text-sm font-bold	uppercase	text-black md:block">
              TOP STORIES IN THE LAST 48 HOURS
            </TagComponent.Heading>
          </div>
        </TagComponent>
      </TagSummartComponent>

      <div className="flex flex-col grid-cols-4 gap-8 pt-7 md:grid">
        {mockTrendingTopics.map((topic) => (
          <CardComponent key={topic.id} className="grid grid-cols-2 md:block">
            <CardComponent.PictureWrapper
              containerProps={{
                className: "col-start-2 col-end-[-1] row-start-1 row-end-2",
              }}
            >
              <CardComponent.Image
                src={topic.image}
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet={topic.image}
                media="(max-width: 767px)"
              />
            </CardComponent.PictureWrapper>
            <CardComponent.Tag className="block col-start-1 col-end-1 row-start-1 row-end-2 mt-3 mb-1">
              <CardComponent.TagText className=" THE MONITOR font-WiredMono">
                SECURITY
              </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title
              className="block col-start-1 col-end-1 row-start-1 row-end-3 mt-12 md:mt-0"
              titleProps={{
                className:
                  "text-lg font-LabGrotesque leading-custom-line-height-md	",
              }}
            >
              {topic.title}
            </CardComponent.Title>
            <CardComponent.Description className="col-start-1 col-end-1 row-start-4 row-end-5 my-3 font-LabGrotesque !text-sm  ">
              {topic.summary}
            </CardComponent.Description>
            <CardComponent.Author className="block col-start-1 col-end-1 row-start-5 mt-2 text-xs uppercase ">
              {topic.author}
            </CardComponent.Author>
          </CardComponent>
        ))}
      </div>
    </section>
  );
}
