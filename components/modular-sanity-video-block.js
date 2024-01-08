import Container from "./container";

export default function ModularSanityVideoBlock({ videoFile }) {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-wrap pb-[8vw] justify-center">
          <div className="w-full md:w-3/4">
            <div className="w-11/12 md:w-full">
              <video src={videoFile.asset.url} controls />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}