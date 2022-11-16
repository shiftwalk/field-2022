import Container from "./container";
import MetaText from "./meta-text";

export default function ModularQuoteBlock({ text, authorName, authorJobTitle }) {
  return (
    <div className="bg-white">
      <Container className="pb-[10vw]">
        <div className="md:px-[5vw]">
          <blockquote className="text-[8vw] md:text-[5.9vw] lg:text-[4.8vw] xl:text-[4.3vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-8 md:mb-10 lg:mb-12 w-[95%] lg:w-[95%]">“{text}”</blockquote>
          
          <MetaText text={`${authorName} - ${authorJobTitle}`} />
        </div>
      </Container>
    </div>
  )
}