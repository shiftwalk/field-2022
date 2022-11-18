import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import MetaText from '@/components/meta-text'
import Button from '@/components/button'
import TeamMember from '@/components/team-member'
import Select from 'react-select'
import SanityPageService from '@/services/sanityPageService'
import { useEffect, useRef, useState } from 'react'
var slugify = require('slugify')

const query = `{
  "team": *[_type == "team"] | order(orderRank desc) {
    name,
    jobTitle,
    department->{
      name,
    },
    location->{
      name,
    },
    avatar {
      asset -> {
        ...
      },
      ...
    },
    bio
  },
  "departments": *[_type == "departments"] | order(order asc) { name },
  "locations": *[_type == "locations"] | order(order asc) { name },
  "teamLanding": *[_type == "teamLandingNew"][0]{ 
    title,
    heroHeading,
    heroText,
    joinTheTeamCtaText
  }
}`

const pageService = new SanityPageService(query)

export default function Team(initialData) {
  const { data: { team, departments, locations, teamLanding }  } = pageService.getPreviewHook(initialData)()
  const [currentLocation, setCurrentLocation] = useState('all')
  const [currentDepartment, setCurrentDepartment] = useState('all')

  const locationsDropdown = [{
    label: `All Locations`, value: 'all',
  }]

  const departmentsDropdown = [{
    label: `All Departments`, value: 'all',
  }]

  locations.forEach(location => {
    locationsDropdown.push(
      { label: `${ location.name }`, value: location.name, },
    );
  })

  departments.forEach(department => {
    departmentsDropdown.push(
      { label: `${department.name}`, value: slugify(department.name), },
    );
  })

  const departmentSelectBlur = (selectedValue) => {
    setCurrentDepartment(slugify(selectedValue.value))
  }

  const locationsSelectBlur = (selectedValue) => {
    setCurrentLocation(slugify(selectedValue.value))
  }

  let filteredTeam = team
  filteredTeam = (currentLocation !== 'all') ? filteredTeam.filter(d => slugify(d.location.name) == currentLocation) : filteredTeam
  filteredTeam = (currentDepartment !== 'all') ? filteredTeam.filter(d => slugify(d.department.name) == currentDepartment) : filteredTeam

  return (
    <Layout>
      <NextSeo title={teamLanding.title} />
      
      <main>
        <div className="h-[75vh] flex flex-col pt-[75px] lg:pt-[94px] relative overflow-hidden bg-gradient-to-tl from-orange via-yellow to-purple lg:bg-none">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full lg:bg-gradient-to-t lg:from-[#C99C97] lg:to-[#D9D5D0] overflow-hidden origin-center hidden lg:block">

            {/* Right blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
              <div className="absolute inset-0 origin-right">
                <div className="absolute top-0 right-0 w-[120vw] h-[170%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[48vw] translate-y-[-32%] blur-xl overflow-x-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-0 right-[20%] w-[50%] h-[40%] rounded-full bg-gradient-to-t from-purple via-purple/50 rotate-[-50deg] z-[2]"></div>
                  <div className="absolute bottom-[-10%] left-[-10%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange rotate-[25deg]"></div>

                  <div className="absolute bottom-[-10%] left-[24%] right-0 w-[25%] h-[45%] bg-gradient-to-t from-yellow to-yellow z-1 rounded-xl opacity-25 rotate-[-13deg]"></div>

                  <div className="absolute top-[-15%] left-[-40%] w-[76%] h-[67%] bg-gradient-to-b from-purple via-purple/90 to-orange/60 z-1 rounded-xl opacity-70 rotate-[-20deg]"></div>

                  <div className="w-[43%] h-[42%] rounded-full radial radial--purple mt-[5%] ml-[-15%] top-0 left-0 absolute opacity-80"></div>

                  <div className="absolute bottom-[-25%] left-[-10%] right-0 w-[70%] h-[45%] bg-gradient-to-t from-purple rotate-[25deg] z-1"></div>
                </div>
              </div>
            </MouseParallax>

            {/* Left blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
              <div className="absolute inset-0 origin-left">
                <div className="absolute top-[20%] left-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[-50vw] translate-y-[-15%] blur-xl flex items-center justify-center overflow-y-hidden origin-center">
                  {/* <div className="absolute top-[-15%] right-[-40%] w-[76%] h-[67%] bg-gradient-to-b from-purple/90 via-purple/70 to-orange/80 z-1 rounded-xl opacity-100 rotate-[20deg]"></div> */}
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-20%] mr-[-20%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-purple via-purple/70 rotate-[20deg]"></div>
                  <div className="w-[56%] h-[65%] rounded-full radial radial--purple mt-[-25%] mr-[-10%] top-0 right-0 absolute opacity-100"></div>
                </div>
              </div>
            </MouseParallax>
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              <h1 className="text-[15vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[60%] mb-auto break-hyphens">{teamLanding.heroHeading}</h1>
              <div className="w-full lg:max-w-[55%]">
                <p className="text-lg lg:text-xl xl:text-2xl mb-2 md:mb-8">{teamLanding.heroText}</p>
              </div>
            </article>
          </Container>
        </div>
        
        <div className="border-y border-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full md:w-auto md:flex md:items-center md:justify-center md:border-r md:border-black pt-6 pb-2 md:py-0">
                <MetaText text="Filter By" className="px-5 md:px-4" />
              </div>
              <div className="w-full md:flex-1 px-5 md:px-3 lg:px-3 pb-6 pt-3 md:py-3">
                <Select
                  instanceId="departmentDropdown"
                  onChange={departmentSelectBlur}
                  isClearable={false}
                  isSearchable={false}
                  backspaceRemovesValue={false}
                  blurInputOnSelect
                  placeholder="All Departments"
                  options={departmentsDropdown}
                  className="block md:inline-block text-lg lg:text-xl leading-snug lg:leading-snug pb-0 mr-3 relative z-[1000] react-select-container mb-3 md:mb-0"
                  classNamePrefix="react-select"
                />

                <Select
                  instanceId="locationDropdown"
                  onChange={locationsSelectBlur}
                  isClearable={false}
                  isSearchable={false}
                  backspaceRemovesValue={false}
                  blurInputOnSelect
                  placeholder="All Locations"
                  options={locationsDropdown}
                  className="block md:inline-block text-lg lg:text-xl leading-snug lg:leading-snug pb-0 mr-3 relative z-[100] react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
            </div>
          </Container>
        </div>

        <div className="border-b border-black">
          <Container className="md:pt-[6vw] md:pb-[12vw] md:px-6 lg:px-8" noPad>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 md:gap-x-8 xl:gap-x-10 2xl:gap-x-12 md:gap-y-[6vw]">
              {filteredTeam.map((e, i) => {
                return ( 
                  <div className="col-span-1 border-b border-b-black last-of-type:border-b-0 md:border-b-0" key={i}>
                    <TeamMember
                      name={e.name}
                      jobTitle={`${e.jobTitle}`}
                      image={e.avatar}
                      bio={e.bio}
                    />
                  </div>
                )
              })}
            </div>
          </Container>
        </div>

        <div className="bg-white">
          <Container>
            <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-5">
              <MetaText text="Join the Team" className="mb-[13vw]" />
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none mb-8 md:mb-10">We're always up for speaking to great people who are determined to make the renewable transition happen.</h2>

              <Button href="/careers" label="Careers&nbsp;At&nbsp;Field" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug mb-[13.5vw]" a11yText="Navigate to the careers page" />
            </div>
          </Container>
        </div>
      </main>
    
      <Footer noCta/>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}