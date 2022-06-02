import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

export function TenthSession() {
  return (
    <section className="pt-10 mx-auto mt-10 max-w-section-max px-section-padding">
      <TagSummartComponent className="col-start-1 col-end-10 row-start-1 row-end-2 ">
        <TagComponent>
          <TagComponent.Heading>Longreads</TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <CardComponent className="grid grid-cols-[2fr_1fr] gap-8 pt-7">
        <CardComponent.PictureWrapper>
          <CardComponent.Image
            src="https://media.wired.com/photos/628d23a04e3478c5befe4c6a/16:9/w_1600%2Cc_limit/hongKong.jpg"
            alt="Banner"
          ></CardComponent.Image>
          <CardComponent.ImageSource
            srcSet="https://media.wired.com/photos/628d23a04e3478c5befe4c6a/16:9/w_1600%2Cc_limit/hongKong.jpg"
            media="(max-width: 767px)"
          />
        </CardComponent.PictureWrapper>

        <div className="flex flex-col justify-between ">
          <div>
            <CardComponent.Tag className="block mt-3 mb-1">
              <CardComponent.TagText className="THE MONITOR font-WiredMono ">
                THINGS THEY CARRIED
              </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title
              titleProps={{
                className: "text-5xl font-Druk uppercase tracking-[.03em]",
              }}
            >
              ‘How Are They Weapons? That’s Only a Flashlight!’
            </CardComponent.Title>

            <CardComponent.Author>Gilad Edelman</CardComponent.Author>
          </div>

          <CardComponent.Description className="mb-0 font-BreveText !text-lg ">
            During the protests in Hong Kong, young people carried laser
            pointers, umbrellas, and plastic ties—objects that sometimes led to
            their arrest, and years of legal limbo.
          </CardComponent.Description>
        </div>
      </CardComponent>
    </section>
  );
}
