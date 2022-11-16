import SanityImage from '@/components/sanity-image';

export default function ModularImageBlock({ image }) {
  return (
    <SanityImage
      image={image}
      focalPoint={image.asset.hotspot}
      layout="responsive"
      sizes="(min-width: 768px) 2vw, 2vw"
      className="w-full"
      bordered
    />
  )
}