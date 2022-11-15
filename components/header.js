import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
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
  const [scrollAmount, setScrollAmount] = useState(0)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollAmount(latest)
    })
  }, [scrollAmount])

  return (
    <div className="absolute lg:fixed top-0 left-0 right-0 z-[1000]">
      <div className="absolute inset-0 z-[0] h-[200px] lg:h-[250px] mx-3 md:mx-4 lg:mx-5 border-x border-black pointer-events-none hidden lg:block"></div>
      
      <header className={`absolute lg:fixed top-0 left-0 right-0 w-full z-[1000] border-b border-black transition-all ease-in-out duration-[420ms] ${scrollDirection == 'down' ? 'lg:translate-y-[-100px]' : 'lg:translate-y-[0]'} ${scrollAmount < 100 ? '' : 'lg:bg-white' }`}>
        <Container className="py-[18px] lg:py-5">
          <div className="flex flex-wrap items-center">

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
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path == '/'}
              />

              <FancyLink
                destination="/mission"
                a11yText="Navigate to the mission page"
                label="Mission"
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path == '/mission'}
              />

              <FancyLink
                destination="/projects"
                a11yText="Navigate to the projects page"
                label="Projects"
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path == '/projects'}
              />

              <FancyLink
                destination="/team"
                a11yText="Navigate to the team page"
                label="Team"
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path == '/team'}
              />

              <FancyLink
                destination="/development"
                a11yText="Navigate to the development page"
                label="Development"
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path == '/development'}
              />

              <FancyLink
                destination="/careers"
                a11yText="Navigate to the careers page"
                label="Careers"
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path == '/careers'}
              />

              <FancyLink
                destination="/views"
                a11yText="Navigate to the views page"
                label="Views"
                className="block lg:px-2 lg:pt-3 lg:pb-3 xl:px-3 xl:pt-3 xl:pb-3"
                active={path.includes('/views')}
              />
            </nav>

            <div className="ml-auto lg:space-x-6 xl:space-x-8 flex w-auto lg:hidden">
              <Link href="/menu">
                <a className="block w-[43px] outline-none border-none">
                  <MenuIcon className="w-full" />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}