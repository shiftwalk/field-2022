import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import LocalImage from '@/components/local-image'
import Button from '@/components/button'
import MetaText from '@/components/meta-text'
import { CarouselQuotes } from '@/components/carousel-quotes'

const valuesData = [
  {
    heading: "Know Your Stuff",
    text: "Everyone here is an expert in their field. We know our stuff. We're curious and pride ourselves on always learning, adapting and improving. There are no stupid questions here.",
  },
  {
    heading: "Do It Right",
    text: "We think things through and make sure everything we do is sustainable and high quality. We always put safety above profit. We are intentional and act with integrity at all times.",
  },
  {
    heading: "Move Fast",
    text: "We work at pace and with a sense of controlled urgency. We're finishers. Doers. Pragmatists. We take responsibility, rolling up our sleeves to get things done.",
  },
  {
    heading: "Work For The Team",
    text: "We are friendly and approachable. We make time for one another, we lean on each other. We share openly - the good and the bad. We don’t hide our mistakes, we learn from them.",
  }
]

const benefitsData = [
  {
    heading: "Flexible & Remote Working",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    heading: "Learning & Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    heading: "Meaningful Equity",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    heading: "Green Leave",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    heading: "Regular Socials",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    heading: "Celebrations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
]

export default function Careers() {
  return (
    <Layout>
      <NextSeo title="Careers" />
      
      <main>
        <div className="pt-[75px] lg:pt-[94px] relative overflow-hidden">
          <Container>
            <article>
              <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[75%] break-hyphens mb-[20vw] md:mb-[16vw] lg:mb-[12vw]">Careers At Field</h1>

              <div className="w-full lg:w-[50%] max-w-[880px]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-5 md:mb-8 leading-snug lg:leading-snug xl:leading-snug">Want to be part of a team determined to make the renewable transition happen? Read on to find out what it’s like working at Field and see our current job openings.</p>

                <Button href="#" className="inline-block text-lg lg:text-xl xl:text-2xl" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
              </div>
            </article>
          </Container>
        </div>

        <div className="border-y border-y-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto border-b border-black lg:border-b-0 lg:border-r">
                <div className="relative overflow-hidden h-full">
                  <LocalImage src="/images/careers.jpg" alt="Careers Image" layout="fill" className="absolute inset-0 w-full h-full aspect-[10/11]" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-yellow flex flex-wrap items-center px-5 py-6 md:pt-6 md:pb-6 md:px-6">
                <div className="w-full mb-auto pb-[7vw] 2xl:pb-[12vw]">
                  <MetaText text="Working at Field" />
                </div>

                <div className="w-full">
                  <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[85%] xl:max-w-[78%] mb-6 md:mb-8 pb-0">We're a team of experts in our fields, rolling up our sleeves to make an impact in the transition to net zero. Whether you're a regular at our London HQ, part of our country-wide remote crew or growing our international teams, you're a part of Field.</p>
                  
                  <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[85%] xl:max-w-[78%] mb-6 md:mb-8 pb-0">We pride ourselves on an inclusive, engaging and equitable culture for all team members. We stay constantly aligned on business objectives and driving forward, and have regular learning and team building opportunities. As a fast-moving bunch, we make sure to create lots of space to share and connect regularly.</p>
                  
                  <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[85%] xl:max-w-[78%] mb-0 pb-0">Each week starts with a company-wide All Hands, with a weekly team lunch and a teach-in session led by one of our team's industry experts. We also hold regular socials, bi-annual offsites and quarterly OKR reviews.</p>
                </div>

                <div className="w-full mt-auto pt-[7vw] 2xl:pt-[12vw]">
                  <Button href="#" className="inline-block text-lg lg:text-xl xl:text-2xl mb-0 pb-0" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container noPad className="relative z-10">
          <span className="block uppercase text-current text-xs leading-none tracking-wider border-b border-black pt-8 md:pt-10 pb-[10vw] px-5 md:px-6 lg:px-8">Our Values</span>

          <ul>
            {valuesData.map((e, i) => {
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

            <li className="p-5 md:p-6 lg:p-8 pb-[10vw] md:pb-[8vw] lg:pb-[6vw]">
              <Button href="#" className="inline-block text-lg lg:text-xl xl:text-2xl mb-0 pb-0" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
            </li>
          </ul>
        </Container>

        <div className="bg-white border-t border-black">
          <Container>
            <div className="pt-5 pb-[12vw]">
              <MetaText text="Company Benefits" className="mb-[13vw]" />
              
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 xl:gap-x-6 2xl:gap-x-8 gap-y-[10vw]">
                {benefitsData.map((e, i) => {
                  return ( 
                    <li className="col-span-1" key={i}>
                      <MetaText text={`#${i + 1}`} className="mb-3 md:mb-5" />
                      <h2 className="text-[6vw] md:text-[3.9vw] lg:text-[2.7vw] leading-none md:leading-none lg:leading-none max-w-[70%] 2xl:max-w-[68%]">{e.heading}</h2>
                      <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] md:max-w-[85%] 2xl:max-w-[80%] mb-0 pb-0">{e.text}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Container>
        </div>

        <LocalImage src="/images/careers-in-page.jpg" alt="Careers Image" layout="responsive" width={2000} height={1222} bordered />

        <Container>
          <div className="max-w-[96%] py-[13.5vw]">
            <h2 className="text-[5.5vw] md:text-[3.65vw] leading-[1.125] md:leading-none mb-8 lg:mb-12">You can take a look at our current live positions below. We're always up for speaking to great people who are determined to make the renewable transition happen - if you don't see a role that suits you, say hello careers@field.energy, or sign up here to be notified when we add new roles.</h2>

            <Button href="#" className="inline-block text-lg lg:text-xl xl:text-2xl" label="See&nbsp;Opportunities" a11yText={"Navigate to the career opportunities page" } />
          </div>
        </Container>
        
        <div className="border-t border-black">
          <Container noPad>
            <CarouselQuotes />
          </Container>
        </div>
      </main>
    
      <Footer noCta />
    </Layout>
  )
}
