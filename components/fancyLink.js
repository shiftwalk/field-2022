import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className, active, noDot, rightDot, views } ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${className} group relative ${noDot && 'hover:underline'} ${(active && !views) && 'pointer-events-none'}`} aria-disabled={active && !views}>
        {label}

        { !noDot && (
          <>
          { !rightDot ? (
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
          ) : (
            <span className="hidden md:flex absolute top-0 right-0 items-center justify-center pointer-events-none">
              <span className="block w-[7px] h-[7px] rounded-full bg-black translate-x-[16px] xl:translate-x-[19px] translate-y-[9px] xl:translate-y-[11px] scale-0 group-hover:scale-100"></span>
            </span>
          )}
        </>
        )} 
      </a>
    </Link>
  )
}