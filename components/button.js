import dynamic from 'next/dynamic'
import Link from 'next/link'
const LetterRoll = dynamic(() => import('@/components/letter-roll'), {
  ssr: false,
})

export default function Button( {href, a11yText, label, className, outline} ) {
  return (
    <Link href={href}>
      <a aria-label={a11yText} className={`${className} group relative px-10 pt-3 md:pt-4 pb-2 md:pb-3 border border-black rounded-full overflow-hidden ${outline ? '' : 'bg-black text-white' }`}>
        <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>
        <span className="relative block overflow-hidden z-10">
          <LetterRoll text={label} color />
        </span>
      </a>
    </Link>
  )
}