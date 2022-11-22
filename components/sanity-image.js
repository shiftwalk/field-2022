import Img from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { useState } from "react"
import Container from './container'

export default function SanityImage({ bordered, image, layout, widthOverride, heightOverride, focalPoint, className, priority, noCaption, noBg, sizes, noLoader }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  
  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width(
        (widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 1600)
      )
      .quality(90)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};
  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }
  if (sizes) { attributes.sizes = sizes } else { attributes.sizes = null }
  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return (
    <div className={`${noBg ? '' : 'bg-blue'} relative overflow-hidden h-full z-10`}>
    { bordered && (
      <>
        <div className="border-t border-t-black border-b border-b-black absolute inset-0 h-full w-full z-10"></div>
        <div className="absolute inset-0 w-full h-full z-10">
          <Container className="border-x-black h-full" />
        </div>
      </>
    )}
    
    {!noLoader && (
      <div className={`absolute z-10 top-0 right-0 bottom-0 h-full bg-black ${imageIsLoaded ? 'w-0' : 'w-full'} transition-all duration-[1300ms] ease-[cubic-bezier(0.77,0,0.18,1)]`}></div>
    )}

      <figure className={`image ${className} ${layout == 'fill' && 'cover-image' } ${imageIsLoaded ? 'opacity-100 scale-100' : 'opacity-100 scale-110'} transition-all duration-[1700ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}>
        <Img
          {...imageProps}
          {...attributes}
          unoptimized={true}
          onLoad={event => {
            const target = event.target;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />
      </figure>
    </div>
  )
}