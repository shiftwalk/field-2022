import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className, active, noDot} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${className} group relative ${active && 'pointer-events-none'}`} aria-disabled={active}>
        {label}
        
        { !noDot && (
          <>
            {active ? (
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="block w-[7px] h-[7px] rounded-full bg-black translate-y-[16px] xl:translate-y-[19px]"></span>
              </span>
            ) : (
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="block w-[7px] h-[7px] rounded-full bg-black translate-y-[16px] xl:translate-y-[19px] scale-0 group-hover:scale-100"></span>
              </span>
            )}
          </>
        )}
      </a>
    </Link>
  )
}