import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { useCallback } from 'react'

export const CarouselCards = () => {
  const options = { dragging: 'cursor-grabbing' }
  const [viewportRef, embla] = useEmblaCarousel({ align: 'start', loop: true, inViewThreshold: 1 }, [ClassNames(options)])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <>
      <div className="flex space-x-3 py-5">
        <button onClick={scrollPrev} className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-none flex items-center justify-center text-black group relative border-black border overflow-hidden">

          <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

          <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
            <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] mt-[3px] md:mt-[4px] xl:mt-[6px] rotate-180">
              →
            </span>
          </span>
        </button>

        <button onClick={scrollNext} className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-none flex items-center justify-center text-black group relative border-black border overflow-hidden">

          <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

          <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
            <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] mt-[-3px] md:mt-[-4px] xl:mt-[-6px]">
              →
            </span>
          </span>
        </button>
      </div>

      <div className="embla" ref={viewportRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="transition-color ease-in-out duration-300 w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col p-4 md:p-5 embla__slide--inner">
              <div className="w-full mb-auto">
                <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Develop</span>
              </div>
              
              <div className="w-full mt-auto self-end">
                <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
              </div>
            </div>
          </div>

          <div className="embla__slide">
            <div className="transition-color ease-in-out duration-300 w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col p-4 md:p-5 embla__slide--inner">
              <div className="w-full mb-auto">
                <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Build</span>
              </div>
              
              <div className="w-full mt-auto self-end">
                <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
              </div>
            </div>
          </div>

          <div className="embla__slide">
            <div className="transition-color ease-in-out duration-300 w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col p-4 md:p-5 embla__slide--inner">
              <div className="w-full mb-auto">
                <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Optimise</span>
              </div>
              
              <div className="w-full mt-auto self-end">
                <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
              </div>
            </div>
          </div>

          <div className="embla__slide">
            <div className="transition-color ease-in-out duration-300 w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col p-4 md:p-5 embla__slide--inner">
              <div className="w-full mb-auto">
                <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Optimise</span>
              </div>
              
              <div className="w-full mt-auto self-end">
                <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
              </div>
            </div>
          </div>

          <div className="embla__slide">
            <div className="transition-color ease-in-out duration-300 w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col p-4 md:p-5 embla__slide--inner">
              <div className="w-full mb-auto">
                <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Optimise</span>
              </div>
              
              <div className="w-full mt-auto self-end">
                <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}