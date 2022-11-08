import MetaText from './meta-text'
import LocalImage from './local-image'
import Marquee from "react-fast-marquee";

export const CarouselQuotes = () => {
  return (
    <Marquee gradient={false} speed={90} className="overflow-hidden w-full whitespace-normal">
      <div className="w-[75vw] whitespace-normal border-r border-black bg-blue">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[55%] p-4 md:p-5 lg:p-6 flex flex-col">
            <div className="mb-auto w-full pb-[25vw] lg:pb-[5vw]">
              <MetaText text="Life At Field" />
            </div>
            <div className="w-full">
              <blockquote className="text-[5.5vw] md:text-[3.7vw] lg:text-[2.5vw] leading-none md:leading-none lg:leading-none mb-8 w-[90%] lg:w-[80%]">“The speed at which we are growing and evolving means that we are constantly facing new challenges, and that has given me an unparalleled opportunity to learn and develop my own skills, and be part of a dynamic and curious team.”</blockquote>
              <MetaText text="Hana - Finance Manager" />
            </div>
          </div>
          <div className="w-full lg:flex-1 border-t lg:border-t-0 lg:border-l border-black aspect-square lg:aspect-[10/15] relative overflow-hidden">
            <LocalImage src="/images/quote.jpg" alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full will-change-transform" />
          </div>
        </div>
      </div>

      <div className="w-[75vw] border-r border-black bg-off-white-dark">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[55%] p-4 md:p-5 lg:p-6 flex flex-col">
            <div className="mb-auto w-full pb-[25vw] lg:pb-[5vw]">
              <MetaText text="Life At Field" />
            </div>
            <div className="w-full">
              <blockquote className="text-[5.5vw] md:text-[3.7vw] lg:text-[2.5vw] leading-none md:leading-none lg:leading-none mb-8 w-[90%] lg:w-[80%]">“The energy in the room is always charged (pun intended) with fantastic ideas and a genuine enthusiasm to do great things together.”</blockquote>
              <MetaText text="Hana - Finance Manager" />
            </div>
          </div>
          <div className="w-full lg:flex-1 border-t lg:border-t-0 lg:border-l border-black aspect-square lg:aspect-[10/15] relative overflow-hidden">
            <LocalImage src="/images/quote.jpg" alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full will-change-transform" />
          </div>
        </div>
      </div>

      <div className="w-[75vw] border-r border-black bg-blue">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[55%] p-4 md:p-5 lg:p-6 flex flex-col">
            <div className="mb-auto w-full pb-[25vw] lg:pb-[5vw]">
              <MetaText text="Life At Field" />
            </div>
            <div className="w-full">
              <blockquote className="text-[5.5vw] md:text-[3.7vw] lg:text-[2.5vw] leading-none md:leading-none lg:leading-none mb-8 w-[90%] lg:w-[80%]">“The speed at which we are growing and evolving means that we are constantly facing new challenges, and that has given me an unparalleled opportunity to learn and develop my own skills, and be part of a dynamic and curious team.”</blockquote>
              <MetaText text="Hana - Finance Manager" />
            </div>
          </div>
          <div className="w-full lg:flex-1 border-t lg:border-t-0 lg:border-l border-black aspect-square lg:aspect-[10/15] relative overflow-hidden">
            <LocalImage src="/images/quote.jpg" alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full will-change-transform" />
          </div>
        </div>
      </div>

      <div className="w-[75vw] border-r border-black bg-off-white-dark">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[55%] p-4 md:p-5 lg:p-6 flex flex-col">
            <div className="mb-auto w-full pb-[25vw] lg:pb-[5vw]">
              <MetaText text="Life At Field" />
            </div>
            <div className="w-full">
              <blockquote className="text-[5.5vw] md:text-[3.7vw] lg:text-[2.5vw] leading-none md:leading-none lg:leading-none mb-8 w-[90%] lg:w-[80%]">“The energy in the room is always charged (pun intended) with fantastic ideas and a genuine enthusiasm to do great things together.”</blockquote>
              <MetaText text="Hana - Finance Manager" />
            </div>
          </div>
          <div className="w-full lg:flex-1 border-t lg:border-t-0 lg:border-l border-black aspect-square lg:aspect-[10/15] relative overflow-hidden">
            <LocalImage src="/images/quote.jpg" alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full will-change-transform" />
          </div>
        </div>
      </div>
    </Marquee>
  )
}