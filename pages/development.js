import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import MetaText from '@/components/meta-text'
import Button from '@/components/button'
import LocalImage from '@/components/local-image'
import AccordionItem from '@/components/accordion-item'
import { useState } from 'react'

export default function Development() {
  const [currentFor, setCurrentFor] = useState('Landowners')

  const setCurrent = (e) => {
    setCurrentFor(e)
  }

  // LANDOWNERS
  const landownersData = [{
    heading: "We're fully integrated",
    text: "Field develops, owns and operates battery storage projects across the UK and Europe. We don’t ‘flip’ projects like some developers. This means you work with us from initial hello through to the operation of the project through its life.",
  },{
    heading: "Space Requirements",
    text: "Batteries only occupy a small land area compared with other renewable technologies- we work hard to ensure we have the most optimised layout for you. This means we can fit more batteries into equivalent space required by other developers in the market. This means less wasted space, and more energy dense sites.",
  },{
    heading: "Diversification",
    text: "Batteries are the perfect bolt on to your current activities and earnings. Batteries can provide an excellent way of diversifying your land by adding an index-linked income stream that is not linked to agriculture and requires little to no management. This provides an element of security to ensure the long-term sustainable operation of the wider farm or landholdings.",
  },{
    heading: "All costs covered",
    text: "Field cover all development and construction costs, and reasonable third-party costs (e.g. legal and agent fees). All we ask from you is that you meet with us regularly during development. We’ll construct and operate the project and return it to its original state (or better) at the end of the project.",
  },{
    heading: "Up-front payments",
    text: "Upon agreeing an Option for Lease (or Purchase), Field will pay an exclusivity and typically an Option fee.",
  },{
    heading: "Annual rental or one-off purchase",
    text: "We offer competitive rental terms which provide a long-term, inflation-linked income with regular payments to benefit your cashflow, negotiable to suit your business needs. Or, if you prefer, we can buy the freehold.",
  }]

  const landownersFaqsData = [{
    heading: "Is my land suitable?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "How much can I earn?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "Why is Field different from other developers?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "How long will I be required to lease my land for and can I sell my land?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "As a landowner, what risks do I face?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "What happens at the end of the lease?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "Is planning required and will I be responsible for this?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "Is permission required to connect to the electricity grid network?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  }]

  // DEVELOPERS
  const developersData = [{
    heading: "Sustainability at scale"
  },{
    heading: "Long or short-term partnerships",
    text: "We’re looking to work with developers on projects at any stage of development - from only having initial landowners engaged, to projects at ready-to-build stage. We’d happily engage on a single project or on a joint development basis.",
  },{
    heading: "A dedicated in-house team of specilaists",
    text: "We have an in-house technical team of specialists who can assist with grid, land legals and planning permissions. Our in-house analysis team also allows us to accurately value projects very quickly. We have a track record of ensuring fair, fast, and unbureaucratic transactions and also final project delivery.",
  }]

  const developersFaqsData = []

  // LANDOWNERS
  const localData = [{
    heading: "Sustainability at scale",
    text: "Field Energy is a leading developer, owner and operator of grid-scale battery projects across the UK and Europe. We’re rapidly expanding and have already launched offices in Italy and Germany.",
  },{
    heading: "Long or short-term partnerships",
    text: "We’re looking to work with developers on projects at any stage of development - from only having initial landowners engaged, to projects at ready-to-build stage. We’d happily engage on a single project or on a joint development basis.",
  },{
    heading: "A dedicated in-house team of specilaists",
    text: "We have an in-house technical team of specialists who can assist with grid, land legals and planning permissions. Our in-house analysis team also allows us to accurately value projects very quickly. We have a track record of ensuring fair, fast, and unbureaucratic transactions and also final project delivery.",
  }]

  const localFaqsData = [{
    heading: "Will there be fencing around the site?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "What about the wildlife which use the area?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "Will any trees or hedgerows be removed?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "How much noise will there be?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "Will the development cause flooding?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "Will there be traffic disruption to local residents?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },{
    heading: "What onsite provisions will there be to tackle and control fires or explosions?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  }]

  return (
    <Layout>
      <NextSeo title="Development" />
      
      <main>
        <div className="h-[75vh] flex flex-col pt-[75px] lg:pt-[94px] relative overflow-hidden border-b border-black bg-gradient-to-br from-orange via-yellow to-purple">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center hidden lg:block">

            {/* Grain overlay */}
            <div className="grain absolute inset-0 w-full h-full z-10 hidden lg:block"></div>
          
            {/* Left blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
              <div className="absolute inset-0 origin-left">
                <div className="absolute top-0 left-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[-57vw] translate-y-[-32%] blur-xl overflow-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-t from-white/80 via-white/50 rotate-[90deg] z-[2]"></div>
                  <div className="absolute bottom-[-15%] left-[23%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange via-orange rotate-[-35deg]"></div>
                </div>
              </div>
            </MouseParallax>

            {/* Right blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
              <div className="absolute inset-0 origin-right">
                <div className="absolute top-0 right-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[42vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-hidden">
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-45%] mr-[-10%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-white via-white/60 rotate-[0deg]"></div>
                  <div className="absolute bottom-0 left-[-40%] right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-orange via-orange/60 rotate-[80deg]"></div>
                </div>
              </div>
            </MouseParallax>
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              <h1 className="text-[15vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[80%] mb-auto break-hyphens">Develo&shy;pment</h1>
              <div className="w-full lg:max-w-[55%]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-2 md:mb-8">We're continuing to grow our pipeline of battery storage projects across Europe. If you're a landowner, developer or member of a local community interested in developing battery storage, read on to find out more about working together.</p>
              </div>
            </article>
          </Container>
        </div>
    
        <div className="border-b border-black">
          <Container>
            <div className="max-w-[100%] md:max-w-[90%] lg:max-w-[90%] pt-[10vw] pb-12">
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none pb-[6.5vw]">Field has an extensive development pipeline of renewable battery storage projects located across both brownfield and greenfield locations. We're responsible for all stages of project development, from initiation and landowner engagement through to concept design, planning, and construction - with an experienced team bringing strong project management and project delivery expertise across the renewable energy project lifecycle.</h2>

              <MetaText text="Find Out More:" className="mb-5 md:mb-6" />

              <div className="content max-w-[80%] lg:max-w-none">
                <p>Select an option below to learn more about working with us.</p>
              </div>

              <div className="lg:flex lg:space-x-3 max-w-[80%] lg:max-w-none">
                <button onClick={()=> setCurrent('Landowners')} className={`group block lg:inline-block w-full relative overflow-hidden lg:w-auto text-xl xl:text-2xl leading-none lg:leading-none mt-6 lg:mt-8 px-6 md:px-8 lg:px-10 pt-4 md:pt-4 pb-4 md:pb-4 border border-black rounded-full ${currentFor == 'Landowners' ? 'bg-black text-white' : '' }`}>
                  <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                  <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
                    For Landowners
                  </span>
                </button>
                <button onClick={()=> setCurrent('Developers')} className={`group block lg:inline-block w-full relative overflow-hidden lg:w-auto text-xl xl:text-2xl leading-none lg:leading-none mt-4 lg:mt-8 px-6 md:px-8 lg:px-10 pt-4 md:pt-4 pb-4 md:pb-4 border border-black rounded-full ${currentFor == 'Developers' ? 'bg-black text-white' : '' }`}>
                  <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                  <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
                    For Developers
                  </span>
                </button>
                <button onClick={()=> setCurrent('Local')} className={`group block lg:inline-block w-full relative overflow-hidden lg:w-auto text-xl xl:text-2xl leading-none lg:leading-none mt-4 lg:mt-8 px-6 md:px-8 lg:px-10 pt-4 md:pt-4 pb-4 md:pb-4 border border-black rounded-full ${currentFor == 'Local' ? 'bg-black text-white' : '' }`}>
                  <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

                  <span className={`relative block overflow-hidden z-10 md:group-hover:text-white transition-colors ease-in-out duration-[450ms]`}>
                    For Local Communities
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* LANDOWNERS */}
        <div className="border-b border-black">
          { currentFor == 'Landowners' && (
            <>
              <Container>
                <MetaText text="Why Work With Us" className="pt-6 lg:pt-12 mb-4 lg:mb-6" />

                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mb-[12vw] lg:mb-[7vw]`}>
                  {landownersData.map((e, i) => {
                    return (
                      <div className="col-span-1 flex flex-wrap" key={i}>
                        <div className="bg-white border border-black p-5 aspect-square flex flex-wrap w-full">
                          <div className="w-full mb-auto">
                            <h2 className="text-[7.65vw] lg:text-[4.2vw] xl:text-[2.8vw] leading-[1.025] lg:leading-[1.025] xl:leading-[1.025] block w-[90%]">{e.heading}</h2>
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
                <MetaText text="Frequently Asked Questions" className="pt-6 lg:pt-12 mb-2 lg:mb-4" />
              </Container>
              
              <Container noPad>
                <div className="border-t border-black">
                  {landownersFaqsData.map((e, i) => {
                    return (
                      <AccordionItem question={e.heading} answer={e.text} key={i} />
                    )
                  })}
                </div>
              </Container>
            </>
          )}

          { currentFor == 'Developers' && (
            <>
              <Container>
                <MetaText text="Why Work With Us" className="pt-6 lg:pt-12 mb-4 lg:mb-6" />

                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mb-[12vw] lg:mb-[7vw]`}>
                  {developersData.map((e, i) => {
                    return (
                      <div className="col-span-1 flex flex-wrap" key={i}>
                        <div className="bg-white border border-black p-5 aspect-square flex flex-wrap w-full">
                          <div className="w-full mb-auto">
                            <h2 className="text-[7.65vw] lg:text-[4.2vw] xl:text-[2.8vw] leading-[1.025] lg:leading-[1.025] xl:leading-[1.025] block w-[90%]">{e.heading}</h2>
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
                {developersFaqsData.length > 0 && (
                  <MetaText text="Frequently Asked Questions" className="pt-6 lg:pt-12 mb-2 lg:mb-4" />
                )}
              </Container>
            
              {developersFaqsData.length > 0 && (
                <Container noPad>
                  <div className="border-t border-black">
                    {developersFaqsData.map((e, i) => {
                      return (
                        <AccordionItem question={e.heading} answer={e.text} key={i} />
                      )
                    })}
                  </div>
                </Container>
              )}
            </>
          )}

          { currentFor == 'Local' && (
            <>
              <Container>
                <MetaText text="Why Work With Us" className="pt-6 lg:pt-12 mb-4 lg:mb-6" />

                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mb-[12vw] lg:mb-[7vw]`}>
                  {localData.map((e, i) => {
                    return (
                      <div className="col-span-1 flex flex-wrap" key={i}>
                        <div className="bg-white border border-black p-5 aspect-square flex flex-wrap w-full">
                          <div className="w-full mb-auto">
                            <h2 className="text-[7.65vw] lg:text-[4.2vw] xl:text-[2.8vw] leading-[1.025] lg:leading-[1.025] xl:leading-[1.025] block w-[90%]">{e.heading}</h2>
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
                {localFaqsData.length > 0 && (
                  <MetaText text="Frequently Asked Questions" className="pt-6 lg:pt-12 mb-2 lg:mb-4" />
                )}
              </Container>
            
              {localFaqsData.length > 0 && (
                <Container noPad>
                  <div className="border-t border-black">
                    {localFaqsData.map((e, i) => {
                      return (
                        <AccordionItem question={e.heading} answer={e.text} key={i} />
                      )
                    })}
                  </div>
                </Container>
              )}
            </>
          )}

          <Container className="pb-[5vw]"></Container>

          <div className="border-t border-t-black">
            <Container noPad>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 aspect-square lg:aspect-square border-b border-black lg:border-b-0 lg:border-r">
                  <div className="relative overflow-hidden h-full">
                    <LocalImage src="/images/mission-test-2.jpg" alt="Careers Image" layout="fill" className="absolute inset-0 w-full h-full aspect-[10/11]" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-yellow flex flex-wrap items-center px-5 py-6 md:pt-6 md:pb-6 md:px-6">
                  <div className="w-full mb-auto pb-[7vw] 2xl:pb-[12vw]">
                    <h2 className="text-[7.65vw] lg:text-[4.2vw] xl:text-[2.8vw] leading-[1.01] lg:leading-[1.01] xl:leading-[1.01] block w-[80%]">You’ll have a fantastic team working hard on your project</h2>
                  </div>

                  <div className="w-full mt-auto">
                    <p className="text-lg md:text-xl lg:text-2xl leading-tight md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[85%] xl:max-w-[78%] mb-6 md:mb-8 pb-0">The Field development team have delivered some of the UK’s leading renewable energy projects across a range of technologies including anaerobic digestion, biomass, wind, solar, energy from waste and gas peaking plants. We have a team of expert grid specialists to ensure we get the right connection in the right place. Your project couldn’t be in better hands.</p>

                    <Button href="/contact" className="inline-block text-lg lg:text-xl xl:text-2xl" label="Get&nbsp;In&nbsp;Touch" a11yText={"Navigate to the contact page" } />
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
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none">If you’re a landowner, developer or member of a local community in the UK or abroad with questions for us, we’d love to hear them.</h2>

              <Button outline href="/contact" label="Get&nbsp;In&nbsp;Touch" a11yText={"Navigate to the contact page"} className="inline-block text-xl xl:text-2xl leading-none lg:leading-none mt-8 mb-[13.5vw]" />
            </div>
          </Container>
        </div>
      </main>
    
      <Footer noCta />
    </Layout>
  )
}
