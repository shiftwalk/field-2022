import dynamic from 'next/dynamic'
import Link from 'next/link'
const LetterRoll = dynamic(() => import('@/components/letter-roll'), {
  ssr: false,
})

export default function FancyLink( {destination, a11yText, label, className, active} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${className} group relative ${active && 'pointer-events-none'}`} aria-disabled={active}>
        <span className="relative block overflow-hidden">
          <LetterRoll text={label} active={active} />
        </span>
        
        {active ? (
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="block w-[7px] h-[7px] rounded-full bg-black translate-y-[14px] xl:translate-y-[17px]"></span>
          </span>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="block w-[7px] h-[7px] rounded-full bg-black translate-y-[14px] xl:translate-y-[17px] transition-translate ease-in-out duration-300 scale-0 group-hover:scale-100 group-hover:delay-[100ms]"></span>
          </span>
        )}
      </a>
    </Link>
  )
}