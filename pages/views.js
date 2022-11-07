import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image'
import Button from '@/components/button'
import MetaText from '@/components/meta-text'
import Link from 'next/link'

const viewsData = [{
    heading: "Lorem ipsum dolor sit amet, consectetur",
  },{
    heading: "Lorem ipsum dolor sit amet, consectetur",
  },{
    heading: "Lorem ipsum dolor sit amet, consectetur",
  },{
    heading: "Lorem ipsum dolor sit amet, consectetur",
  },{
    heading: "Lorem ipsum dolor sit amet, consectetur",
  },{
    heading: "Lorem ipsum dolor sit amet, consectetur",
}]

export default function Views() {
  return (
    <Layout>
      <NextSeo title="Views" />
      
      <main>
        <div className="md:h-screen flex flex-col pt-[75px] md:pt-[77px] lg:pt-[96px] overflow-hidden relative border-b border-black">
          <Container noPad className="h-full flex flex-col relative z-10">
            <div className="w-full flex flex-wrap h-full">
              <div className="w-full md:w-1/2 md:h-full aspect-[12/8] md:aspect-auto md:border-r border-b md:border-b-0 border-black">
                <div className="relative overflow-hidden w-full h-full">
                  <LocalImage src="/images/featured.jpg" alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full" />
                </div>
              </div>

              <article className="w-full md:w-1/2 h-full flex flex-col p-5 md:p-6 lg:p-6">
                <div className="mb-8 md:mb-auto">
                  <MetaText text="Featured Article" />
                </div>

                <div className="mb-auto">
                  <h1 className="text-[7.5vw] md:text-[5.5vw] lg:text-[4.3vw] leading-[0.9]">Lorem ipsum dolor sit amet, consectetur</h1>
                  <div className="w-full md:w-[80%] xl:w-[65%]">
                    <p className="text-lg lg:text-xl xl:text-2xl mb-5 md:mb-8 leading-snug lg:leading-snug xl:leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  </div>
                </div>
                
                <div>
                  <Button href="/views-slug" className="inline-block text-lg lg:text-xl xl:text-2xl" label="Read&nbsp;Article" a11yText={"Navigate to the article page" } />
                </div>
              </article>
            </div>
          </Container>
        </div>

        <Container noPad>
          <div className="flex flex-wrap border-b border-black">
            <div className="w-full md:w-auto md:flex md:items-center md:justify-center md:border-r md:border-black pt-6 pb-2 md:py-0">
              <MetaText text="Filter By" className="px-5 md:px-4" />
            </div>
            <div className="w-full md:flex-1 px-5 md:px-6 lg:px-12 pb-6 pt-3 md:py-3">
              <button href="/" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10">Show All</button>
              <button href="/" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10 opacity-30">Company</button>
              <button href="/" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10 opacity-30">Sustainability</button>
              <button href="/" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10 opacity-30">Industry News</button>
              <button href="/" className="inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10 opacity-30">Life At Field</button>
            </div>
          </div>
        </Container>

        <div className="">
          <Container className="pt-[5vw] pb-[8vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
              {viewsData.slice(0,3).map((e, i) => {
                return ( 
                  <Link href="/views-slug">
                    <a className="col-span-1 group" key={i}>
                      <div className="w-full aspect-square border-black border flex flex-col group-hover:bg-yellow">
                        <div className="flex flex-wrap px-3w-full mb-auto">
                          <span className="flex space-x-2 py-2">
                            <span className="px-3 py-2"><MetaText text="Category" /></span>
                          </span>
                        </div>

                        <span className="px-3 block text-[6.3vw] md:text-[3.7vw] xl:text-[2.5vw] leading-none w-11/12">{e.heading}</span>
                        
                        <div className="px-3 py-4 w-full mt-auto flex items-end">
                          <Button href="/contact" label="Read&nbsp;Article" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug" a11yText="Navigate to the contact page" outline />
                        </div>
                      </div>
                    </a>
                  </Link>
                )
              })}
            </div>
          </Container>
        </div>

        <div className="border-t border-black">
          {viewsData.map((e, i) => {
            return ( 
              <Link href="/views-slug" key={i}>
                <a className="block group relative">
                  <Container className="absolute inset-0" />
                  
                  <div className="md:flex items-center w-full border-b-black border-b group-hover:bg-yellow py-6 md:py-6 lg:py-6 px-8 md:px-10 lg:px-12">
                    <div className="flex-1 mb-6 md:mb-0">
                      <MetaText text="Category" className="mb-3" />

                      <span className="block text-[5.2vw] md:text-[3vw] xl:text-[2vw] leading-none w-11/12">{e.heading}</span>
                    </div>

                    <div className="w-full md:w-auto md:ml-auto md:flex md:items-end hidden">
                      <Button href="/contact" label="Read&nbsp;Article" className="block md:inline-block text-xl text-center lg:text-2xl leading-snug lg:leading-snug" a11yText="Navigate to the contact page" outline />
                    </div>
                    
                    <div className="w-full md:w-auto md:ml-auto block md:hidden">
                      <span className="text-base block underline">Read Article</span>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>

        <Container className="pb-[10vw] pt-8">
          <Button href="#" label="+&nbsp;Show&nbsp;More&nbsp;Articles" className="block md:inline-block text-xl text-center lg:text-2xl leading-snug lg:leading-snug" a11yText="Navigate to the contact page" />
        </Container>
      </main>
    
      <Footer />
    </Layout>
  )
}
