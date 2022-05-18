import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

export function HomeThirdSection() {
  return (
    <section className="pt-10 mx-auto max-w-section-max px-section-padding">
      <TagSummartComponent cl="col-start-1 col-end-10 row-start-1 row-end-2 ">
        <TagComponent>
          <TagComponent.Heading>Longreads</TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <CardComponent cl="grid grid-cols-[2fr_1fr] gap-8">
        <CardComponent.PictureWrapper>
          <CardComponent.Image
            src="https://media.wired.com/photos/627583874eacca8cb6d6f4ee/16:9/pass/Web3-JoystickRender_6_h.jpg"
            alt="Banner"
          ></CardComponent.Image>
          <CardComponent.ImageSource
            srcSet="https://media.wired.com/photos/627583874eacca8cb6d6f4ee/16:9/w_120,c_limit/Web3-JoystickRender_6_h.jpg"
            media="(max-width: 767px)"
          />
        </CardComponent.PictureWrapper>

        <div className="flex flex-col justify-between ">
          <div>
            <CardComponent.Tag>
              <CardComponent.TagText>just dao it </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title>
              Paradise at the Crypto Arcade: Inside the Web3 Revolution
            </CardComponent.Title>

            <CardComponent.Author>Gilad Edelman</CardComponent.Author>
          </div>

          <CardComponent.Description cl="mb-0">
            The new movement wants to free us from Big Tech and exploitative
            capitalism—using only the blockchain, game theory, and code. What
            could possibly go wrong?
          </CardComponent.Description>
        </div>
      </CardComponent>
    </section>
  );
}
