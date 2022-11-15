import Link from 'next/link'
import ConditionalWrap from 'conditional-wrap'

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
        className={`${className} group relative px-6 md:px-8 lg:px-10 pt-3 md:pt-4 pb-[15px] md:pb-[18px] border border-black rounded-full overflow-hidden ${outline ? '' : 'bg-black text-white' }`}
      >
        <span className={`absolute w-0 left-0 right-0 bottom-0 h-full ${outline ? 'bg-black' : 'bg-white' } md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

        <span className={`relative block overflow-hidden z-10 ${outline ? 'md:group-hover:text-white' : 'md:group-hover:text-black' }  transition-colors ease-in-out duration-[450ms]`}>
          {label}
        </span>
      </a>
    </ConditionalWrap>
  )
}