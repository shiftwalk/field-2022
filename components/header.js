import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import MobileMenu from "@/components/mobile-menu"
import useScrollDirection from '@/helpers/scroll-direction'
import { useScroll } from 'framer-motion'

import LogoIcon from '@/icons/logo.svg'
import LogoMarkIcon from '@/icons/logomark.svg'
import MenuIcon from '@/icons/menu.svg'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({ path }) {
  const { scrollY } = useScroll()
  const scrollDirection = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollAmount, setScrollAmount] = useState(0)

  const menuToggle = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    } else {
      setMobileMenuOpen(true)
    }
  }

  const menuClose = () => {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollAmount(latest)
    })
  }, [scrollAmount])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-[1000] border-b border-black transition-translate ease-in-out duration-[350ms] ${scrollDirection == 'down' ? 'translate-y-[-100px]' : 'translate-y-[0]'} ${scrollAmount < 100 ? '' : 'bg-white' }`}>
        <Container className="py-[18px] lg:py-5">
          <div className="flex flex-wrap">

            <Link href="/">
              <a aria-label="Navigate to the home page" className={`w-[65px] md:w-[65px] lg:w-48 px-1 lg:px-3 py-0 lg:pt-3 lg:pb-2 block -translate-x-1 lg:-translate-x-3 ${path == '/' && 'pointer-events-none'}`} aria-disabled={path == '/'}>
                <LogoIcon className="w-full hidden lg:block" />
                <LogoMarkIcon className="w-full block lg:hidden" />
              </a>
            </Link>

            <nav className="ml-auto lg:space-x-6 xl:space-x-8 w-full text-lg xl:text-xl hidden lg:flex lg:w-auto">
              <FancyLink
                destination="/"
                a11yText="Navigate to the home page"
                label="Home"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/'}
              />

              <FancyLink
                destination="/mission"
                a11yText="Navigate to the mission page"
                label="Mission"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/mission'}
              />

              <FancyLink
                destination="/projects"
                a11yText="Navigate to the projects page"
                label="Projects"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/projects'}
              />

              <FancyLink
                destination="/team"
                a11yText="Navigate to the team page"
                label="Team"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/team'}
              />

              <FancyLink
                destination="/development"
                a11yText="Navigate to the development page"
                label="Development"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/development'}
              />

              <FancyLink
                destination="/careers"
                a11yText="Navigate to the careers page"
                label="Careers"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/careers'}
              />

              <FancyLink
                destination="/views"
                a11yText="Navigate to the views page"
                label="Views"
                className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
                active={path == '/views'}
              />
            </nav>

            <div className="ml-auto lg:space-x-6 xl:space-x-8 flex w-auto lg:hidden">
              <button onClick={menuToggle} className="block w-[43px] outline-none border-none">
                <MenuIcon className="w-full" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {mobileMenuOpen && (
        <MobileMenu
          menuClose={menuClose}
        />
      )}
    </>
  )
}