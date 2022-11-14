import dynamic from 'next/dynamic'
import Link from 'next/link'
import ConditionalWrap from 'conditional-wrap'

const LetterRoll = dynamic(() => import('@/components/letter-roll'), {
  ssr: false,
})

export default function Button( {href, a11yText, label, className, outline, internal = true} ) {
  return (
    <ConditionalWrap
      condition={!!internal}
      wrap={children => (
        <Link href={href} className="bg-red-400">
          {children}
        </Link>
      )}
    >
      <a
        {...(!internal ? {rel: 'noopener noreferer', target: 'blank', href: href} : {})}
        aria-label={a11yText}
        className={`${className} group relative px-6 md:px-8 lg:px-10 pt-3 md:pt-4 pb-2 md:pb-3 border border-black rounded-full overflow-hidden ${outline ? '' : 'bg-black text-white' }`}
      >
        <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-black md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>
        <span className="relative block overflow-hidden z-10">
          <LetterRoll text={label} color />
        </span>
      </a>
    </ConditionalWrap>
  )
}