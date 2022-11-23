import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { useCallback, useEffect, useState } from 'react'

export const CarouselCards = ({ items }) => {
  const options = { dragging: 'cursor-grabbing' }
  const [viewportRef, embla] = useEmblaCarousel({ align: 'start', speed: 6}, [ClassNames(options)])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="relative">
      <div className="flex flex-wrap py-5 absolute top-[35%] left-0 right-0 w-full z-[999] pointer-events-none">
        <button disabled={!prevBtnEnabled} onClick={scrollPrev} className={`rounded-full w-[46px] h-[46px] md:w-[55px] md:h-[55px] xl:w-[74px] xl:h-[74px] bg-off-white flex items-center justify-center text-black group relative border-black border translate-x-[-50%] overflow-hidden mr-auto pointer-events-auto ${prevBtnEnabled ? '' : 'cursor-disabled pointer-events-none' }`}>

          <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

          <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms] ${prevBtnEnabled ? '' : 'opacity-20' }`}>
            <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] mt-[3px] md:mt-[4px] xl:mt-[6px] rotate-180">
              →
            </span>
          </span>
        </button>

        <button disabled={!nextBtnEnabled} onClick={scrollNext} className={`rounded-full w-[46px] h-[46px] md:w-[55px] md:h-[55px] xl:w-[74px] xl:h-[74px] bg-off-white flex items-center justify-center text-black group relative border-black border overflow-hidden translate-x-[20%] ml-auto self-end pointer-events-auto ${nextBtnEnabled ? '' : 'cursor-disabled pointer-events-none' }`}>

          <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

          <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms] ${nextBtnEnabled ? '' : 'opacity-20' }`}>
            <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] mt-[-3px] md:mt-[-4px] xl:mt-[-6px]">
              →
            </span>
          </span>
        </button>
      </div>

      <div className="embla" ref={viewportRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            return ( 
              <div className="embla__slide" key={i}>
                <div className="w-full aspect-square md:aspect-[12/11] lg:aspect-[12/10] border-black border flex flex-col p-4 md:p-5 embla__slide--inner hover:bg-white">
                  <div className="w-full mb-auto">
                    <span className="block text-[7.5vw] md:text-[5vw] xl:text-[4vw] leading-none max-w-[80%]">{e.heading}</span>
                  </div>
                  
                  <div className="w-full mt-auto self-end">
                    <p className="block text-base md:text-lg lg:text-xl leading-tight md:leading-tight lg:leading-tight w-full max-w-[90%] md:max-w-[90%] 2xl:max-w-[70%]">{e.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}