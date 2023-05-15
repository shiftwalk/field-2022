import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image'
import MetaText from '@/components/meta-text'
import Link from 'next/link'
import Button from '@/components/button'
import SanityPageService from '@/services/sanityPageService'
import BodyRenderer from '@/components/body-renderer'
import { useRef } from 'react'
import FacebookIcon from '@/icons/facebook.svg'
import LinkedinIcon from '@/icons/linkedin.svg'
import TwitterIcon from '@/icons/twitter.svg'
import LinkIcon from '@/icons/link.svg'

const query = `{
  "article": *[_type == "views" && slug.current == $slug][0]{
    title,
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
    category-> {
      name,
      slug {
        current
      }
    },
    author-> {
      name,
      jobTitle
    },
    authors[]-> {
      name,
      jobTitle
    },
    publishDate,
    contentBlocks[] {
      ...,
      text,
      authorName,
      authorJobTitle,
      image {
        asset-> {
          ...
        },
        overrideVideo {
          asset-> {
            ...
          }
        },
        overrideVimeoVideo,
        alt,
        caption,
        captionSubHeading
      },
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "related": *[_type == "views" && category->name == ^.category->name && slug.current != $slug][0..2] {
      title,
      category-> {
        name
      },
      slug {
        current
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

export default function ViewsSlug(initialData) {
  const contentArea = useRef(null)
  const { data: { article, contact } } = pageService.getPreviewHook(initialData)()
  let d = new Date(article.publishDate);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  const executeScroll = () => contentArea.current.scrollIntoView({behavior: "smooth"})    

  return (
    <Layout>
      <NextSeo
        title={article.seo?.metaTitle ? article.seo?.metaTitle : article.title}
        description={article.seo?.metaDesc ? article.seo?.metaDesc : null}
        openGraph={{
          title: article.seo?.metaTitle ? article.seo?.metaTitle : article.title,
          description: article.seo?.metaDesc ? article.seo?.metaDesc : null,
          images: article.seo?.shareGraphic?.asset[
            {
              url: article.seo?.shareGraphic?.asset.url ? article.seo?.shareGraphic?.asset.url : null,
              width: article.seo?.shareGraphic?.asset.metadata.dimensions.width ? article.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: article.seo?.shareGraphic?.asset.metadata.dimensions.height ? article.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden border-b border-black">
          <Container>
            <article className="relative">
              <div className="mb-[12vw]">
                <h1 className="text-[8.5vw] md:text-[6.5vw] xl:text-[6vw] leading-[0.89] uppercase italic w-full md:w-[93%]">{article.title}</h1>

                {article.authors?.length > 0 ? (
                  <span className={`block uppercase text-xs leading-none tracking-wider `}>Written By: {article.authors.map((e, i) => { return (<>{i > 0 && ', '}{e.name}</>)})}</span>
                ) : (
                  <MetaText text={`Written By: The Field Team`} className="" />
                )}

                {/* {article.author ? (
                  <MetaText text={`Written By: ${article.author.name}`} className="" />
                ) : (
                  <MetaText text={`Written By: The Field Team`} className="" />
                )} */}
              </div>
              
              <button onClick={executeScroll} className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-black flex items-center justify-center text-off-white group relative border-black border overflow-hidden opacity-0 lg:opacity-100">

                <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-white md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                <span className={`relative block overflow-hidden z-10 md:group-hover:text-black transition-colors ease-in-out duration-[450ms]`}>
                  <span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] ml-[3px] md:ml-[4px] xl:ml-[6px] rotate-90">
                    →
                  </span>
                </span>
              </button>
              
              <MetaText text={`Posted ${da} ${mo} ${ye}`} className="absolute bottom-0 left-0 lg:left-auto lg:right-0" />
            </article>
          </Container>
        </div>

        {/* <LocalImage src="/images/mission-test.jpg" alt="Mission Image" layout="responsive" width={2401} height={927} bordered /> */}

        <div className="bg-white relative" ref={contentArea}>
          <Container className="pt-[27vw] md:pt-[8vw]"/>

          <div className="w-full md:w-1/4 mb-8 md:mb-0 absolute top-0 left-0 px-8 md:px-10 lg:px-[52px] pt-[8vw] md:my-8">
            <span className="inline-block uppercase text-off-white text-xs leading-none tracking-wider bg-purple px-5 py-2 rounded-full mt-2">{article.category.name}</span>

            <span className="block text-sm lg:text-base xl:text-lg tracking-wide mb-2 lg:mb-4 mt-4 lg:mt-12">Share This Article</span>
                    
              <div className="flex flex-wrap md:block lg:flex">
                <a
                  href={`http://twitter.com/share?text=${article.title}&url=https://field.energy/views/${article.slug.current}
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow hover:bg-orange flex items-center justify-center mr-2 mb-2"
                >
                  <TwitterIcon className="w-[50%]" />
                </a>

                <a
                  href={`https://www.facebook.com/share.php?u=https://field.energy/views/${article.slug.current}&quote=${article.title}
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow hover:bg-orange flex items-center justify-center mr-2 mb-2"
                >
                  <FacebookIcon className="w-[50%]" />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://field.energy/views/${article.slug.current}&quote=${article.title}
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow hover:bg-orange flex items-center justify-center mr-2 mb-2"
                >
                  <LinkedinIcon className="w-[50%]" />
                </a>

                <button
                  onClick={() => {navigator.clipboard.writeText(`https://field.energy/views/${article.slug.current}`)}}
                  className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow hover:bg-orange flex items-center justify-center mr-2 mb-2"
                >
                  <LinkIcon className="w-[50%]" />
                </button>
              </div>
          </div>

          <BodyRenderer body={article.contentBlocks} />
        </div>

        {/* <div className="bg-white">
          <Container className="pb-[8vw]">
            <div className="md:px-[5vw]">
              <blockquote className="text-[8vw] md:text-[5.9vw] lg:text-[4.8vw] xl:text-[4.3vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-8 md:mb-10 lg:mb-12 w-[95%] lg:w-[90%]">“The energy in the room is always charged (pun intended) with fantastic ideas and a genuine enthusiasm to do great things together.”</blockquote>
              
              <MetaText text="Hana - Finance Manager" />
            </div>
          </Container>
        </div> */}

        {/* <div className="bg-white">
          <Container>
            <div className="flex flex-wrap pb-[8vw]">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
              </div>
              
              <div className="w-full md:w-3/4">
                <div className="w-11/12 md:w-2/3">
                  <h2 className="text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-5 md:mb-8 lg:mb-10">Section Heading.</h2>

                  <div className="content text-lg md:text-xl xl:text-2xl">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et. Nunc congue nisi vitae suscipit tellus mauris. Nisi quis eleifend quam adipiscing vitae. Maecenas ultricies mi eget mauris pharetra. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Sit amet venenatis urna cursus eget nunc scelerisque.</p>

                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Nunc congue nisi vitae suscipit tellus mauris.</li>
                      <li>Maecenas ultricies mi eget mauris pharetra. Quisque sagittis purus.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div> */}

        {/* <LocalImage src="/images/careers-in-page.jpg" alt="Careers Image" layout="responsive" width={2000} height={1222} bordered /> */}

        <div className="bg-white">
          {article.related.length > 0 && (
            <>
            <Container className="pb-[3.2vw] pt-[15.2vw] md:pt-[13.2vw] lg:pt-[10.2vw]">
              <span className="block text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-5 md:mb-8 lg:mb-10">Related Articles</span>
            </Container>

            <div className="border-t border-black">
              {article.related.map((e, i) => {
                return ( 
                  <Link href={`/views/${e.slug.current}`} key={i}>
                    <a className="block group relative">
                      <Container className="absolute inset-0" />
                      
                      <div className="md:flex items-center w-full border-b-black border-b group-hover:bg-yellow py-6 md:py-6 lg:py-6 px-8 md:px-10 lg:px-12">
                        <div className="flex-1 mb-6 md:mb-0">
                          <MetaText text={e.category.name} className="mb-3" />

                          <span className="block text-[5.5vw] md:text-[2.5vw] xl:text-[2vw] 2xl:text-[1.7vw] leading-[1.075] md:leading-[1.075] lg:leading-[1.075] xl:leading-[1.075] 2xl:leading-[1.075] w-11/12 lg:w-10/12">{e.title}</span>
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
            </>
          )}

          <div className={`${article.related.length == 0 && 'border-t border-black'}`}>
            <Container className="pt-8 pb-8 lg:pt-12 lg:pb-[10.5vw]">
              <Button href="/views" label="Back&nbsp;To&nbsp;Views" className="block md:inline-block text-xl text-center lg:text-2xl leading-snug lg:leading-snug" a11yText="Navigate to the Views page"  />
            </Container>
          </div>
        </div>
  
      </main>
    
      <Footer noCta contact={contact} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('views')
  return {
    paths: paths,
    fallback: false,
  };
}