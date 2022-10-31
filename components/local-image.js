import Img from 'next/image'
import { useState } from 'react'
import Container from './container'

export default function LocalImage({ src, layout, width, height, className, priority, caption, noCaption, alt, bordered }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  let attributes = []
  if (alt) { attributes.alt = alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (width) { attributes.width = width } else { attributes.width = null }
  if (height) { attributes.height = height } else { attributes.height = null }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return (
    <div className={`bg-blue relative overflow-hidden h-full`}>
      { bordered && (
        <>
          <div className="border-t border-t-black border-b border-b-black absolute inset-0 h-full w-full z-10"></div>
          <div className="absolute inset-0 w-full h-full z-10">
            <Container className="border-x-black h-full" />
          </div>
        </>
      )}

      <div className={`absolute z-10 top-0 right-0 bottom-0 h-full bg-black ${imageIsLoaded ? 'w-0' : 'w-full'} transition-all duration-[1300ms] ease-[cubic-bezier(0.77,0,0.18,1)]`}></div>
      
      <figure className={`image ${className} ${layout == 'fill' && 'cover-image' } ${imageIsLoaded ? 'opacity-100 scale-100' : 'opacity-100 scale-110'} transition-all duration-[1700ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}>
        <Img
          quality={90}
          src={src}
          {...attributes}
          
          onLoad={event => {
            const target = event.target;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />
        
        {(caption && !noCaption) && (
          <figcaption className={`text-base md:text-lg xl:text-xl leading-tight xl:leading-tight md:leading-tight ${layout == 'fill' && 'mt-2 -mb-1 py-2 bg-white absolute bottom-0 left-0 w-full z-[10]'}`}>{caption}</figcaption>
        )}
      </figure>
    </div>
  )
}