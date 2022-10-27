import { m } from 'framer-motion'
import { SplitText } from '@cyriacbr/react-split-text'
import { reveal } from '@/helpers/transitions'

export default function LineRoll({ text }) {
  return (
    <SplitText
      LineWrapper={({ lineIndex, children }) => (
        <span className="block relative overflow-hidden" key={lineIndex}>
          <m.span variants={reveal} className="block">
            {children}
          </m.span>
        </span>
      )}
    >
      {text}
    </SplitText>
  )
}