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

export function CardComponent(props: CardComponentProps) {
  const { children, className = "", ...rest } = props;

  return (
    <div {...rest} className={`${className}`}>
      {/* {React.Children.map(children, (child) =>
        React.cloneElement(child as any, { disabled: true })
      )} */}
      {children}
    </div>
  );
}

export function CardPictureWrapperComponent(
  props: CardPictureWrapperComponentProps
) {
  const {
    children,
    className = "",
    containerProps = { className: "" },
    ...rest
  } = props;
  const { className: classNameContainer, ...restContainer } =
    containerProps as React.HTMLAttributes<HTMLDivElement>;

  return (
    <div
      className={`aspect-ratio--overlay-container ${classNameContainer}`}
      {...restContainer}
    >
      <picture
        className={`responsive-image-picture responsive-image ${className}`}
        {...rest}
      >
        {children}
      </picture>
    </div>
  );
}
export function CardImageComponent(props: CardImageComponentProps) {
  const { alt, src, cl, className = "", ...rest } = props;

  return (
    <img
      alt={alt}
      src={src}
      className={`responsive-image__image ${className}`}
      {...rest}
    />
  );
}

export function CardImageSourceComponent(props: CardImagePictureProps) {
  const { src, media, srcSet, sizes, className = "", ...rest } = props;

  return (
    <source
      key={src}
      media={media}
      srcSet={srcSet}
      sizes={sizes}
      className={`card-image-source ${className}`}
      {...rest}
    />
  );
}

export function CardTagComponent(props: CardTagComponentProps) {
  const { children, href, className = "", ...rest } = props;

  return (
    <a href={href} className={`${className}`} {...rest}>
      {props.children}
    </a>
  );
}

export function CardTagTextComponent(props: CardTagTextComponentProps) {
  const { children, className = "", ...rest } = props;

  return (
    <span
      className={`card-tag text-xs uppercase text-black ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
export function CardTitleComponent(props: CardTitleComponentProps) {
  const { children, href, className = "", titleProps = {}, ...rest } = props;
  const { className: titleClassName, ...titleRest } =
    titleProps as React.HTMLAttributes<HTMLHeadingElement>;

  return (
    <a
      className={`card-title-link font-LabGrotesque	text-2xl font-black ${className}`}
      href={href}
      {...rest}
    >
      <h2 className={`cart-title ${titleClassName}`} {...titleRest}>
        {children}
      </h2>
    </a>
  );
}

export function CardAuthorComponent(props: CardAuthorComponentProps) {
  const { children, className = "", ...rest } = props;

  return (
    <span
      className={`car-author-wrapper font-WiredMono ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}

export function CardAuthorLinkComponent(props: CardAuthorLinkComponentProps) {
  const { children, className = "", ...rest } = props;

  return (
    <a href={rest.href} className={`car-author-wrapper ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function CardDescriptionComponent(props: CardDescriptionComponentProps) {
  const { className = "", ...rest } = props;
  return (
    <p
      className={`mb-2 block text-base text-[#333333]  ${className}`}
      {...rest}
    >
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
