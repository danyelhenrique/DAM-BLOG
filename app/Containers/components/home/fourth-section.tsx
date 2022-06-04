import { Fragment } from "react";
import { CardComponent } from "~/shared/components/card";

const mock = [
  {
    id: 1,
    title: `Bill Gates Is So Over This Pandemic`,
    image:
      "https://media.wired.com/photos/627c21284eacca8cb6d6f5f4/1:1/w_640%2Cc_limit/Bill-Gates-Business-2.jpg",
  },
  {
    id: 2,
    title: `Paradise at the Crypto Arcade: Inside the Web3 Revolution`,
    image:
      "https://media.wired.com/photos/627583874eacca8cb6d6f4ee/1:1/w_640%2Cc_limit/Web3-JoystickRender_6_h.jpg",
  },
  {
    id: 3,
    title: `Welcome to Janelle Monáe’s Dreamworld`,
    image:
      "https://media.wired.com/photos/62714b994fd425eedd3780f1/1:1/w_640%2Cc_limit/Backchannel_TA_220419_wired8539-v2.jpg",
  },
  {
    id: 4,
    title: `Welcome to Janelle Monáe’s Dreamworld`,
    image:
      "https://media.wired.com/photos/6267111b09e2a3905a4ead61/1:1/w_640%2Cc_limit/JANELLEMONAEv4.jpg",
  },
];

export function HomeFourthSection() {
  return (
    <Fragment>
      <div className="divider mx-auto mt-10 block w-100% max-w-section-max lg:px-section-padding">
        <div className="h-border-height bg-border-default lg:px-section-padding"></div>
      </div>
      <section className="mx-auto flex max-w-section-max grid-cols-4 flex-col gap-10 pt-5 md:grid lg:px-section-padding">
        {mock.map((summary, index) => (
          <CardComponent
            key={summary.id}
            className={`${
              index < 3
                ? "border-default-light-border-color border-0 border-solid md:border-r"
                : ""
            } grid grid-cols-[auto_87px] gap-8   pr-4`}
          >
            <div className="">
              <CardComponent.Tag className="mt-3 mb-1 block">
                <CardComponent.TagText className="font-WiredMono text-xs leading-4">
                  #SHEINHAUL 1
                </CardComponent.TagText>
              </CardComponent.Tag>

              <CardComponent.Title
                titleProps={{
                  className: "text-lg",
                }}
              >
                {summary.title}
              </CardComponent.Title>
            </div>

            <CardComponent.PictureWrapper
              containerProps={{
                className: "flex items-center",
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
          </CardComponent>
        ))}
      </section>
    </Fragment>
  );
}
