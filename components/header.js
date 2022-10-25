import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'

import LogoIcon from '@/icons/logo.svg'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 w-full z-10">
      <Container className="border-b border-black">
        <div className="flex flex-wrap">

          <div className="w-36 lg:w-40 py-1 lg:py-3">
            <LogoIcon className="w-full" />
          </div>

          <nav className="ml-auto lg:space-x-6 xl:space-x-8 w-full text-lg xl:text-xl hidden lg:flex lg:w-auto">
            <FancyLink
              destination="/"
              a11yText="Navigate to the home page"
              label="Home"
              className="block lg:px-2 lg:py-3 xl:px-3 xl:py-3"
            />

            <FancyLink
              destination="/mission"
              a11yText="Navigate to the mission page"
              label="Mission"
              className="block lg:px-2 lg:py-3 xl:px-3 xl:py-3"
            />

            <FancyLink
              destination="/projects"
              a11yText="Navigate to the projects page"
              label="Projects"
              className="block lg:px-2 lg:py-3 xl:px-3 xl:py-3"
            />

            <FancyLink
              destination="/team"
              a11yText="Navigate to the team page"
              label="Team"
              className="block lg:px-2 lg:py-3 xl:px-3 xl:py-3"
            />

            <FancyLink
              destination="/careers"
              a11yText="Navigate to the careers page"
              label="Careers"
              className="block lg:px-2 lg:py-3 xl:px-3 xl:py-3"
            />

            <FancyLink
              destination="/views"
              a11yText="Navigate to the views page"
              label="Views"
              className="block lg:px-2 lg:py-3 xl:px-3 xl:py-3"
            />
          </nav>
        </div>
      </Container>
    </header>
  )
}