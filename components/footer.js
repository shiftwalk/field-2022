import Container from '@/components/container'
import LogoMarkIcon from '@/icons/logomark.svg'
import Button from './button'

export default function Footer() {
  return (
    <footer className="border-t border-black bg-off-white">
      <Container className="py-0 my-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 mb-10 pt-[15vw] md:pt-[10vw]">
            <LogoMarkIcon className="w-[70px] md:w-[8vw] xl:w-[100px] mb-8" />

            <span className="text-[clamp(36px,_3.6vw,_50px)] leading-[0.9] block max-w-[85%] md:max-w-[50%] lg:max-w-[55%] xl:max-w-[450px] mb-8">Renewable energy infrastructure to get to net zero</span>

            <div className="flex items-center space-x-3">
              <span className="block w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow"></span>
              <span className="block w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-yellow"></span>
            </div>
          </div>

          <div className="w-full lg:w-1/3 lg:border-l border-black mb-8 lg:mb-0 flex flex-wrap items-center justify-center">
            <nav className="block w-full lg:w-[75%] 2xl:w-[60%] 3xl:w-[50%]">
              <ul>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Home</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Mission</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Projects</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Team</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Careers</li>
                <li className="block text-xl lg:text-2xl leading-snug lg:leading-snug">Views</li>
                <li className="block">
                  <Button outline href="/contact" label="Contact&nbsp;Us" a11yText={"Navigate to the contact page"} className="inline-block text-xl lg:text-2xl leading-none lg:leading-none mt-8" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      
        <div className="border-t border-black">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full md:flex-1 mb-6 md:mb-0">
              <span className="block text-base leading-tight">Copyright 2022, Virmati Energy Ltd T/A Field (CN: 13095982)</span>
            </div>
            <div className="w-full md:flex-1 md:ml-auto flex md:justify-end items-center space-x-6">
              <span className="block text-base leading-tight">Terms &amp; Conditions</span>
              <span className="block text-base leading-tight">Privacy Policy</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}