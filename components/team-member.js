import LogoMarkIcon from '@/icons/logomark.svg'
import LocalImage from './local-image'
import MetaText from './meta-text'

export default function TeamMember({ name }) {
  return (
    <button className="block border-none p-0 m-0 outline-none text-left w-full group relative" aria-label={`View ${name}'s Biography`}>
      <div className="aspect-[10/13.5] bg-blue/50 mb-3 md:mb-5 flex items-center justify-center relative">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-orange via-orange to-yellow z-10 mix-blend-multiply">

        </div>

        <div className="absolute inset-0">
          <LocalImage src="/images/team-member-2.jpg" layout="fill" alt={`Photo of ${name}`} className="w-full absolute inset-0" />
        </div>

        <LogoMarkIcon className="w-[40%] opacity-10" />
        
        <div className="absolute bottom-0 left-0 right-0 w-full p-4 md:opacity-0 group-hover:opacity-100 z-20">
          <span className={`block relative px-10 pt-3 md:pt-4 pb-3 md:pb-4 border border-white text-white rounded-full overflow-hidden`}>
            <span className="relative block overflow-hidden z-10 text-center text-lg md:text-xl lg:text-2xl">
              Read Bio
            </span>
          </span>
        </div>
      </div>

      <MetaText text="Role" className="mb-1" />

      <span className="block text-[4.7vw] md:text-[3.2vw] lg:text-[2.75vw] xl:text-[2.4vw] 2xl:text-[1.8vw] leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none">{name}</span>
    </button>
  )
}