import { CardComponent } from "~/shared/components/card";
import { PlayIcon } from "~/shared/components/icons/play";
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
];

export function TwelfthSession() {
  return (
    <section className="block pt-10 mx-auto max-w-section-max px-section-padding">
      <TagSummartComponent className="col-start-1 col-end-10 row-start-1 row-end-2">
        <TagComponent>
          <div className="flex">
            <TagComponent.Heading>FEATURED VIDEOS</TagComponent.Heading>
          </div>
        </TagComponent>
      </TagSummartComponent>

      <div className="grid grid-cols-3 gap-8 pt-7">
        {mockTrendingTopics.map((topic) => (
          <CardComponent key={topic.id}>
            <CardComponent.PictureWrapper className="relative">
              <CardComponent.Image
                src={topic.image}
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet={topic.image}
                media="(max-width: 767px)"
              />
              <PlayIcon
                containerProps={{
                  className:
                    "bg-[#000000cc]  rounded-full	 absolute bottom-[0.5rem] w-[48px] h-[48px] left-[0.5rem] ",
                }}
                svgProps={{
                  className: "h-100% w-100% ",
                }}
              />
            </CardComponent.PictureWrapper>
            <CardComponent.Title
              className="block mt-7"
              titleProps={{
                className:
                  "text-lg font-LabGrotesque leading-custom-line-height-md	",
              }}
            >
              {topic.title}
            </CardComponent.Title>
          </CardComponent>
        ))}
      </div>
    </section>
  );
}
