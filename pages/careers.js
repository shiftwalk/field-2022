import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Button from '@/components/button'
import MetaText from '@/components/meta-text'
import { CarouselQuotes } from '@/components/carousel-quotes'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import SanityImage from '@/components/sanity-image'

const query = `{
  "careers": *[_type == "careersLanding"][0]{
    title,
    externalCareersLink,
    heroHeading,
    heroText,
    workingAtFieldCtaImage {
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
    workingAtFieldCtaText,
    valuesIntroText,
    values[] {
      heading,
      text
    },
    companyBenefitsIntroText,
    companyBenefits[] {
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
      },
      heading,
      text
    },
    supportingImage {
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
    careersCtaText,
    testimonials[] {
      authorJobTitle,
      authorName,
      quote,
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

export default function Careers(initialData) {
  const { data: { careers, contact }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo
        title={careers.seo?.metaTitle ? careers.seo?.metaTitle : careers.title}
        description={careers.seo?.metaDesc ? careers.seo?.metaDesc : null}
        openGraph={{
          title: careers.seo?.metaTitle ? careers.seo?.metaTitle : careers.title,
          description: careers.seo?.metaDesc ? careers.seo?.metaDesc : null,
          images: careers.seo?.shareGraphic?.asset[
            {
              url: careers.seo?.shareGraphic?.asset.url ? careers.seo?.shareGraphic?.asset.url : null,
              width: careers.seo?.shareGraphic?.asset.metadata.dimensions.width ? careers.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: careers.seo?.shareGraphic?.asset.metadata.dimensions.height ? careers.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden">
          <Container>
            <article>
              <h1 className="text-[9.5vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[75%] mb-[35vw] md:mb-[16vw] lg:mb-[12vw]">{careers.heroHeading}</h1>

              <div className="w-full lg:w-[50%] max-w-[880px]">
                <p className="text-lg lg:text-xl 2xl:text-2xl mb-5 md:mb-8 leading-tight lg:leading-tight xl:leading-tight">{careers.heroText}</p>

                <Button internal={false} href={careers.externalCareersLink} className="inline-block text-lg lg:text-xl xl:text-2xl" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
              </div>
            </article>
          </Container>
        </div>

        <div className="border-y border-y-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto border-b border-black lg:border-b-0 lg:border-r">
                <div className="relative overflow-hidden h-full">
                  <SanityImage image={careers.workingAtFieldCtaImage} alt="Careers Image" layout="fill" className="absolute inset-0 w-full h-full aspect-[10/11] cover-image--right"  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-yellow flex flex-wrap items-center px-5 py-6 md:pt-6 md:pb-6 md:px-6">
                <div className="w-full mb-auto pb-[7vw] 2xl:pb-[12vw]">
                  <MetaText text="Working at Field" />
                </div>

                <div className="w-full content content--yellow max-w-[90%] lg:max-w-[85%] xl:max-w-[78%]">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={careers.workingAtFieldCtaText} />
                </div>

                <div className="w-full mt-auto pt-[7vw] lg:pt-[3.4vw] 2xl:pt-[4vw]">
                  <Button internal={false} href={careers.externalCareersLink} className="inline-block text-lg lg:text-xl xl:text-2xl" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container noPad className="relative z-10">
          <span className="block uppercase text-current text-xs leading-none tracking-wider pt-6 md:pt-10 px-5 md:px-6 lg:px-8 pb-[13vw] lg:pb-[13vw]">Our Values</span>

          <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none pb-[8vw] lg:pb-[8vw] px-5 md:px-6 lg:px-8 border-b border-black">
          <span className="block w-[95%]">{careers.valuesIntroText}</span></h2>

          <ul>
            {careers.values.map((e, i) => {
              return ( 
                <li className="p-5 md:p-6 lg:p-8 pb-[20vw] md:pb-[13vw] lg:pb-[10vw] border-b border-black flex flex-wrap" key={i}>
                  <div className="w-[66%] md:w-[33%] lg:w-[20%]">
                    <h2 className="text-[8vw] md:text-[4.2vw] lg:text-[3vw] leading-none md:leading-none lg:leading-none uppercase italic">{e.heading}</h2>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-auto">
                    <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[85%] xl:max-w-[78%] mb-0 pb-0">{e.text}</p>
                  </div>
                </li>
              )
            })}

            <li className="p-5 md:p-6 lg:p-8 pb-4 md:pb-[8vw] lg:pb-[6vw]">
              <Button internal={false} href={careers.externalCareersLink} className="inline-block text-lg lg:text-xl xl:text-2xl" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
            </li>
          </ul>
        </Container>

        <div className="bg-white border-t border-black">
          <Container>
            <div className="pt-2 lg:pt-5 pb-[12vw]">
              <span className="block uppercase text-current text-xs leading-none tracking-wider pb-[13vw] lg:pb-[13vw]">Company Benefits</span>

              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none pb-[8vw] lg:pb-[8vw]"><span className="block w-[95%]">{careers.companyBenefitsIntroText}</span></h2>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 xl:gap-x-6 2xl:gap-x-8 gap-y-[16vw] lg:gap-y-[10vw]">
                {careers.companyBenefits.map((e, i) => {
                  return ( 
                    <li className="col-span-1" key={i}>
                      <span className="block relative w-8 md:w-10 xl:w-12 mb-6">
                        <SanityImage image={e.icon} className="w-full" noBg noLoader />
                      </span>

                      {/* <MetaText text={`#${i + 1}`} className="mb-3 md:mb-5" /> */}
                      <h2 className="text-[8vw] md:text-[3.9vw] lg:text-[2.7vw] leading-none md:leading-none lg:leading-none max-w-[90%] 2xl:max-w-[68%]">{e.heading}</h2>
                      <p className="text-lg md:text-xl 2xl:text-xl leading-tight md:leading-tight lg:leading-tight 2xl:leading-tight max-w-[90%] md:max-w-[85%] 2xl:max-w-[80%] mb-0 pb-0">{e.text}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Container>
        </div>

        <SanityImage image={careers.supportingImage} alt="Careers Image" bordered />

        <Container>
          <div className="max-w-[96%] py-[13.5vw]">
            <div className="content content--fancy mb-[5vw] lg:mb-[2vw]">
              <BlockContent serializers={{ container: ({ children }) => children }} blocks={careers.careersCtaText} />
            </div>

            <Button internal={false} href={careers.externalCareersLink} className="inline-block text-lg lg:text-xl xl:text-2xl" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
          </div>
        </Container>
        
        
        <CarouselQuotes items={careers.testimonials} />
      </main>
    
      <Footer noCta contact={contact} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}