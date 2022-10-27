import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'

import LogoIcon from '@/icons/logo.svg'
import Link from 'next/link'

export default function Header({ path }) {
  return (
    <header className="absolute top-0 left-0 right-0 w-full z-[1000]">
      <Container className="border-b border-black">
        <div className="flex flex-wrap">

          <Link href="/">
            <a aria-label="Navigate to the home page" className={`w-40 lg:w-48 px-1 lg:px-3 py-1 lg:pt-3 lg:pb-2 block -translate-x-1 lg:-translate-x-3 ${path == '/' && 'pointer-events-none'}`} aria-disabled={path == '/'}>
              <LogoIcon className="w-full" />
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
            />

            <FancyLink
              destination="/careers"
              a11yText="Navigate to the careers page"
              label="Careers"
              className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
            />

            <FancyLink
              destination="/views"
              a11yText="Navigate to the views page"
              label="Views"
              className="block lg:px-2 lg:pt-3 lg:pb-2 xl:px-3 xl:pt-3 xl:pb-2"
            />
          </nav>
        </div>
      </Container>
    </header>
  )
}