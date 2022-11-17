import { useState } from "react";

export default function ContactButton( {href, a11yText, className, outline} ) {
  const [open, setOpen] = useState(false);

  function updateOpenButton() {
    setOpen(open ? false : true)
  }

  return (
    <div className={`relative inline-block ${className} group`}>
      <button onClick={() => updateOpenButton()} className={`relative pl-6 pr-4 md:pl-8 md:pr-6 xl:pl-10 xl:pr-8 pt-3 md:pt-4 pb-[15px] md:pb-[18px] border border-black rounded-full overflow-hidden bg-black text-white`}>
        <span className={`absolute w-0 left-0 right-0 bottom-0 h-full bg-white md:group-hover:w-full transition-all ease-in-out duration-[450ms] z-0`}></span>

        <span className={`flex items-center relative overflow-hidden z-10 md:group-hover:text-black transition-colors ease-in-out duration-[450ms]`}>
          <span className="flex-1">Get In Touch</span>

          <svg className={`w-[8px] lg:w-[10px] xl:w-[12px] ml-6 ${open ? 'rotate-180' : '' }`} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L0.803847 2.51244e-08L11.1962 -8.834e-07L6 9Z" fill="currentColor"/>
          </svg>
        </span>
      </button>

      { open && (
        <div className="absolute top-[55px] lg:top-[45px] xl:top-[60px] left-0 w-full react-select__menu">
          <ul className="w-full react-select__menu-list">
            <li className="block"><a href="mailto:development-gb@field.energy" className="border-b border-black bg-white py-4 px-5 cursor-pointer block hover:bg-off-white hover:text-black">UK</a></li>
            <li className="block"><a href="mailto:development-it@field.energy" className="bg-white py-4 px-5 cursor-pointer block hover:bg-off-white hover:text-black">Italy</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}