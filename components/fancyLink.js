import { SplitText } from '@cyriacbr/react-split-text'
import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${className} group`}>
        <span className="relative block overflow-hidden">
          <SplitText
            LetterWrapper={({ letterIndex, children }) => (
              <span className="relative inline-block overflow-hidden">
                <span className={`block transition-translate ease-in-out duration-300 translate-y-0 group-hover:translate-y-[-100%]`} style={{ transitionDelay: `${letterIndex * 10}ms` }}>
                  {children}
                </span>
                <span className={`absolute top-0 left-0 w-full transition-translate ease-in-out duration-300 translate-y-full group-hover:translate-y-0`} style={{ transitionDelay: `${letterIndex * 10}ms` }}>
                  {children}
                </span>
              </span>
            )}
          >
            {label}
          </SplitText>
        </span>
      </a>
    </Link>
  )
}