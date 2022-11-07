import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

export const CarouselCards = () => {
  const options = { dragging: 'cursor-grabbing' }
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true }, [ClassNames(options)])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col bg-yellow p-4 md:p-5">
            <div className="w-full mb-auto">
              <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Develop</span>
            </div>
            
            <div className="w-full mt-auto self-end">
              <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
            </div>
          </div>
        </div>

        <div className="embla__slide">
          <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col bg-yellow p-4 md:p-5">
            <div className="w-full mb-auto">
              <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Build</span>
            </div>
            
            <div className="w-full mt-auto self-end">
              <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
            </div>
          </div>
        </div>

        <div className="embla__slide">
          <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col bg-yellow p-4 md:p-5">
            <div className="w-full mb-auto">
              <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Optimise</span>
            </div>
            
            <div className="w-full mt-auto self-end">
              <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
            </div>
          </div>
        </div>


        <div className="embla__slide">
          <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col bg-yellow p-4 md:p-5">
            <div className="w-full mb-auto">
              <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Develop</span>
            </div>
            
            <div className="w-full mt-auto self-end">
              <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
            </div>
          </div>
        </div>

        <div className="embla__slide">
          <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col bg-yellow p-4 md:p-5">
            <div className="w-full mb-auto">
              <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">Build</span>
            </div>
            
            <div className="w-full mt-auto self-end">
              <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[75%] 2xl:max-w-[65%]">Our in-house development team has a diversified and pragmatic approach to sourcing our pipeline, from developing greenfield sites to acquiring ready-to-build projects.</p>
            </div>
          </div>
        </div>

        <div className="embla__slide">
          <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col bg-yellow p-4 md:p-5">
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
  )
}