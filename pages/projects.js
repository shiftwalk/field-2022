import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { MouseParallax } from 'react-just-parallax'
import MetaText from '@/components/meta-text'
import Select from 'react-select'
import Button from '@/components/button'
import BatteryIcon from '@/icons/battery.svg'
import GridIcon from '@/icons/grid.svg'
import ListIcon from '@/icons/list.svg'
import SanityPageService from '@/services/sanityPageService'
import { useState } from 'react'
import Link from 'next/link'
import ConditionalWrap from 'conditional-wrap'
import SanityImage from '@/components/sanity-image'

const query = `{
  "projects": *[_type == "projects"] | order((status->name == 'Operational') desc) {
    name,
    mwh,
    status->{
      name
    },
    icon {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    country->{
      name,
    },
    storage->{
      name,
      tagColor {
        hex
      }
    },
    googleMapsUrl,
  },
  "country": *[_type == "country"] | order(order asc) { name },
  "storage": *[_type == "storage"] | order(order asc) { name },
  "status": *[_type == "status"] | order(order asc) { name },
  "projectsLanding": *[_type == "projectsLanding"][0]{ 
    title,
    heroHeading,
    heroText,
    supportingImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    pipelineCtaText,
    developmentCtaText
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    companyNumber,
    socialLinks[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Projects(initialData) {
  const { data: { projects, country, storage, status, projectsLanding, contact }  } = pageService.getPreviewHook(initialData)()
  const [currentView, setCurrentView] = useState('grid')
  const [currentCountry, setCurrentCountry] = useState('All')
  const [currentStorage, setCurrentStorage] = useState('All')
  const [currentStatus, setCurrentStatus] = useState('All')

  const countryDropdown = [{
    label: `All Locations`, value: 'All',
  }]

  const storageDropdown = [{
    label: `All Storage`, value: 'All',
  }]

  const statusDropdown = [{
    label: `All`, value: 'All',
  }]

  country.forEach(location => {
    countryDropdown.push(
      { label: `${ location.name }`, value: location.name, },
    );
  })

  storage.forEach(storage => {
    storageDropdown.push(
      { label: `${ storage.name }`, value: storage.name, },
    );
  })

  status.forEach(status => {
    statusDropdown.push(
      { label: `${ status.name }`, value: status.name, },
    );
  })

  const countrySelectBlur = (selectedValue) => {
    setCurrentCountry(selectedValue.value)
  }

  const storageSelectBlur = (selectedValue) => {
    setCurrentStorage(selectedValue.value)
  }

  const statusSelectBlur = (selectedValue) => {
    setCurrentStatus(selectedValue.value)
  }

  let filteredProjects = projects
  filteredProjects = (currentCountry !== 'All') ? filteredProjects.filter(d => d.country.name == currentCountry) : filteredProjects
  filteredProjects = (currentStorage !== 'All') ? filteredProjects.filter(d => d.storage.name == currentStorage) : filteredProjects
  filteredProjects = (currentStatus !== 'All') ? filteredProjects.filter(d => d.status.name == currentStatus) : filteredProjects

  return (
    <Layout>
      <NextSeo
        title={projectsLanding.seo?.metaTitle ? projectsLanding.seo?.metaTitle : projectsLanding.title}
        description={projectsLanding.seo?.metaDesc ? projectsLanding.seo?.metaDesc : null}
        openGraph={{
          title: projectsLanding.seo?.metaTitle ? projectsLanding.seo?.metaTitle : projectsLanding.title,
          description: projectsLanding.seo?.metaDesc ? projectsLanding.seo?.metaDesc : null,
          images: projectsLanding.seo?.shareGraphic?.asset[
            {
              url: projectsLanding.seo?.shareGraphic?.asset.url ? projectsLanding.seo?.shareGraphic?.asset.url : null,
              width: projectsLanding.seo?.shareGraphic?.asset.metadata.dimensions.width ? projectsLanding.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: projectsLanding.seo?.shareGraphic?.asset.metadata.dimensions.height ? projectsLanding.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />
      
      <main>
        <div className="h-[75vh] flex flex-col pt-[75px] lg:pt-[94px] relative overflow-hidden bg-gradient-to-bl from-orange via-yellow to-purple lg:bg-none">

          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#C99C97] to-[#D9D5D0] overflow-hidden origin-center hidden lg:block">

            {/* Grain overlay */}
            <div className="grain absolute inset-0 w-full h-full z-10 hidden lg:block"></div>
          
            {/* Left blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={-0.1}>
              <div className="absolute inset-0 origin-left blur-xl">
                <div className="absolute top-0 left-0 w-[120vw] h-[140%] rounded-full bg-gradient-to-tr from-orange via-yellow  to-yellow translate-x-[-57vw] translate-y-[-32%] overflow-hidden flex items-start justify-start scale-[1.15]">
                  <div className="w-[45%] h-[46%] rounded-full radial mt-[7%] ml-[0%]"></div>
                  <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-t from-white/80 via-white/50 rotate-[90deg] z-[2]"></div>
                  <div className="absolute bottom-[-15%] left-[23%] right-0 w-[100%] h-[45%] bg-gradient-to-t from-orange via-orange rotate-[-35deg]"></div>
                </div>
              </div>
            </MouseParallax>

            {/* Right blob */}
            <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.05} strength={0.1}>
              <div className="absolute inset-0 origin-right blur-xl">
                <div className="absolute top-0 right-0 w-[70vw] h-[130%] rounded-full bg-gradient-to-t from-orange via-yellow to-yellow translate-x-[42vw] translate-y-[-15%] flex items-center justify-center overflow-hidden ">
                  <div className="w-[80%] h-[50%] rounded-full radial mt-[-45%] mr-[-10%]"></div>
                  <div className="absolute bottom-0 left-0 right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-white via-white/60 rotate-[0deg]"></div>
                  <div className="absolute bottom-0 left-[-40%] right-0 w-[100%] h-[45%] rounded-full bg-gradient-to-t from-orange via-orange/60 rotate-[80deg]"></div>
                </div>
              </div>
            </MouseParallax>
          </div>

          <Container className="h-full flex flex-col relative z-10">
            <article className="h-full flex flex-col">
              <div className="mb-auto">
                <h1 className="text-[9.5vw] md:text-[9vw] leading-[0.85] uppercase italic md:w-[60%] mb-6 lg:mb-8">{projectsLanding.heroHeading}</h1>
              </div>
              <div className="w-full lg:w-[65%] lg:max-w-[850px]">
                <p className="text-lg lg:text-xl 2xl:text-2xl mb-2 md:mb-4 leading-tight lg:leading-tight xl:leading-tight">{projectsLanding.heroText} <Link href="/development"><a className=""><span className="inline underline">Looking to partner with Field? See our Development section</span> <span className="inline">→</span></a></Link></p>
              </div>
            </article>
          </Container>
        </div>

        <div className="border-y border-black">
          <Container noPad>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-auto lg:flex lg:items-center lg:justify-center lg:border-r lg:border-black pt-6 pb-2 lg:py-0">
                <MetaText text="Filter By" className="px-5 lg:px-4" />
              </div>
              <div className="w-full lg:flex-1 px-5 lg:px-3 pb-6 pt-3 lg:py-3">
                {storage.length > 1 && (
                  <Select
                    instanceId="storageDropdown"
                    onChange={storageSelectBlur}
                    isClearable={false}
                    isSearchable={false}
                    backspaceRemovesValue={false}
                    blurInputOnSelect
                    placeholder="All Storage"
                    options={storageDropdown}
                    className="block lg:inline-block text-lg lg:text-xl leading-snug lg:leading-snug pb-0 lg:mr-3 relative z-[1001] react-select-container mb-3 lg:mb-0"
                    classNamePrefix="react-select"
                  />
                )}
                
                {country.length > 1 && (
                  <Select
                    instanceId="countryDropdown"
                    onChange={countrySelectBlur}
                    isClearable={false}
                    isSearchable={false}
                    backspaceRemovesValue={false}
                    blurInputOnSelect
                    placeholder="All Locations"
                    options={countryDropdown}
                    className="block lg:inline-block text-lg lg:text-xl leading-snug lg:leading-snug pb-0 lg:mr-3 relative z-[1000] react-select-container mb-3 lg:mb-0"
                    classNamePrefix="react-select"
                  />
                )}

                {status.length > 1 && (
                  <Select
                    instanceId="statusDropdown"
                    onChange={statusSelectBlur}
                    isClearable={false}
                    isSearchable={false}
                    backspaceRemovesValue={false}
                    blurInputOnSelect
                    placeholder="All"
                    options={statusDropdown}
                    className="block lg:inline-block text-lg lg:text-xl leading-snug lg:leading-snug pb-0 lg:mr-3 relative z-[999] react-select-container"
                    classNamePrefix="react-select"
                  />
                )}
              </div>
              <div className="w-full lg:w-auto px-5 lg:px-6 pb-6 pt-3 lg:py-3 items-center border-l border-black hidden lg:flex lg:space-x-5">
                <button onClick={() => setCurrentView('grid')} className="block">
                  <GridIcon className={`w-10 ${currentView == 'list' && 'opacity-20' }`} />
                </button>
                <button onClick={() => setCurrentView('list')} className="block">
                  <ListIcon className={`w-10 ${currentView == 'grid' && 'opacity-20' }`} />
                </button>
              </div>
            </div>
          </Container>
        </div>

        <div className="">
          <Container className="pt-[6vw] pb-[12vw]">
            <div className={`grid ${currentView == 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8' : 'grid-cols-1 gap-5 md:gap-8' }`}>
              {filteredProjects.map((e, i) => {
                return (
                  <ConditionalWrap
                    key={`location-${i}`}
                    condition={!!e.googleMapsUrl}
                    wrap={children => (
                      <a href={e.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="col-span-1 group">
                        {children}
                      </a>
                    )}
                  >
                    <div className={`w-full border-black border col-span-1 flex flex-col group-hover:bg-white ${ currentView == 'grid' ? 'lg:aspect-square' : '' }`} key={i}>
                      <div className="flex flex-wrap px-3 border-b border-black w-full mb-auto">
                        <span className="flex space-x-2 py-2 items-center">
                          <span className="px-3 py-[7px] lg:py-[9px] text-white rounded-full" style={{ backgroundColor: e.storage.tagColor.hex}}><MetaText text={e.storage.name} className="text-[10px] lg:text-xs text-white" /></span>
                          <span className={`px-3 rounded-full ${e.status.name == 'Operational' ? 'bg-orange text-white py-[7px] lg:py-[9px]' : 'bg-blue-dark text-white py-[7px] lg:py-[9px]'}`}><MetaText text={e.status.name} className={`${e.status.name == 'Operational' ? 'text-white' : 'text-white'} text-[10px] md:text-xs `} /></span>
                        </span>

                        <span className="border-l border-black ml-auto flex items-center justify-center py-2 pl-3">
                          <div className="w-[28px] lg:w-[35px]">
                            <SanityImage image={e.icon} className="w-full" noLoader noBg />
                          </div>
                        </span>
                      </div>

                      <div className={`${currentView == 'grid' ? 'py-[10.5vw] lg:py-[7.5vw]' : 'pt-5 pb-2' }`}>
                        <div className="flex flex-wrap items-center">
                          <div className="w-full md:flex-1">
                            <span className={`px-3 block ${ currentView == 'grid' ? 'text-[8.5vw] lg:text-[5vw] xl:text-[3.5vw]' : 'text-2xl lg:text-3xl xl:text-4xl' } leading-none`}>{e.name}<span className={`${currentView == 'grid' ? 'block w-full' : 'inline-block ml-2' } text-black text-opacity-10 mb-auto`}>{e.country.name}</span></span>
                          </div>

                          <div className={`w-full md:flex-1 px-3 py-2 items-end ${currentView == 'grid' ? 'hidden' : 'flex'}`}>
                            <div className="md:ml-auto flex items-end space-x-6">
                              <span className={`block ${currentView == 'grid' ? 'text-[4vw] md:text-[3vw] xl:text-[2vw]' : 'text-2xl lg:text-3xl xl:text-4xl' } leading-none md:leading-none xl:leading-none`}>{e.mwh}&nbsp;MWh</span>
                              
                              { e.googleMapsUrl && (
                                <span className="block text-base md:text-lg xl:text-xl leading-none md:leading-none xl:leading-none ml-auto text-right relative pb-[1px]">See Location<span className="absolute bottom-0 left-0 right-0 bg-black w-full lg:w-0 group-hover:w-full h-[1px]"></span></span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-2 w-full mt-auto items-end ${currentView == 'grid' ? 'flex' : 'hidden' }`}>
                        <span className="block text-[4vw] md:text-[3vw] xl:text-[2vw] leading-none md:leading-none xl:leading-none">{e.mwh}&nbsp;MWh</span>
                        { e.googleMapsUrl && (
                          <span className="block text-base md:text-lg xl:text-xl leading-none md:leading-none xl:leading-none ml-auto text-right relative pb-[2px] mb-[2px]">See Location<span className="absolute bottom-0 left-0 right-0 bg-black w-full lg:w-0 group-hover:w-full h-[1px]"></span></span>
                        )}
                      </div>
                    </div>
                  </ConditionalWrap>
                )
              })}

              { (currentStatus == 'All' || currentStatus == 'In Development') && (
                <div className="col-span-1 aspect-square">
                  <div className={`w-full border-black border flex flex-col bg-yellow ${currentView == 'grid' ? 'aspect-square' : 'aspect-square md:aspect-auto' }`}>
                    <div className="px-3 py-3 w-full mb-auto">
                      <span className="py-2 "><MetaText text="Pipeline" /></span>
                    </div>

                    <div className="w-full py-12 lg:py-6">
                      <span className="px-3 block text-[5.5vw] lg:text-[2.7vw] xl:text-[2vw] leading-none lg:leading-none xl:leading-none max-w-[90%]">{projectsLanding.pipelineCtaText}</span>
                    </div>
                    
                    <div className="px-3 py-2 w-full mt-auto self-end">
                      <Button href="/development" label="Development" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug" a11yText="Navigate to the development page" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>

        <SanityImage image={projectsLanding.supportingImage} alt="Projects Image" bordered />

        <div className="bg-white">
          <Container>
            <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-2 lg:pt-5">
              <MetaText text="Development" className="mb-[13vw]" />
              <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-none md:leading-none lg:leading-none mb-8 md:mb-10">{projectsLanding.developmentCtaText}</h2>

              <Button href="/development" label="Development" className="inline-block text-xl lg:text-2xl leading-snug lg:leading-snug mb-[13.5vw]" a11yText="Navigate to the development page" />
            </div>
          </Container>
        </div>
      </main>
    
      <Footer contact={contact} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}