import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import MetaText from '@/components/meta-text'
import Button from '@/components/button'
import ContactButton from '@/components/contact-button'
import BlockContent from '@sanity/block-content-to-react'
import AccordionItem from '@/components/accordion-item'
import { useState } from 'react'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'

const query = `{
  "development": *[_type == "development"][0]{
    title,
    heroHeading,
    heroText,
    introText,
    audiences[] {
      title,
      whyWorkWithUs[] {
        title,
        text,
      },
      faqs[] {
        question,
        answer,
      }
    },
    orangeCtaImage {
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
    orangeCtaHeading,
    orangeCtaText,
    contactCTAText,
    contactEmailLinks[] {
      country,
      emailAddress
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Development(initialData) {
  const { data: { development }  } = pageService.getPreviewHook(initialData)()
  const [currentFor, setCurrentFor] = useState(development.audiences[0].title)

  const setCurrent = (e) => {
    setCurrentFor(e)
  }

  return (
    <Layout>
      <NextSeo title={development.title} />
      
      <main>
        <div className="h-[75vh] flex flex-col pt-[75px] lg:pt-[94px] relative overflow-hidden border-b border-black bg-gradient-to-br from-orange via-yellow to-purple">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center hidden lg:block">
          
            {/* Left blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
              <div className="absolute inset-0 origin-left">
                <div className="absolute top-0 left-0 w-[75vw] h-[130%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[-25vw] translate-y-[-35%] blur-xl overflow-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-t from-white/80 via-white/50 rotate-[90deg] z-[2]"></div>
                  <div className="absolute bottom-[-15%] left-[23%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange via-orange rotate-[-35deg]"></div>
                </div>
              </div>
            </MouseParallax>

            {/* Right blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
              <div className="absolute inset-0 origin-right">
                <div className="absolute top-0 right-0 w-[75vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[25vw] translate-y-[-5%] blur-xl flex items-center justify-center overflow-hidden">
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-45%] mr-[-10%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-white via-white/60 rotate-[0deg]"></div>
                  <div className="w-[55%] h-[150%] rounded-full radial radial--purple mt-[5%] ml-[-15%] top-0 left-0 absolute opacity-70"></div>
                  <div className="absolute bottom-0 left-[-40%] right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-orange via-orange/60 rotate-[80deg]"></div>
                </div>
              </div>
            </MouseParallax>
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              <h1 className="text-[15vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[80%] mb-auto break-hyphens">{development.heroHeading}</h1>
              <div className="w-full lg:max-w-[55%]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-2 md:mb-8">{development.heroText}</p>
              </div>
            </article>
          </Container>
        </div>
    
        <div className="border-b border-black">
          <Container>
            <div className="max-w-[100%] md:max-w-[90%] lg:max-w-[90%] pt-[10vw] pb-12">
              <div className="content content--fancy pb-[6.2vw]">
                <BlockContent serializers={{ container: ({ children }) => children }} blocks={development.introText} />
              </div>

              <MetaText text="Find Out More:" className="mb-5 md:mb-6" />

              <div className="content max-w-[80%] lg:max-w-none">
                <p>Select an option below to learn more about working with us.</p>
              </div>

              <div className="lg:flex lg:space-x-3 max-w-[80%] lg:max-w-none">
                {development.audiences.map((e, i) => {
                  return (
                    <button onClick={()=> setCurrent(e.title)} className={`group block lg:inline-block w-full relative overflow-hidden lg:w-auto text-xl xl:text-2xl leading-none lg:leading-none mt-6 lg:mt-8 px-6 md:px-8 lg:px-10 pt-4 md:pt-4 pb-4 md:pb-4 border border-black rounded-full ${currentFor == e.title ? 'bg-black text-white' : '' }`} key={i}>
                      <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                      <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
                        For {e.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </Container>
        </div>

        {/* LANDOWNERS */}
        <div className="border-b border-black">

          {development.audiences.map((e, i) => {
            return (
              <div className={`${currentFor == e.title ? 'block' : 'hidden'}`} key={i}>
                {e.whyWorkWithUs?.length && (
                  <Container>
                    <MetaText text="Why Work With Us" className="pt-6 lg:pt-12 mb-4 lg:mb-6" />

                    <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mb-[12vw] lg:mb-[7vw]`}>
                      {e.whyWorkWithUs?.map((e, i) => {
                        return (
                          <div className="col-span-1 flex flex-wrap" key={i}>
                            <div className="bg-white border border-black p-5 aspect-square flex flex-wrap w-full">
                              <div className="w-full mb-auto">
                                <h2 className="text-[7.65vw] lg:text-[4.2vw] xl:text-[2.8vw] leading-[1.025] lg:leading-[1.025] xl:leading-[1.025] block w-[90%] break-words">{e.title}</h2>
                              </div>

                              {e.text && (
                                <div className="content content--small w-full mt-auto">
                                  <p>{e.text}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    {e.faqs?.length && (
                      <MetaText text="Frequently Asked Questions" className="pt-6 lg:pt-12 mb-2 lg:mb-4" />
                    )}
                  </Container>
                )}
                
                {e.faqs?.length && (
                  <Container noPad>
                    <div className="border-t border-black">
                      {e.faqs?.map((e, i) => {
                        return (
                          <AccordionItem question={e.question} answer={e.answer} key={i} />
                        )
                      })}
                    </div>
                  </Container>
                )}
              </div>
            )
          })}

          <Container className="pb-[5vw]"></Container>

          <div className="border-t border-t-black">
            <Container noPad>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 aspect-square lg:aspect-square border-b border-black lg:border-b-0 lg:border-r">
                  <div className="relative overflow-hidden h-full">
                    <SanityImage image={development.orangeCtaImage} alt="Careers Image" layout="fill" className="absolute inset-0 w-full h-full aspect-[10/11]" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-yellow flex flex-wrap items-center px-5 py-6 md:pt-6 md:pb-6 md:px-6">
                  <div className="w-full mb-auto pb-[7vw] 2xl:pb-[12vw]">
                    <h2 className="text-[7.65vw] lg:text-[4.2vw] xl:text-[2.8vw] leading-[1.01] lg:leading-[1.01] xl:leading-[1.01] block w-[80%]">{development.orangeCtaHeading}</h2>
                  </div>

                  <div className="w-full mt-auto">
                    <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[85%] xl:max-w-[78%] mb-6 md:mb-8 pb-0">{development.orangeCtaText}</p>

                    <Button internal={false} href="mailto:hello@field.energy" className="inline-block text-lg lg:text-xl xl:text-2xl" label="Get&nbsp;In&nbsp;Touch" a11yText={"Contact Field Energy" } />
                  </div>

                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className="bg-white">
          <Container>
            <div className="max-w-[90%] md:max-w-[90%] lg:max-w-[90%]">
              <MetaText text="Contact the team" className="pb-[13vw] pt-6" />
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none">{development.contactCTAText}</h2>

              <ContactButton
                hrefs={development.contactEmailLinks}
                className="inline-block text-xl xl:text-2xl leading-none lg:leading-none mt-8 mb-[13.5vw]"
              />
            </div>
          </Container>
        </div>
      </main>
    
      <Footer noCta />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}