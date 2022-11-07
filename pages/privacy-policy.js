import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import MetaText from '@/components/meta-text'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'

const query = `{
  "privacy": *[_type == "privacy"][0]{
    title,
    text,
    date,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function PrivacyPolicy(initialData) {
  const { data: { privacy }  } = pageService.getPreviewHook(initialData)()

  let d = new Date(privacy.date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
  
  return (
    <Layout>
      <NextSeo title="Privacy Policy" />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden border-b border-black">
          <Container>
            <article className="relative">
              <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[93%] break-hyphens mb-[12vw]">Privacy<br/>Policy</h1>

              <button className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-black flex items-center justify-center text-off-white "><span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] ml-[3px] md:ml-[4px] xl:ml-[6px] rotate-90">→</span></button>
              
              <MetaText text={`Last Updated: ${da} ${mo} ${ye}`} className="absolute bottom-0 right-0" />
            </article>
          </Container>
        </div>

        <div className="bg-white">
          <Container>
            <div className="flex flex-wrap pt-[8vw] pb-[8vw]">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <span className="inline-block uppercase text-off-white text-xs leading-none tracking-wider bg-purple px-5 py-2 rounded-full mt-2">Legal</span>
              </div>
              <div className="w-full md:w-3/4">
                <div className="w-11/12 md:w-2/3 content">

                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={privacy.text} />
                </div>
              </div>
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