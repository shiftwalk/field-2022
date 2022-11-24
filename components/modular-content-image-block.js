import SanityImage from '@/components/sanity-image';
import Container from './container';

export default function ModularContentImageBlock({ image }) {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-wrap pb-[7vw] mt-[-5vw]">
          <div className="w-full md:w-1/4 mb-8 md:mb-0"></div>
          
          <div className="w-full md:w-3/4">
            <div className="w-11/12 md:w-2/3 content text-lg md:text-xl xl:text-2xl">
              <SanityImage
                image={image}
                focalPoint={image.asset.hotspot}
                layout="responsive"
                sizes="(min-width: 768px) 2vw, 2vw"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}