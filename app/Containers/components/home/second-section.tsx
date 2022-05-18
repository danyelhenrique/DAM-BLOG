import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";
import { TagSummartComponent } from "~/shared/components/tag/tag-sumary";

export function HomeSecondSection() {
  return (
    <section className="mx-auto block max-w-section-max px-section-padding pt-10">
      <TagSummartComponent className="col-start-1 col-end-10 row-start-1 row-end-2">
        <TagComponent>
          <TagComponent.Text className="p-l-0">
            <div className="flex">
              <TagComponent.Heading>TRENDING STORIE</TagComponent.Heading>
              <TagComponent.Heading className="bg-transparent pl-6 text-black">
                TOP STORIES IN THE LAST 48 HOURS
              </TagComponent.Heading>
            </div>
          </TagComponent.Text>
        </TagComponent>
      </TagSummartComponent>

      <div className="grid grid-cols-4 gap-8 pt-4">
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
    </section>
  );
}
