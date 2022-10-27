import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import dynamic from 'next/dynamic'
const LineRoll = dynamic(() => import('@/components/line-roll'), {
  ssr: false,
})

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main>
            <m.div variants={fade} className="h-screen flex flex-col pt-[75px] lg:pt-[94px] border-b border-black">
              {/* Background gradient */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden">

                {/* Grain overlay */}
                <div className="grain absolute inset-0 w-full h-full z-10"></div>

                {/* Right blob */}
                <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
                  <div className="absolute top-0 right-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[48vw] translate-y-[-32%] blur-xl overflow-x-hidden flex items-start justify-start scale-[1.15]">
                    <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                    <div className="absolute bottom-0 right-[20%] w-[50%] h-[40%] rounded-full bg-gradient-to-t from-purple via-purple/50 rotate-[-50deg] z-[2]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange rotate-[25deg]"></div>

                    <div className="absolute bottom-[-10%] left-[24%] right-0 w-[25%] h-[45%] bg-gradient-to-t from-yellow to-yellow z-1 rounded-xl opacity-25 rotate-[-13deg]"></div>

                    <div className="absolute bottom-[-25%] left-[-10%] right-0 w-[70%] h-[45%] bg-gradient-to-t from-purple rotate-[25deg] z-1"></div>
                  </div>
                </MouseParallax>

                {/* Left blob */}
                <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
                  <div className="absolute top-0 left-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[-50vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-y-hidden">
                    <div className="w-[80%] h-[50%] rounded-full radial mt-[-20%] mr-[-20%]"></div>
                    <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-purple via-purple/70 rotate-[20deg]"></div>
                  </div>
                </MouseParallax>
              </div>

              <Container className="h-full flex flex-col relative z-10">
                <article className="h-full flex flex-col">
                  <h1 className="text-[10.2vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[80%] mb-auto">
                    <LineRoll text="Energy Infrastructure For Net Zero" />
                  </h1>

                  <div className="w-full lg:max-w-[55%]">
                    <p className="text-lg lg:text-xl xl:text-2xl mb-8">
                      <LineRoll text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
                    </p>

                    <a href="#" className="bg-black inline-block text-white rounded-full px-10 py-4 text-lg lg:text-xl xl:text-2xl">The Mission</a>
                  </div>
                </article>
              </Container>
            </m.div>
            <m.div variants={fade} className="">
              <Container>
                <div className="md:max-w-[65%] content">
                <h2>Some Text</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                <h2>Some Text</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                <h2>Some Text</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                <h2>Some Text</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </Container>
            </m.div>
          </main>
        
          <m.div variants={fade}>
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
