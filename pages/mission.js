import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { useInView } from "framer-motion"
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image'
import BatteryIcon from '@/icons/battery.svg'
import { useRef } from 'react'
import MetaText from '@/components/meta-text'
import Button from '@/components/button'
import { CarouselCards } from '@/components/carousel-cards'

export default function Mission() {
  const charts = useRef(null)
  const chartIsInView = useInView(charts, { 
    once: true,
    margin: "0px 60% -60% 0px"
  })

  const countUp = useRef(null)
  const countUpIsInView = useInView(countUp, { 
    once: true,
    margin: "0px 50% -50% 0px"
  })

  return (
    <Layout>
      <NextSeo title="Mission" />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden">
          <Container>
            <article>
              <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[93%] break-hyphens mb-[12vw]">Accelera&shy;ting the build out of renew&shy;able infra&shy;structure</h1>

              <button className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-black flex items-center justify-center text-off-white "><span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] ml-[3px] md:ml-[4px] xl:ml-[6px] rotate-90">→</span></button>
            </article>
          </Container>
        </div>

        <LocalImage src="/images/mission-test.jpg" alt="Mission Image" layout="responsive" width={2401} height={927} bordered />

        <Container>
          <div className="max-w-[96%] pt-5">
            <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[13.5vw]">The Challenge</span>
            <h2 className="text-[5.5vw] md:text-[3.65vw] leading-[1.125] md:leading-none mb-[13.5vw]">To reach net zero, we need the biggest global transition of energy infrastructure ever seen, in the shortest amount of time. To do this, we have to solve big challenges; storing energy, reducing grid intermittency, and decarbonising our heating supply.</h2>
          </div>
        </Container>

        <div className="border-y border-y-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 aspect-[10/11]">
                <div className="relative overflow-hidden aspect-[10/11]">
                  <LocalImage src="/images/mission-test-2.jpg" alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full aspect-[10/11]" />
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-off-white-dark flex items-center px-5 py-12 md:py-0 md:px-8">
                <h2 className="text-[4.2vw] md:text-[3.2vw] lg:text-[2.5vw] leading-[1.125] md:leading-none lg:leading-none max-w-[90%] lg:max-w-[85%] mb-0 pb-0">We're developing, building, and optimising the grid-scale energy infrastructure needed to tackle these challenges.</h2>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="max-w-[96%] pt-5">
            <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[13.5vw]">Our Plan</span>
            <h2 className="text-[5.5vw] md:text-[3.65vw] leading-[1.125] md:leading-none mb-12">We're building a vertically integrated infrastructure business that can help tackle the urgent climate crisis. We're starting by developing, building and operating battery storage sites — first in the UK, then abroad. And we're creating our own technology platform to optimise our assets - allowing us to move faster and maximise returns.</h2>
            <Button href="/projects" label="See&nbsp;Our&nbsp;Projects" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug mb-[12vw]" a11yText="Navigate to the Projects Page" />
          </div>
        </Container>
      

        <div className="border-y border-y-black bg-purple text-off-white">
          <Container className="relative z-10">
            <div className="max-w-[96%] pt-5">
              <span className="block uppercase text-current text-xs leading-none tracking-wider mb-[15vw]">Our Roadmap</span>
              <h2 className="text-[4.2vw] md:text-[3.2vw] lg:text-[2.5vw] leading-[1.125] md:leading-none lg:leading-none w-full max-w-[70%] md:max-w-[50%]">We have a network of battery storage sites in operation and in development across the UK and Europe.</h2>
            </div>
          </Container>

          <div className="w-full h-[100vw] md:h-[85vw] lg:h-[70vw] z-0 mt-[-20vw] relative">
            <Container className="h-full relative z-10" />

            <div className="absolute inset-0 flex items-end z-0 px-3 md:px-4 lg:px-5 text-soft-black-dark text-[4vw] md:text-[2.9vw] leading-none md:leading-none overflow-hidden" ref={charts}>
              <div
                className={`w-1/4 bg-off-white-dark p-3 md:p-4 lg:p-5 xl:p-6 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-[1000ms] delay-[250ms] relative ${ chartIsInView ? 'h-[20%]' : 'h-[15%]' }`}
              >
                <span className="block mb-1 relative overflow-hidden">
                  <span className={`block transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[800ms]' : 'translate-y-full' }`}>2022</span>
                </span>
                <span className="block relative overflow-hidden">
                  <span className={`block text-[2.5vw] md:text-[1.3vw] transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[850ms]' : 'translate-y-full' }`}>XX MWh UK battery</span>
                </span>

                <BatteryIcon className="w-[20%] max-w-[45px] absolute bottom-0 left-0 m-3 md:m-4 lg:m-5 xl:m-6" />
              </div>
              <div
                className={`w-1/4 bg-blue p-3 md:p-4 lg:p-5 xl:p-6 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-[1000ms] delay-[200ms] relative ${ chartIsInView ? 'h-[35%]' : 'h-[20%]' }`}
              >
                <span className="block mb-1 relative overflow-hidden">
                  <span className={`block transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[800ms]' : 'translate-y-full' }`}>2023</span>
                </span>
                <span className="block relative overflow-hidden">
                  <span className={`block text-[2.5vw] md:text-[1.3vw] transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[850ms]' : 'translate-y-full' }`}>XX MWh UK battery</span>
                </span>
                <BatteryIcon className="w-[20%] max-w-[45px] absolute bottom-0 left-0 m-3 md:m-4 lg:m-5 xl:m-6" />
              </div>
              <div
                className={`w-1/4 bg-orange p-3 md:p-4 lg:p-5 xl:p-6 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-[1000ms] delay-[150ms] relative ${ chartIsInView ? 'h-[65%]' : 'h-[30%]' }`}
              >
                <span className="block mb-1 relative overflow-hidden">
                  <span className={`block transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[800ms]' : 'translate-y-full' }`}>2024</span>
                </span>
                <span className="block relative overflow-hidden">
                  <span className={`block text-[2.5vw] md:text-[1.3vw] transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[850ms]' : 'translate-y-full' }`}>XX MWh UK battery</span>
                </span>
                <BatteryIcon className="w-[20%] max-w-[45px] absolute bottom-0 left-0 m-3 md:m-4 lg:m-5 xl:m-6" />
              </div>
              <div
                className={`w-1/4 bg-yellow p-3 md:p-4 lg:p-5 xl:p-6 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-[1000ms] delay-[100ms] relative ${ chartIsInView ? 'h-[97%]' : 'h-[40%]' }`}
              >
                <span className="block mb-1 relative overflow-hidden">
                  <span className={`block transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[800ms]' : 'translate-y-full' }`}>2030</span>
                </span>
                <span className="block relative overflow-hidden">
                  <span className={`block text-[2.5vw] md:text-[1.3vw] transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[850ms]' : 'translate-y-full' }`}>XX MWh UK battery</span>
                </span>
                <BatteryIcon className="w-[20%] max-w-[45px] absolute bottom-0 left-0 m-3 md:m-4 lg:m-5 xl:m-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-black">
          <Container>
            <div className="text-center py-[13.5vw]" ref={countUp}>
              <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[3vw]">The Impact</span>
              <span className="block text-[14.5vw] md:text-[14vw] uppercase italic leading-none md:leading-[0.85] mb-[2vw]">
                <span className="relative inline-block overflow-hidden">
                  <span className={`block pr-[2px] md:pr-[4px] transition-translate ease-in-out duration-500 ${ countUpIsInView ? 'translate-y-[-8%]' : 'translate-y-full' }`}>
                    62,982,700
                  </span>
                </span>
              </span>

              <h2 className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight w-full md:max-w-[75%] lg:max-w-[65%] xl:max-w-[50%] mx-auto">Our 11GWh project pipeline aims to save this many tonnes of CO2eq from entering the atmosphere over the projects' operational period of 20 years.</h2>
            </div>
          </Container>
        </div>

        <Container noPad className="py-5">
          <div className="pt-5 px-5 md:px-6 lg:px-8">
            <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[13.5vw]">How We Do It</span>
          </div>

          <div className="mb-[13.5vw] pl-5 md:pl-6 lg:pl-8 cursor-grab"> 
            <CarouselCards />
          </div>
        </Container>
      </main>
    
      <Footer />
    </Layout>
  )
}
