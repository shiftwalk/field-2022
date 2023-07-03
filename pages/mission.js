import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { useInView } from "framer-motion"
import { NextSeo } from 'next-seo'
import BlockContent from '@sanity/block-content-to-react'
import BatteryIcon from '@/icons/battery.svg'
import { useEffect, useRef, useState } from 'react'
import Button from '@/components/button'
import { CarouselCards } from '@/components/carousel-cards'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import { useCountUp } from 'react-countup';

const query = `{
  "mission": *[_type == "missionNew"][0]{
    title,
    heroHeading,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    theChallengeText,
    theChallengeCTAText,
    theChallengeCtaImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    ourPlanText,
    roadmapText,
    roadmapBars[] {
      year,
      metaInfo,
      icons[] {
        icon {
          asset-> {
            ...
          },
          caption,
          alt,
          hotspot {
            x,
            y
          },
        }
      }
    },
    impactNumber,
    impactText,
    howWeDoItCards[] {
      heading,
      text,
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    companyNumber,
    socialLinks[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Mission(initialData) {
  const { data: { mission, contact }  } = pageService.getPreviewHook(initialData)()
  if(typeof String.prototype.replaceAll === "undefined") {
    String.prototype.replaceAll = function(match, replace) {
       return this.replace(new RegExp(match, 'g'), () => replace);
    }
  }
  
  const [numberStart, setNumberStart] = useState(mission.impactNumber.replaceAll(',','') / 2)

  const numberEnd = mission.impactNumber.replaceAll(',','')

  const charts = useRef(null)
  const contentArea = useRef(null)
  const countUpArea = useRef(null)

  const chartIsInView = useInView(charts, { 
    once: true,
    margin: "0px 60% -60% 0px"
  })

  const countUpIsInView = useInView(countUpArea, { 
    once: false
  })

  useCountUp({
    ref: 'counter',
    start: numberStart,
    end: numberEnd,
    separator: ",",
    duration: 2,
    useEasing: true,
    smartEasingAmount: numberStart,
    smartEasingThreshold: numberStart
  });

  useEffect(() => {
    if (countUpIsInView) {
      setNumberStart(mission.impactNumber.replaceAll(',','') / 2);
    } else {
      setNumberStart(undefined);
    }
  }, [countUpIsInView]);

  const executeScroll = () => contentArea.current.scrollIntoView({behavior: "smooth"})    

  return (
    <Layout>
      <NextSeo
        title={mission.seo?.metaTitle ? mission.seo?.metaTitle : mission.title}
        description={mission.seo?.metaDesc ? mission.seo?.metaDesc : null}
        openGraph={{
          title: mission.seo?.metaTitle ? mission.seo?.metaTitle : mission.title,
          description: mission.seo?.metaDesc ? mission.seo?.metaDesc : null,
          images: mission.seo?.shareGraphic?.asset[
            {
              url: mission.seo?.shareGraphic?.asset.url ? mission.seo?.shareGraphic?.asset.url : null,
              width: mission.seo?.shareGraphic?.asset.metadata.dimensions.width ? mission.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: mission.seo?.shareGraphic?.asset.metadata.dimensions.height ? mission.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden">
          <Container> 
            <article>
              <h1 className="text-[9.5vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[93%] mb-[35vw] lg:mb-[12vw] break-hyphens">{mission.heroHeading}</h1>

              <button onClick={executeScroll} className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-black items-center justify-center text-off-white group relative border-black border overflow-hidden hidden lg:flex">

                <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-white md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                <span className={`relative block overflow-hidden z-10 md:group-hover:text-black transition-colors ease-in-out duration-[450ms]`}>
                  <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] ml-[3px] md:ml-[4px] xl:ml-[6px] rotate-90">
                    →
                  </span>
                </span>
              </button>
            </article>
          </Container>
        </div>

        <SanityImage image={mission.heroImage} alt="Mission Image" bordered />

        <Container>
          <div className="max-w-[96%] pt-2 lg:pt-5" ref={contentArea}>
            <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[13.5vw]">The Challenge</span>
            <div className="content content--fancy mb-[13.5vw]">
              <BlockContent serializers={{ container: ({ children }) => children }} blocks={mission.theChallengeText} />
            </div>
          </div>
        </Container>

        <div className="border-y border-y-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full md:w-[55%] aspect-[10/5.7]">
                <div className="relative overflow-hidden aspect-[10/5.7] border-b md:border-b-0 md:border-r border-black">
                  <SanityImage image={mission.theChallengeCtaImage} alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full aspect-[10/5.7]" />
                </div>
              </div>
              <div className="w-full md:w-[45%] bg-off-white-dark flex items-center px-5 py-12 md:py-0 md:px-8">
                <h2 className="text-[5.5vw] md:text-[3.4vw] lg:text-[2.8vw] leading-[1.125] md:leading-none lg:leading-none max-w-[90%] lg:max-w-[85%] mb-0 pb-0">{mission.theChallengeCTAText}</h2>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="max-w-[96%] pt-2 lg:pt-5">
            <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[13.5vw]">Our Plan</span>
            <div className="content content--fancy mb-12">
              <BlockContent serializers={{ container: ({ children }) => children }} blocks={mission.ourPlanText} />
            </div>

            <Button href="/projects" label="See&nbsp;Our&nbsp;Projects" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug mb-[12vw]" a11yText="Navigate to the Projects Page" />
          </div>
        </Container>
      

        <div className="border-y border-y-black bg-purple text-off-white">
          <Container className="relative z-10">
            <div className="max-w-[96%] pt-2 lg:pt-5">
              <span className="block uppercase text-current text-xs leading-none tracking-wider mb-[15vw] lg:mb-[10vw] 2xl:mb-[15vw]">Our Roadmap</span>
              <h2 className="text-[4.2vw] md:text-[3.2vw] lg:text-[2.5vw] leading-[1.125] md:leading-none lg:leading-none w-full max-w-[70%] md:max-w-[50%]">{mission.roadmapText}</h2>
            </div>
          </Container>

          {/* <div className="w-full h-[100vw] md:h-[85vw] lg:h-[55vw] 2xl:h-[70vw] z-0 mt-[-20vw] relative">
            <Container className="h-full relative z-10" />

            <div className="absolute inset-0 flex items-end z-0 px-3 md:px-4 lg:px-5 text-soft-black-dark text-[4vw] md:text-[2.9vw] leading-none md:leading-none overflow-hidden" ref={charts}>
              {mission.roadmapBars.map((e, i) => {
                let color = 'bg-off-white-dark'
                let startHeight = 'h-[10%]' 
                let endHeight = 'h-[20%]' 
                
                if (i == 1) {
                  startHeight = 'h-[10%]' 
                  endHeight = 'h-[40%]' 
                  color = 'bg-blue'
                }
                if (i == 2) {
                  startHeight = 'h-[10%]' 
                  endHeight = 'h-[65%]' 
                  color = 'bg-orange'
                }
                if (i == 3) {
                  startHeight = 'h-[10%]' 
                  endHeight = 'h-[80%]' 
                  color = 'bg-yellow'
                }
                if (i == 4) {
                  startHeight = 'h-[10%]' 
                  endHeight = 'h-[97%]' 
                  color = 'bg-off-white'
                }
                return ( 
                  <div
                    className={`w-1/4 ${color} p-2 md:p-4 lg:p-5 xl:p-6 transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-[1000ms] delay-[250ms] relative ${ chartIsInView ? endHeight : startHeight }`}
                    key={i}
                  >
                    <span className="block mb-1 relative overflow-hidden">
                      <span className={`block transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[800ms]' : 'translate-y-full' }`}>{e.year}</span>
                    </span>
                    <span className="block relative overflow-hidden">
                      <span className={`block text-[2.25vw] md:text-[1.3vw] transition-translate ease-in-out duration-500 ${ chartIsInView ? 'translate-y-0 delay-[850ms]' : 'translate-y-full' }`}>{e.metaInfo}</span>
                    </span>
                    
                    <div className={`w-full absolute bottom-0 left-0 m-2 md:m-4 lg:m-5 xl:m-6 transition-opacity ease-in-out duration-500 delay-[850ms] flex space-x-1 lg:space-x-3 ${ chartIsInView ? 'opacity-100' : 'opacity-0' }`}>
                        {e.icons.map((e, i) => {
                          return (
                            <div className="w-[20%] max-w-[45px]">
                              <SanityImage image={e.icon} key={i} className="w-full" noBg noLoader />
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div> */}
        </div>

        <div className="bg-white border-b border-black">
          <Container>
            <div className="text-center py-[13.5vw]">
              <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[3vw]">The Impact</span>
              <span className="block text-[14.5vw] md:text-[14vw] uppercase italic leading-none md:leading-[0.85] mb-[5vw] lg:mb-[3vw]">
                <span className="relative inline-block" ref={countUpArea}>
                  <span className={`block pr-[2px] md:pr-[4px] tabular-nums`} id="counter">
                    {mission.impactNumber}
                  </span>
                </span>
              </span>

              <h2 className="text-base md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight w-full md:max-w-[75%] lg:max-w-[65%] xl:max-w-[50%] mx-auto pb-0 mb-0">{mission.impactText}</h2>
            </div>
          </Container>
        </div>

        <Container noPad className="py-5">
          <div className="pt-2 lg:pt-5 px-5 md:px-6 lg:px-8">
            <span className="block uppercase text-soft-black text-xs leading-none tracking-wider mb-[13.5vw]">How We Do It</span>
          </div>

          <div className="mb-[13.5vw] pl-5 md:pl-6 lg:pl-8 cursor-grab"> 
            <CarouselCards items={mission.howWeDoItCards} />
          </div>
        </Container>
      </main>
    
      <Footer contact={contact} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}