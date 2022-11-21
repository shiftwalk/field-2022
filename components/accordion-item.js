import { useState } from 'react';
import BlockContent from '@sanity/block-content-to-react'

export default function AccordionItem({ question, answer, isOpen }) {
  const [open, setOpen] = useState(isOpen ? isOpen : false);

  function updateOpenProjects() {
    setOpen(open ? false : true)
  }

  return (
    <div className="w-full">
      <button onClick={() => updateOpenProjects()} className="w-full text-left border-b border-black flex flex-wrap px-5 md:px-6 lg:px-8 py-5 md:py-5 lg:py-7 items-center hover:bg-white focus-visible:bg-white">
        <div className="h-[5vw] w-[5vw] lg:h-[2vw] lg:w-[2vw] bg-black rounded-full mr-4 lg:mr-5 flex items-center justify-center">
          <svg className={`w-[45%] ${open ? 'rotate-180 translate-y-[-1px]' : 'translate-y-[1px]' }`} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9 .804 0h10.392L6 9Z" fill="#fff"/></svg>
        </div>

        <div className="flex-1">
          <h2 className="text-xl lg:text-[3.2vw] xl:text-[2.4vw] leading-[1.025] lg:leading-[1.025] xl:leading-[1.025] block w-[90%] mb-0 pb-0">{question}</h2>
        </div>
      </button>

      <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-[450ms] ${open  ? 'max-h-full' : 'max-h-0' }`}>
      {open && (
        <div className="px-5 md:px-6 lg:px-8 pt-5 md:pt-5 lg:pt-7 pb-[10vw] lg:pb-[7.5vw] border-b border-black">
          <div className="content w-[85%] lg:w-[60%] lg:max-w-screen-md">
            <BlockContent serializers={{ container: ({ children }) => children }} blocks={answer} />
          </div>
        </div>
      )}
      </div>
    </div>
  )
}