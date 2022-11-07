import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image'
import MetaText from '@/components/meta-text'
import Link from 'next/link'
import Button from '@/components/button'

const relatedData = [{
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

export default function ViewsSlug() {
  return (
    <Layout>
      <NextSeo title="Views" />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden border-b border-black">
          <Container>
            <article className="relative">
              <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[93%] break-hyphens mb-[12vw]">Article&shy;Headline over Mutliple Lines</h1>

              <button className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] bg-black flex items-center justify-center text-off-white "><span className="block leading-none md:leading-none xl:leading-none text-[30px] md:text-[35px] xl:text-[50px] ml-[3px] md:ml-[4px] xl:ml-[6px] rotate-90">→</span></button>
              
              <MetaText text="Posted 16 March 2022" className="absolute bottom-0 right-0" />
            </article>
          </Container>
        </div>

        {/* <LocalImage src="/images/mission-test.jpg" alt="Mission Image" layout="responsive" width={2401} height={927} bordered /> */}

        <div className="bg-white">
          <Container>
            <div className="flex flex-wrap pt-[8vw] pb-[8vw]">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <span className="inline-block uppercase text-off-white text-xs leading-none tracking-wider bg-purple px-5 py-2 rounded-full mt-2">Industry Update</span>
              </div>
              <div className="w-full md:w-3/4">
                <div className="w-11/12 md:w-2/3">
                  <h2 className="text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-12">Section Heading.</h2>

                  <div className="content text-lg md:text-xl xl:text-2xl">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et. Nunc congue nisi vitae suscipit tellus mauris. Nisi quis eleifend quam adipiscing vitae. Maecenas ultricies mi eget mauris pharetra. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Sit amet venenatis urna cursus eget nunc scelerisque. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Netus et malesuada fames ac turpis. Imperdiet massa tincidunt nunc pulvinar. Est sit amet facilisis magna etiam. Fames ac turpis egestas integer eget aliquet nibh praesent.Mi sit amet mauris commodo quis. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Non tellus orci ac auctor augue mauris augue. Mattis aliquam faucibus purus in massa tempor nec.</p>
                    
                    <p>Imperdiet sed euismod nisi porta lorem. Nascetur ridiculus mus mauris vitae ultricies leo integer. At lectus urna duis convallis convallis. Sit amet justo donec enim. Tempus quam pellentesque nec nam aliquam. Malesuada fames ac turpis egestas sed tempus urna. At tellus at urna condimentum mattis pellentesque id nibh. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Neque sodales ut etiam sit amet nisl purus in. A cras semper auctor neque vitae tempus quam. Lectus proin nibh nisl condimentum id venenatis a condimentum. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="bg-white">
          <Container className="pb-[8vw]">
            <div className="px-[5vw]">
              <blockquote className="text-[8vw] md:text-[6.5vw] lg:text-[5vw] leading-none md:leading-none lg:leading-none mb-8 md:mb-10 lg:mb-12 w-[90%] lg:w-[90%]">“The energy in the room is always charged (pun intended) with fantastic ideas and a genuine enthusiasm to do great things together.”</blockquote>
              
              <MetaText text="Hana - Finance Manager" />
            </div>
          </Container>
        </div>

        <div className="bg-white">
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
        </div>

        <LocalImage src="/images/careers-in-page.jpg" alt="Careers Image" layout="responsive" width={2000} height={1222} bordered />

        <div className="bg-white">
          <Container className="pb-[8vw]">
            <span className="block text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] leading-none md:leading-none lg:leading-none xl:leading-none mb-5 md:mb-8 lg:mb-10">Related Articles</span>
          </Container>

          <div className="border-t border-black">
            {relatedData.map((e, i) => {
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
        </div>
  
      </main>
    
      <Footer />
    </Layout>
  )
}
