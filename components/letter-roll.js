import { SplitText } from '@cyriacbr/react-split-text'

export default function LetterRoll( {text, active, color} ) {
  return (
    <SplitText
      LetterWrapper={({ letterIndex, children }) => (
        <span className="relative inline-block overflow-hidden">
          <span className={`block transition-translate ease-in-out duration-300 translate-y-0 ${ !active ? 'group-hover:translate-y-[-100%]' : ''}`} style={{ transitionDelay: `${letterIndex * 13}ms` }}>
            {children}
          </span>
          <span className={`absolute top-0 left-0 w-full transition-translate ease-in-out duration-300 translate-y-full ${color ? 'text-white' : '' } ${ !active ? 'group-hover:translate-y-0' : '' }`} style={{ transitionDelay: `${letterIndex * 13}ms` }}>
            {children}
          </span>
        </span>
      )}
    >
      {text}
    </SplitText>
  )
}