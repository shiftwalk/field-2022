import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image'
import Button from '@/components/button'
import MetaText from '@/components/meta-text'
import Link from 'next/link'
import { useState } from 'react'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'

const query = `{
  "views": *[_type == "views"] | order(publishDate desc) {
    title,
    featured,
    author-> {
      name,
      jobTitle
    },
    authors[]-> {
      name,
      jobTitle
    },
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
    publishDate,
    category-> {
      name
    },
    slug {
      current
    }
  },
  "viewsLanding": *[_type == "viewsLanding"][0] {
    title,
    featuredArticleImage {
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
    featuredArticle-> {
      title,
      publishDate,
      category-> {
        name
      },
      author-> {
        name,
        jobTitle
      },
      authors[]-> {
        name,
        jobTitle
      },
      slug {
        current
      }
    }
  },
  "featured": *[_type == "views" && featured == true][0] {
    title,
    category-> {
      name
    },
    slug {
      current
    },
    author-> {
      name,
      jobTitle
    },
    authors[]-> {
      name,
      jobTitle
    },
  },
  "categories": *[_type == "categories"] {
    name
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

export default function Views(initialData) {
  const { data: { views, categories, viewsLanding, contact }  } = pageService.getPreviewHook(initialData)()
  const [currentCategory, setCurrentCategory] = useState('All')
  const [currentCap, setCurrentCap] = useState(8)

  const updateCategory = (e) => {
    setCurrentCategory(e)
  }

  const loadMore = (e) => {
    setCurrentCap(currentCap+5)
  }

  let filteredViews = views
  filteredViews = (currentCategory !== 'All') ? filteredViews.filter(d => d.category.name == currentCategory) : filteredViews

  let d = new Date(viewsLanding.featuredArticle.publishDate);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return (
    <Layout>
      <NextSeo
        title={viewsLanding.seo?.metaTitle ? viewsLanding.seo?.metaTitle : viewsLanding.title}
        description={viewsLanding.seo?.metaDesc ? viewsLanding.seo?.metaDesc : null}
        openGraph={{
          title: viewsLanding.seo?.metaTitle ? viewsLanding.seo?.metaTitle : viewsLanding.title,
          description: viewsLanding.seo?.metaDesc ? viewsLanding.seo?.metaDesc : null,
          images: viewsLanding.seo?.shareGraphic?.asset[
            {
              url: viewsLanding.seo?.shareGraphic?.asset.url ? viewsLanding.seo?.shareGraphic?.asset.url : null,
              width: viewsLanding.seo?.shareGraphic?.asset.metadata.dimensions.width ? viewsLanding.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: viewsLanding.seo?.shareGraphic?.asset.metadata.dimensions.height ? viewsLanding.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />
      
      <main>
        <div className="md:h-screen flex flex-col pt-[78px] md:pt-[78px] lg:pt-[92px] overflow-hidden relative border-b border-black">
          <Container noPad className="h-full flex flex-col relative z-10">
            <div className="w-full flex flex-wrap h-full">
              <div className="w-full md:w-1/2 md:h-full aspect-[12/8] md:aspect-auto md:border-r border-b md:border-b-0 border-black">
                <div className="relative overflow-hidden w-full h-full">
                  <SanityImage image={viewsLanding.featuredArticleImage} alt="Mission Image" layout="fill" className="absolute inset-0 w-full h-full" />
                </div>
              </div> 

              <article className="w-full md:w-1/2 h-full flex flex-col p-5 md:p-6 lg:p-6">
                <div className="mb-8 md:mb-auto lg:flex">
                  <MetaText text={`Featured Article - ${da} ${mo} ${ye}`} className="mb-1" />


                  {viewsLanding.featuredArticle.authors?.length > 0 ? (
                    <span className={`block uppercase text-xs leading-none tracking-wider ml-auto`}>Written By: {viewsLanding.featuredArticle.authors.map((e, i) => { return (<>{i > 0 && ', '}{e.name}</>)})}</span>
                  ) : (
                    <MetaText text={`Written By: The Field Team`} className="ml-auto" />
                  )}
                </div>

                <Link href={`/views/${viewsLanding.featuredArticle.slug.current}`}>
                  <a className="mb-auto">
                    <h1 className="text-[6.5vw] md:text-[4.5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[1.05] md:leading-[1.05] lg:leading-[1.05] xl:leading-[1.05] xl:w-11/12">{viewsLanding.featuredArticle.title}</h1>
                  </a>
                </Link>
                
                <div>
                  <Button href={`/views/${viewsLanding.featuredArticle.slug.current}`} className="inline-block text-lg lg:text-xl xl:text-2xl" label="Read&nbsp;Article" a11yText={"Navigate to the article page" } />
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
              <button onClick={()=> updateCategory('All')} className={`block md:inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10 ${'All' == currentCategory ? 'opacity-100' : 'opacity-30'}`}>Show All</button>
              {categories.map((e, i) => {
                return (
                  <button onClick={()=> updateCategory(e.name)} className={`block md:inline-block text-lg lg:text-xl leading-snug lg:leading-snug md:py-4 mr-5 md:mr-6 lg:mr-10 ${e.name == currentCategory ? 'opacity-100' : 'opacity-30'}`} key={i}>{e.name}</button>    
                )
              })}
            </div>
          </div>
        </Container>

        <div className="">
          <Container className="pt-[5vw] pb-[8vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
              {filteredViews.slice(0,3).map((e, i) => {
                let d = new Date(e.publishDate);
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

                return ( 
                  <Link href={`/views/${e.slug.current}`} key={i}>
                    <a className="col-span-1 group">
                      <div className="w-full aspect-square border-black border flex flex-col group-hover:bg-yellow">
                        <div className="flex flex-wrap px-3w-full mb-auto">
                          <span className="flex space-x-2 py-2">
                            <span className="px-3 py-2">
                              <MetaText text={`${e.category.name}  - ${da} ${mo} ${ye}`} />
                            </span>
                          </span>
                        </div>

                        <span className="px-3 block text-[5.6vw] md:text-[3vw] xl:text-[2vw] leading-[1.085] md:leading-[1.085] xl:leading-[1.085] w-11/12">{e.title}</span>

                        {e.authors?.length > 0 ? (
                          <span className={`block uppercase text-xs leading-none tracking-wider p-3`}>Written By: {e.authors.map((e, i) => { return (<>{i > 0 && ', '}{e.name}</>)})}</span>
                        ) : (
                          <MetaText text={`Written By: The Field Team`} className="p-3" />
                        )}
                        
                        <div className="px-3 py-4 w-full mt-auto flex items-end">
                          <span className="block md:inline-block text-xl text-center lg:text-2xl leading-snug lg:leading-snug group relative px-6 md:px-8 lg:px-10 pt-3 md:pt-4 pb-[15px] md:pb-[18px] border border-black rounded-full overflow-hidden">
                            <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                            <span className={`relative block overflow-hidden z-10 md:group-hover:text-white  transition-colors ease-in-out duration-[450ms]`}>
                              Read Article
                            </span>
                          </span>
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
          {filteredViews.slice(3,currentCap).map((e, i) => {
            let d = new Date(e.publishDate);
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

            return ( 
              <Link href={`/views/${e.slug.current}`} key={i}>
                <a className="block group relative">
                  <Container className="absolute inset-0" />
                  
                  <div className="md:flex items-center w-full border-b-black border-b group-hover:bg-yellow py-6 md:py-6 lg:py-6 px-8 md:px-10 lg:px-12">
                    <div className="flex-1 mb-6 md:mb-0">
                      {e.authors?.length > 0 ? (
                        <span className={`block uppercase text-xs leading-none tracking-wider mb-3`}>
                        {e.category.name} - {da} {mo} {ye} - Written By: {e.authors.map((e, i) => { return (<>{i > 0 && ', '}{e.name}</>)})}
                        </span>
                      ) : (
                        <span className={`block uppercase text-xs leading-none tracking-wider mb-3`}>
                        {e.category.name} - {da} {mo} {ye} - Written By: The Field Team
                        </span>
                      )}

                      <span className="block text-[5vw] md:text-[2.5vw] xl:text-[2vw] 2xl:text-[1.7vw] leading-[1.075] md:leading-[1.075] lg:leading-[1.075] xl:leading-[1.075] 2xl:leading-[1.075] w-11/12 lg:w-10/12">{e.title}</span>
                      
                    </div>

                    <div className="w-full md:w-auto md:ml-auto md:flex md:items-end hidden">
                      <span className="block md:inline-block text-xl text-center lg:text-2xl leading-snug lg:leading-snug group relative px-6 md:px-8 lg:px-10 pt-3 md:pt-4 pb-[15px] md:pb-[18px] border border-black rounded-full overflow-hidden">
                        <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                        <span className={`relative block overflow-hidden z-10 md:group-hover:text-white  transition-colors ease-in-out duration-[450ms]`}>
                          Read Article
                        </span>
                      </span>
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
          {(filteredViews.length >= currentCap) && (
            <button onClick={loadMore} className="block md:inline-block text-xl text-center lg:text-2xl leading-snug lg:leading-snug group relative px-6 md:px-8 lg:px-10 pt-3 md:pt-4 pb-[15px] md:pb-[18px] border border-black rounded-full overflow-hidden">
              <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

              <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
                + Show More Articles
              </span>
            </button>
          )}
        </Container>
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