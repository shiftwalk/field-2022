import SanityImage from '@/components/sanity-image';

export default function ModularImageBlock({ image }) {
  return (
    <SanityImage
      image={image}
      focalPoint={image.asset.hotspot}
      layout="responsive"
      sizes="(min-width: 768px) 90vw, 90vw"
      className="w-full"
      noCaption
    />
  )
}