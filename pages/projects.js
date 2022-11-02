import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import LocalImage from '@/components/local-image'
import MetaText from '@/components/meta-text'
import Button from '@/components/button'

const projectsData = [
  {
    location: 'Oldham',
    country: 'UK',
    power: '20 MWh'
  },
  {
    location: 'Dundee',
    country: 'UK',
    power: 'XX MWh'
  },
  {
    location: 'Cefalù',
    country: 'Italy',
    power: 'XX MWh'
  },
  {
    location: 'Nottingham',
    country: 'UK',
    power: '20 MWh'
  },
  {
    location: 'Cologne',
    country: 'Germany',
    power: 'XX MWh'
  },
  {
    location: 'Padua',
    country: 'Italy',
    power: 'XX MWh'
  },
  {
    location: 'Wrexham',
    country: 'Uk',
    power: 'XX MWh'
  },
]

export default function Projects() {
  return (
    <Layout>
      <NextSeo title="Projects" />
      
      <main>
        <div className="h-[75vh] flex flex-col pt-[75px] lg:pt-[94px] relative overflow-hidden">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center">

            {/* Grain overlay */}
            <div className="grain absolute inset-0 w-full h-full z-10"></div>
          
            {/* Left blob */}
            {/* <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}> */}
              <div className="absolute inset-0 origin-left">
                <div className="absolute top-0 left-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[-57vw] translate-y-[-32%] blur-xl overflow-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-t from-white/80 via-white/50 rotate-[90deg] z-[2]"></div>
                  <div className="absolute bottom-[-15%] left-[23%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange via-orange rotate-[-35deg]"></div>
                </div>
              </div>
            {/* </MouseParallax> */}

            {/* Right blob */}
            {/* <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}> */}
              <div className="absolute inset-0 origin-right">
                <div className="absolute top-0 right-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[42vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-hidden">
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-45%] mr-[-10%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-white via-white/60 rotate-[0deg]"></div>
                  <div className="absolute bottom-0 left-[-40%] right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-orange via-orange/60 rotate-[80deg]"></div>
                </div>
              </div>
            {/* </MouseParallax> */}
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              <h1 className="text-[15vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[80%] mb-auto break-hyphens">Our Projects</h1>
              <div className="w-full lg:max-w-[55%]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-2 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
            </article>
          </Container>
        </div>

        <div className="border-y border-black">
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

        <div className="border-b border-black">
          <Container className="pt-[6vw] pb-[12vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
              {projectsData.map((e, i) => {
                return ( 
                  <div className="col-span-1" key={i}>
                    <div className="w-full aspect-square border-black border flex flex-col">
                      <div className="flex space-x-2 px-3 py-2 border-b border-black w-full mb-auto">
                        <span className="px-3 py-2 bg-purple text-white rounded-full"><MetaText text="Battery" className="text-white" /></span>
                        <span className="px-3 py-2 bg-orange text-white rounded-full"><MetaText text="Operational" className="text-white" /></span>
                      </div>

                      <span className="px-3 block text-[7vw] md:text-[5vw] xl:text-[3.5vw] leading-none">{e.location}<span className="block text-black text-opacity-10 mb-auto w-full">{e.country}</span></span>
                      
                      <div className="px-3 py-2 w-full mt-auto">
                        <span className="block text-[4vw] md:text-[3vw] xl:text-[2vw] leading-none">{e.power}</span>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="col-span-1">
                <div className="w-full aspect-square border-black border flex flex-col">
                  <div className="flex space-x-2 px-3 py-2 border-b border-black w-full mb-auto">
                    <span className="px-3 py-2 bg-purple text-white rounded-full"><MetaText text="Pipeline" className="text-white" /></span>
                  </div>

                  <span className="px-3 block text-[4vw] md:text-[3vw] xl:text-[2.2vw] leading-none max-w-[80%]">We have another XX MWh of battery storage acquired</span>
                  
                  <div className="px-3 py-2 w-full mt-auto">
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <LocalImage src="/images/projects.jpg" alt="Mission Image" layout="responsive" width={2000 } height={773} bordered />
      </main>
    
      <Footer />
    </Layout>
  )
}
