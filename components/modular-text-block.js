import BlockContent from '@sanity/block-content-to-react'
import Container from './container'

export default function ModularTextBlock({ text}) {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-wrap pb-[8vw]">
          <div className="w-full md:w-1/4 mb-8 md:mb-0"></div>
          
          <div className="w-full md:w-3/4">
            <div className="w-11/12 md:w-2/3 content text-lg md:text-xl xl:text-2xl">
              <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}