import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

export function HomeContainer() {
  return (
    <section className="mx-auto grid h-96 max-w-section-max grid-cols-[repeat(12,_1fr)] gap-10 px-section-padding pt-10">
      <TagSummartComponent cl="col-start-1 col-end-10 row-start-1 row-end-2">
        <TagComponent>
          <TagComponent.Heading>TODA'S PICKS</TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <TagSummartComponent cl="col-start-10 col-end-[-1] row-start-1 row-end-2">
        <TagComponent>
          <TagComponent.Heading>MOST RECENT</TagComponent.Heading>
        </TagComponent>
      </TagSummartComponent>

      <div className="grid grid-cols-9 col-start-1 col-end-10 row-start-2 left-area max-w-home-left-max grid-rows-home-first-section-left gap-home-left-area-gap ">
        <div className="hero collapse-hero col-start-4 col-end-[-1] h-96  pr-2">
          <CardComponent>
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
            <CardComponent.Tag>
              <CardComponent.TagText>just dao it </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title>
              Paradise at the Crypto Arcade: Inside the Web3 Revolution
            </CardComponent.Title>
            <CardComponent.Description>
              The new movement wants to free us from Big Tech and exploitative
              capitalism—using only the blockchain, game theory, and code. What
              could possibly go wrong?
            </CardComponent.Description>
            <CardComponent.Author>Gilad Edelman</CardComponent.Author>
          </CardComponent>
        </div>
        <div className="col-span-3 col-start-1 col-end-4 row-start-1 summaray-list h-96">
          <CardComponent>
            <CardComponent.PictureWrapper>
              <CardComponent.Image
                src="https://media.wired.com/photos/627d7ab00bf49e8805b8af7f/16:9/pass/Tik-Tok-Trend-Mocks-Amber-Heard-Testimony-Culture-1240421859.jpg"
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet="https://media.wired.com/photos/627d7ab00bf49e8805b8af7f/16:9/w_120,c_limit/Tik-Tok-Trend-Mocks-Amber-Heard-Testimony-Culture-1240421859.jpg"
                media="(max-width: 767px)"
              />
            </CardComponent.PictureWrapper>
            <CardComponent.Tag>
              <CardComponent.TagText>THE MONITOR </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title>
              TikTok’s New, Terrible Trend
            </CardComponent.Title>
            <CardComponent.Author>Angela Watercutter</CardComponent.Author>
          </CardComponent>

          <CardComponent>
            <CardComponent.PictureWrapper>
              <CardComponent.Image
                src="https://media.wired.com/photos/627eec510c454f12d51426b7/16:9/pass/Spread-Kindness-with-Tech-Gear-GettyImages-1333520740.jpg"
                alt="Banner"
              ></CardComponent.Image>
              <CardComponent.ImageSource
                srcSet="https://media.wired.com/photos/627eec510c454f12d51426b7/16:9/pass/Spread-Kindness-with-Tech-Gear-GettyImages-1333520740.jpg"
                media="(max-width: 767px)"
              />
            </CardComponent.PictureWrapper>
            <CardComponent.Tag>
              <CardComponent.TagText>Spread the Love </CardComponent.TagText>
            </CardComponent.Tag>
            <CardComponent.Title>
              How to Use Tech to Perform Acts of Kindness
            </CardComponent.Title>
            <CardComponent.Author>Lisa Kanarek</CardComponent.Author>
          </CardComponent>
        </div>
      </div>
      <div className="right-area summaray-list col-start-10 col-end-[-1] row-start-2 h-96 bg-black"></div>
    </section>
  );
}
