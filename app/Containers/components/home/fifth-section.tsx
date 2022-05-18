import { CardComponent } from "~/shared/components/card";
import { TagComponent } from "~/shared/components/tag";

export function HomeFifthSection() {
  return (
    <section className="mx-auto grid max-w-section-max grid-cols-3 gap-10 px-section-padding pt-10 ">
      <CardComponent className="block  pr-4">
        <CardComponent.Tag className="inline-block	">
          <CardComponent.TagText> </CardComponent.TagText>
          <TagComponent.Heading>Business</TagComponent.Heading>
        </CardComponent.Tag>

        <CardComponent.PictureWrapper>
          <CardComponent.Image
            src="https://media.wired.com/photos/627d71e1fe086d7130a8064f/16:9/w_640,c_limit/Hashtags-Censorship-Ban-Social-Media-Texas-Business-1302086599.jpg"
            alt="Banner"
          ></CardComponent.Image>
          <CardComponent.ImageSource
            srcSet="https://media.wired.com/photos/627d71e1fe086d7130a8064f/16:9/w_640,c_limit/Hashtags-Censorship-Ban-Social-Media-Texas-Business-1302086599.jpg"
            media="(max-width: 767px)"
          />
        </CardComponent.PictureWrapper>

        <CardComponent.Title>
          A ‘Radical’ Ruling Lets Texas Ban Social Media Moderation
        </CardComponent.Title>
        <CardComponent.Description>
          The new movement wants to free us from Big Tech and exploitative
          capitalism—using only the blockchain, game theory, and code. What
          could possibly go wrong?
        </CardComponent.Description>
        <CardComponent.Author>Lisa Kanarek</CardComponent.Author>
      </CardComponent>
    </section>
  );
}
