import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import MetaText from '@/components/meta-text'
import Button from '@/components/button'
import LocalImage from '@/components/local-image'

export default function Development() {
  return (
    <Layout>
      <NextSeo title="Development" />
      
      <main>
        <div className="h-[75vh] flex flex-col pt-[75px] lg:pt-[94px] relative overflow-hidden border-b border-black bg-gradient-to-tr from-orange via-yellow to-purple">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center hidden lg:block">

            {/* Grain overlay */}
            <div className="grain absolute inset-0 w-full h-full z-10 hidden lg:block"></div>
          
            {/* Left blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
              <div className="absolute inset-0 origin-left">
                <div className="absolute top-0 left-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[-57vw] translate-y-[-32%] blur-xl overflow-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-t from-white/80 via-white/50 rotate-[90deg] z-[2]"></div>
                  <div className="absolute bottom-[-15%] left-[23%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange via-orange rotate-[-35deg]"></div>
                </div>
              </div>
            </MouseParallax>

            {/* Right blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
              <div className="absolute inset-0 origin-right">
                <div className="absolute top-0 right-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[42vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-hidden">
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-45%] mr-[-10%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-white via-white/60 rotate-[0deg]"></div>
                  <div className="absolute bottom-0 left-[-40%] right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-orange via-orange/60 rotate-[80deg]"></div>
                </div>
              </div>
            </MouseParallax>
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              <h1 className="text-[15vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[80%] mb-auto break-hyphens">Develo&shy;pment</h1>
              <div className="w-full lg:max-w-[55%]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-2 md:mb-8">We're Field. We're accelerating the build out of renewable infrastructure needed to reach net zero. We're starting with battery storage, to store energy for when it's needed, creating a more reliable, flexible and greener grid.</p>
              </div>
            </article>
          </Container>
        </div>
    
        <div className="bg-white">
          <Container>
            <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-[13vw]">
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none mb-8 md:mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>

              <Button href="/careers" label="Email&nbsp;Us" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug mb-[13.5vw]" a11yText="Navigate to the careers page" />
            </div>
          </Container>
        </div>

        <LocalImage src="/images/projects.jpg" alt="Mission Image" layout="responsive" width={2000 } height={773} bordered />

        <div className="bg-white border-b border-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full md:w-auto md:flex md:items-center md:justify-center md:border-r md:border-black pt-6 pb-2 md:py-0">
                <MetaText text="Filter By" className="px-5 md:px-4" />
              </div>
              <div className="w-full md:flex-1 px-5 md:px-3 lg:px-3 pb-6 pt-3 md:py-3">
                <Button href="/" label="Department" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug mb-[-8px] pb-0 mr-3" />
                <Button href="/" label="Location" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug mb-[-8px] pb-0" />
              </div>
            </div>
          </Container>
        </div>

        <div className="bg-white">
          <Container>
            <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-[13vw]">
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none mb-[13.5vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
            </div>
          </Container>
        </div>
      </main>
    
      <Footer />
    </Layout>
  )
}
