function getSocialImageWithPreTitle({
  origin,
  title,
  preTitle,
  featuredImage: img,
  url,
}: {
  origin: string;
  title: string;
  preTitle: string;
  featuredImage: string;
  url: string;
}) {
  const params = new URLSearchParams({
    type: "2",
    title,
    preTitle,
    img,
    url,
  });
  return `${origin}/img/social?${params.toString()}`;
}

function getGenericSocialImage({
  origin,
  words,
  featuredImage: img,
  url,
}: {
  origin: string;
  words: string;
  featuredImage: string;
  url: string;
}) {
  const params = new URLSearchParams({
    type: "1",
    words,
    img,
    url,
  });
  return `${origin}/img/social?${params.toString()}`;
}

export { getGenericSocialImage, getSocialImageWithPreTitle };
