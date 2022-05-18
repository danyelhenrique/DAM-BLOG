import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";

export function HomeFourthSection() {
  return (
    <section className="grid grid-cols-4 gap-10 pt-10 mx-auto mt-10 border-t border-solid border-default-light-border-color max-w-section-max px-section-padding">
      <CardComponent cl="grid grid-cols-[auto_87px] gap-8  border-r border-solid border-default-light-border-color pr-4">
        <div className="">
          <TagComponent>
            <TagComponent.Text className="text-black p-l-0">
              #SHEINHAUL
            </TagComponent.Text>
          </TagComponent>
          <CardComponent.Title>
            Fast, Cheap, and Out of Control: Inside Shein’s Sudden Rise
          </CardComponent.Title>
        </div>

        <CardComponent.PictureWrapper>
          <CardComponent.Image
            src="https://media.wired.com/photos/62714b994fd425eedd3780f1/1:1/w_640%2Cc_limit/Backchannel_TA_220419_wired8539-v2.jpg"
            alt="Banner"
          ></CardComponent.Image>
          <CardComponent.ImageSource
            srcSet="https://media.wired.com/photos/62714b994fd425eedd3780f1/1:1/w_640%2Cc_limit/Backchannel_TA_220419_wired8539-v2.jpg"
            media="(max-width: 767px)"
          />
        </CardComponent.PictureWrapper>
      </CardComponent>
    </section>
  );
}
