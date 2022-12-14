import Div100vh from "react-div-100vh"
import MobileMenuItem from "@/components/mobile-menu-item"
import LogoMarkIcon from '@/icons/logomark.svg'
import MenuIcon from '@/icons/menu.svg'
import Link from "next/link"
import Container from "./container"
import FancyLink from "./fancyLink"

export default function MobileMenu({ menuClose }) {
  return (
    <Div100vh className="w-full h-screen bg-white bg-opacity-90 backdrop-blur-lg lg:hidden fixed inset-0 z-[10000] flex flex-col">

      <div className="absolute inset-0 mx-3 md:mx-4 border-x border-x-black z-[0] pointer-events-none"></div>

      <div className="w-full mb-auto">
        <div className="flex flex-wrap py-[18px] mx-3 md:mx-4 border-x border-black px-5 md:px-6">
          <Link href="/">
            <a aria-label="Navigate to the home page" className={`w-[65px] md:w-[65px] px-1 py-0 block -translate-x-1`} onClick={menuClose}>
              <LogoMarkIcon className="w-full block lg:hidden" />
            </a>
          </Link>

          <div className="ml-auto lg:space-x-6 xl:space-x-8 flex w-auto lg:hidden">
            <button onClick={menuClose} className="block w-[43px] outline-none border-none">
              <MenuIcon className="w-full" />
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-black"></div>
      </div>

      <div className="overflow-scroll mobile-menu flex flex-wrap">
        <nav className="w-full">
          <ul className="w-full">
            <li className="block border-t border-t-black border-b border-b-black">
              <div className="mx-3 md:mx-4 border-x border-black">
                <MobileMenuItem href="/mission" label="Mission" onClick={menuClose} />
              </div>
            </li>
            <li className="block border-b border-b-black">
              <div className="mx-3 md:mx-4 border-x border-black">
                <MobileMenuItem href="/projects" label="Projects" onClick={menuClose} />
              </div>
            </li>
            <li className="block border-b border-b-black">
              <div className="mx-3 md:mx-4 border-x border-black">
                <MobileMenuItem href="/team" label="Team" onClick={menuClose} />
              </div>
            </li>
            <li className="block border-b border-b-black">
              <div className="mx-3 md:mx-4 border-x border-black">
                <MobileMenuItem href="/development" label="Development" onClick={menuClose} />
              </div>
            </li>
            <li className="block border-b border-b-black">
              <div className="mx-3 md:mx-4 border-x border-black">
                <MobileMenuItem href="/careers" label="Careers" onClick={menuClose} />
              </div>
            </li>
            <li className="block border-b border-b-black">
              <div className="mx-3 md:mx-4 border-x border-black">
                <MobileMenuItem href="/views" label="Views" onClick={menuClose} />
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full mt-auto">
        <div className="border-t border-black">
          <Container className="py-4">
            <div className="flex flex-wrap">
              <div className="w-full md:flex-1 mb-[6px] md:mb-0">
                <span className="block text-sm leading-tight">Copyright 2022, Virmati Energy Ltd T/A Field (CN: 13095982)</span>
              </div>
              <div className="w-full md:flex-1 md:ml-auto flex md:justify-end items-center space-x-6">
                <span className="block text-sm leading-tight">
                  <FancyLink
                    destination="/privacy-policy"
                    a11yText="Navigate to the privacy policy page"
                    label="Privacy&nbsp;Policy"
                    className="block pb-0 mb-0 border-b border-black leading-[1.025]"
                    noDot
                  />
                </span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Div100vh>    
  )
}