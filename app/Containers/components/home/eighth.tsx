import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

export function HomeEighthSection() {
  return (
    <section className="mx-auto max-w-section-max px-section-padding pt-10">
      <TagSummartComponent className="col-start-1 col-end-10 row-start-1 row-end-2 ">
        <TagComponent>
          <TagComponent.Heading>CLIMATE</TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <CardComponent className="grid grid-cols-[2fr_1fr] gap-8">
        <CardComponent.PictureWrapper>
          <CardComponent.Image
            src="https://media.wired.com/photos/6279a496a4fb038463303e16/16:9/w_1600%2Cc_limit/3D-Print-GigaLab-Gear-GettyImages-1132021724.jpg"
            alt="Banner"
          ></CardComponent.Image>
          <CardComponent.ImageSource
            srcSet="https://media.wired.com/photos/6279a496a4fb038463303e16/16:9/w_1600%2Cc_limit/3D-Print-GigaLab-Gear-GettyImages-1132021724.jpg"
            media="(max-width: 767px)"
          />
        </CardComponent.PictureWrapper>

        <div className="flex flex-col justify-between ">
          <div>
            <CardComponent.Tag>
              <CardComponent.TagText>just dao it </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title>
              The Portable, Off-Grid 3D Gigalab Can Turn Trash Into Treasure
            </CardComponent.Title>

            <CardComponent.Author>Eric Ravenscraft</CardComponent.Author>
          </div>

          <CardComponent.Description className="mb-0">
            With a facility the size of a small shipping container, Re:3D lets
            communities recycle their junk into useful products right on-site.
          </CardComponent.Description>
        </div>
      </CardComponent>
    </section>
  );
}
