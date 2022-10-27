import { blurScaleLoaderLeft, blurScaleLoaderRight, blurLoaderBg, blurLoaderBgGrain, revealInLogo, revealInLogoMove } from '@/helpers/transitions'
import { m } from 'framer-motion'
import LogoIcon from '@/icons/logo.svg'

export default function Loader() {
  return (
    <m.div
      initial="initial"
      animate="enter"
      exit="exit"
      className=""
    >      
      <div className="fixed inset-0 z-[1000000] pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-transparent">
          <div className="absolute inset-0 w-full h-full text-black flex items-center justify-center pointer-events-none z-[110]">
            <div className="overflow-hidden">
              <m.div variants={revealInLogoMove}>
                <LogoIcon width="w-32 md:w-48" />
              </m.div>
            </div>
          </div>

          <m.div variants={blurLoaderBgGrain} className="absolute inset-0">
            <div className="grain absolute inset-0 w-full h-full z-[10000000]"></div>
          </m.div>

          <m.div variants={blurLoaderBg} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#C99C97] to-[#D9D5D0]"></div>
          </m.div>
          
          <m.div variants={blurScaleLoaderRight} className="absolute inset-0 origin-right">
            <div className="absolute top-0 right-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[48vw] translate-y-[-32%] blur-xl overflow-x-hidden flex items-start justify-start scale-[1.15]">
              <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
              <div className="absolute bottom-0 right-[20%] w-[50%] h-[40%] rounded-full bg-gradient-to-t from-purple via-purple/50 rotate-[-50deg] z-[2]"></div>
              <div className="absolute bottom-[-10%] left-[-10%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange rotate-[25deg]"></div>

              <div className="absolute bottom-[-10%] left-[24%] right-0 w-[25%] h-[45%] bg-gradient-to-t from-yellow to-yellow z-1 rounded-xl opacity-25 rotate-[-13deg]"></div>

              <div className="absolute bottom-[-25%] left-[-10%] right-0 w-[70%] h-[45%] bg-gradient-to-t from-purple rotate-[25deg] z-1"></div>
            </div>
          </m.div>

          <m.div variants={blurScaleLoaderLeft} className="absolute inset-0 origin-left">
            <div className="absolute top-0 left-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[-50vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-y-hidden origin-center">
              <div className="w-[80%] h-[50%] rounded-full radial mt-[-20%] mr-[-20%]"></div>
              <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-purple via-purple/70 rotate-[20deg]"></div>
            </div>
          </m.div>
        </div>
      </div>
    </m.div>
  )
}