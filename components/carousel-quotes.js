import MetaText from './meta-text'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import SanityImage from './sanity-image';
import Container from './container';
import { useCallback } from 'react';

export const CarouselQuotes = ({ items }) => {
  const options = { dragging: 'cursor-grabbing' }
  const [viewportRef, embla] = useEmblaCarousel({ align: 'start', loop: true, speed: 6 }, [ClassNames(options)])
  
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div>
      <Container className="relative">
        <div className="flex lg:justify-end absolute left-0 right-0 z-10 top-[250%] px-3 md:px-4 lg:px-5 pointer-events-none">
          <button onClick={scrollPrev} className="pointer-events-auto rounded-full w-[46px] h-[46px] md:w-[55px] md:h-[55px] xl:w-[74px] xl:h-[74px] bg-none flex items-center justify-center text-black group relative border-black border overflow-hidden mr-auto bg-off-white">

            <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

            <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
              <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] mt-[3px] md:mt-[4px] xl:mt-[6px] rotate-180">
                →
              </span>
            </span>
          </button>

          <button onClick={scrollNext} className="pointer-events-auto rounded-full w-[46px] h-[46px] md:w-[55px] md:h-[55px] xl:w-[74px] xl:h-[74px] bg-none flex items-center justify-center text-black group relative border-black border overflow-hidden ml-auto bg-off-white">

            <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

            <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
              <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] mt-[-3px] md:mt-[-4px] xl:mt-[-6px]">
                →
              </span>
            </span>
          </button>
        </div>
      </Container>

      <div className="border-t border-black">
        <Container noPad>
          <div className="embla embla--quotes" ref={viewportRef}>
            <div className="embla__container">
              {items.map((e, i) => {
                return ( 
                  <div className={`embla__slide lg:h-auto whitespace-normal border-r border-black ${i % 2 == 0 ? 'bg-blue' : 'bg-off-white-dark' }`} key={i}>
                    <div className="flex flex-wrap h-full">
                      <div className="w-full lg:w-[55%] p-4 md:p-5 lg:p-6 flex flex-col">
                        <div className="mb-auto w-full pb-[25vw] lg:pb-[5vw]">
                          <MetaText text="Life At Field" />
                        </div>
                        <div className="w-full">
                          <blockquote className="text-[5.5vw] md:text-[3.7vw] lg:text-[2.5vw] leading-none md:leading-none lg:leading-none mb-8 w-[90%] lg:w-[80%]">“{e.quote}”</blockquote>
                          <MetaText text={`${e.authorName} - ${e.authorJobTitle}`} />
                        </div>
                      </div>
                      <div className="w-full lg:flex-1 border-t lg:border-t-0 lg:border-l border-black aspect-square lg:aspect-[10/15] relative overflow-hidden">
                        <SanityImage image={e.image} alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full will-change-transform" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}