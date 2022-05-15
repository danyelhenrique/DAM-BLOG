import React from "react";
import type {
  CardAuthorComponentProps,
  CardAuthorLinkComponentProps,
  CardComponentProps,
  CardDescriptionComponentProps,
  CardImageComponentProps,
  CardImagePictureProps,
  CardPictureWrapperComponentProps,
  CardTagComponentProps,
  CardTagTextComponentProps,
  CardTitleComponentProps,
} from "./card-types";

export function CardComponent({ children, ...rest }: CardComponentProps) {
  return (
    <div {...rest} className={`${rest.cl}`}>
      {/* {React.cloneElement(children as any, { didComplete: true })} */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child as any, { disabled: true })
      )}
    </div>
  );
}

export function CardPictureWrapperComponent(
  props: CardPictureWrapperComponentProps
) {
  return (
    <div className="aspect-ratio--overlay-container">
      <picture
        className={`responsive-image-picture responsive-image ${props.cl}`}
        {...props}
      >
        {props.children}
      </picture>
    </div>
  );
}
export function CardImageComponent(props: CardImageComponentProps) {
  const { alt, src, cl, ...rest } = props;

  return (
    <img
      alt={alt}
      src={src}
      className={`responsive-image__image ${props.cl}`}
      {...rest}
    />
  );
}

export function CardImageSourceComponent(props: CardImagePictureProps) {
  const { src, media, srcSet, sizes, ...rest } = props;

  return (
    <source
      key={src}
      media={media}
      srcSet={srcSet}
      sizes={sizes}
      className={`card-image-source ${props.cl}`}
      {...rest}
    />
  );
}

export function CardTagComponent(props: CardTagComponentProps) {
  return (
    <a href={props.href} {...props} className={`${props.cl}`}>
      {props.children}
    </a>
  );
}

export function CardTagTextComponent(props: CardTagTextComponentProps) {
  return (
    <span
      className={`card-tag text-xs uppercase text-black ${props.cl}`}
      {...props}
    >
      {props.children}
    </span>
  );
}
export function CardTitleComponent(props: CardTitleComponentProps) {
  return (
    <a className={`card-title-link ${props.cl}`} href={props.href} {...props}>
      <h2 className="cart-title">{props.children}</h2>
    </a>
  );
}

export function CardAuthorComponent(props: CardAuthorComponentProps) {
  const { children, ...rest } = props;

  return (
    <span className={`car-author-wrapper ${props.cl}`} {...rest}>
      {children}
    </span>
  );
}

export function CardAuthorLinkComponent(props: CardAuthorLinkComponentProps) {
  const { children, ...rest } = props;

  return (
    <a href={rest.href} className={`car-author-wrapper ${props.cl}`} {...rest}>
      {children}
    </a>
  );
}

export function CardDescriptionComponent(props: CardDescriptionComponentProps) {
  console.log(props);
  return (
    <p className={`mb-2 block text-base ${props.cl}`} {...props}>
      {props.children}
    </p>
  );
}

CardComponent.PictureWrapper = CardPictureWrapperComponent;
CardComponent.Image = CardImageComponent;
CardComponent.ImageSource = CardImageSourceComponent;
CardComponent.Tag = CardTagComponent;
CardComponent.TagText = CardTagTextComponent;
CardComponent.Description = CardDescriptionComponent;

CardComponent.Title = CardTitleComponent;
CardComponent.Author = CardAuthorComponent;
CardComponent.AuthorLink = CardAuthorLinkComponent;
