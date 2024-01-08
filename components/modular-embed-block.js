import Container from "./container";

export default function ModularEmbedBlock({ embedCode }) {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-wrap pb-[8vw] justify-center">
          <div className="w-full md:w-3/4">
            <div className="w-11/12 md:w-full">
              <div dangerouslySetInnerHTML={{ __html: embedCode }}></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}