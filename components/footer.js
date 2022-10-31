import Container from '@/components/container'
import LogoMarkIcon from '@/icons/logomark.svg'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import Button from './button'

export default function Footer() {
  return (
    <footer className="border-t border-black bg-off-white">

      <div className="bg-orange h-[75vw] md:h-[58vw] lg:h-[52vw] 2xl:h-[48vw] border-b border-black relative overflow-hidden">

        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center z-20">

          <div className="absolute inset-x-5 inset-y-0 z-[50] overflow-hidden border-x border-black">
            {/* Grain overlay */}
            <div className="grain absolute inset-0 w-full h-full z-10"></div>
            
            <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.18} zIndex={10}>
              <div className="absolute inset-0 whitespace-nowrap translate-y-[-45%] translate-x-[-2.4%]">
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
                <span className="block text-[22.55vw] uppercase italic leading-[0.84]">Net Zero</span>
              </div>
            </ScrollParallax>

            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center z-0">
              {/* Right blob */}
              <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1} zIndex={1}>
                <div className="absolute inset-0 origin-right z-1">
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
          </div>

          {/* Right blob */}
          <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1} zIndex={20}>
            <div className="absolute inset-0 origin-right z-1">
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
      </div>
      <Container className="py-0 my-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 mb-10 pt-[15vw] md:pt-[10vw]">
            <LogoMarkIcon className="w-[70px] md:w-[8vw] xl:w-[100px] mb-8" />

            <span className="text-[clamp(36px,_3.6vw,_50px)] leading-[0.9] block max-w-[85%] md:max-w-[50%] lg:max-w-[55%] xl:max-w-[450px] mb-8">Renewable energy infrastructure to get to net zero</span>

            <div className="flex items-center space-x-3">
              <span className="block w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow"></span>
              <span className="block w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow"></span>
            </div>
          </div>

          <div className="w-full lg:w-1/3 lg:border-l border-black mb-8 lg:mb-0 flex flex-wrap items-center justify-center">
            <nav className="block w-full lg:w-[75%] 2xl:w-[60%] 3xl:w-[50%]">
              <ul>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Home</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Mission</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Projects</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Team</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Careers</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Views</li>
                <li className="block">
                  <Button outline href="/contact" label="Contact&nbsp;Us" a11yText={"Navigate to the contact page"} className="inline-block text-xl lg:text-2xl leading-none lg:leading-none mt-8" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      
        <div className="border-t border-black">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full md:flex-1 mb-6 md:mb-0">
              <span className="block text-base leading-tight">Copyright 2022, Virmati Energy Ltd T/A Field (CN: 13095982)</span>
            </div>
            <div className="w-full md:flex-1 md:ml-auto flex md:justify-end items-center space-x-6">
              <span className="block text-base leading-tight">Terms &amp; Conditions</span>
              <span className="block text-base leading-tight">Privacy Policy</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}