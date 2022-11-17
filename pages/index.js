import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import Button from '@/components/button'
import LocalImage from '@/components/local-image'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'

const query = `{
  "home": *[_type == "homeNew"][0]{
    title,
    heroHeading,
    heroText,
    pageLinks[] {
      metaHeading,
      text,
      buttonText,
      pageToLink,
      image {
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

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={home.title} />
  
      <main>
        <div className="h-screen flex flex-col pt-[75px] lg:pt-[94px] overflow-hidden relative bg-gradient-to-tr from-orange via-yellow to-purple lg:bg-none">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full lg:bg-gradient-to-t lg:from-[#C99C97] lg:to-[#D9D5D0] overflow-hidden origin-center hidden lg:block">

            {/* Grain overlay */}
            <div className="grain absolute inset-0 w-full h-full z-10 hidden lg:block"></div>

            {/* Right blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
              <div className="absolute inset-0 origin-right">
                <div className="absolute top-0 right-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[48vw] translate-y-[-32%] blur-xl overflow-x-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-0 right-[20%] w-[50%] h-[40%] rounded-full bg-gradient-to-t from-purple via-purple/50 rotate-[-50deg] z-[2]"></div>
                  <div className="absolute bottom-[-10%] left-[-10%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange rotate-[25deg]"></div>

                  <div className="absolute bottom-[-10%] left-[24%] right-0 w-[25%] h-[45%] bg-gradient-to-t from-yellow to-yellow z-1 rounded-xl opacity-25 rotate-[-13deg]"></div>

                  <div className="absolute bottom-[-25%] left-[-10%] right-0 w-[70%] h-[45%] bg-gradient-to-t from-purple rotate-[25deg] z-1"></div>
                </div>
              </div>
            </MouseParallax>

            {/* Left blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
              <div className="absolute inset-0 origin-left">
                <div className="absolute top-0 left-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[-50vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-y-hidden origin-center">
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-20%] mr-[-20%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-purple via-purple/70 rotate-[20deg]"></div>
                </div>
              </div>
            </MouseParallax>
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              
              <h1 className="text-[17vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[80%] mb-auto break-hyphens">{home.heroHeading}</h1>
              <div className="w-full lg:w-[50%] max-w-[880px]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-5 md:mb-8 leading-snug lg:leading-snug xl:leading-snug">{home.heroText}</p>

                <Button href="/mission" className="inline-block text-lg lg:text-xl xl:text-2xl" label="Our&nbsp;Mission" a11yText={"Navigate to the mission page" } />
              </div>
            </article>
          </Container>
        </div>

        <div className="relative z-10 border-t border-black">
          <Container>
            <div className="flex flex-wrap md:-mx-5 py-[11vw]">
              {home.pageLinks.map((e, i) => {
                return ( 
                  <div className="w-full lg:w-1/3 md:px-5 flex flex-col mb-12 lg:mb-0" key={i}>
                    <span className="block uppercase text-current text-xs leading-none tracking-wider mb-5 w-full">{e.metaHeading}</span>

                    <h2 className="text-[6vw] md:text-[4.75vw] lg:text-[2.5vw] xl:text-[2.25vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-6 lg:mb-8 pb-0 w-[90%] xl:w-[85%]">{e.text}</h2>

                    <div className="relative overflow-hidden w-full mt-auto">
                      <div className="w-full mt-auto">
                        <Button outline href={e.pageToLink} label={e.buttonText} a11yText={`Navigate to the ${e.pageToLink} page`} className="inline-block text-xl xl:text-2xl leading-none xl:leading-none mb-6 lg:mb-10 xl:mb-12" />
                      </div>

                      <SanityImage image={e.image} className="w-full" />
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>
      </main>
    
      <Footer />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}