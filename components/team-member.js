import LogoMarkIcon from '@/icons/logomark.svg'
import MetaText from './meta-text'
import SanityImage from './sanity-image'
import Modal from 'react-modal';
import { useState } from 'react';
import BlockContent from '@sanity/block-content-to-react'

Modal.setAppElement('#app');


export default function TeamMember({ name, jobTitle, image, bio }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal} className="block border-none p-0 m-0 outline-none text-left w-full group relative" aria-label={`View ${name}'s Biography`}>
        <div className="aspect-[10/13.5] bg-blue/50 mb-3 md:mb-5 flex items-center justify-center relative">

          <div className="absolute z-20 inset-0 opacity-0 md:group-hover:opacity-100 bg-gradient-to-tr from-orange via-orange to-yellow mix-blend-multiply"></div>

          { image && (
            <div className="absolute inset-0">
              <SanityImage
                image={image}
                widthOverride={550}
                layout="fill"
                alt={`Photo of ${name}`}
                className="w-full absolute inset-0"
              />
            </div>
          )}

          <LogoMarkIcon className="w-[40%] opacity-10" />
          
          <div className="absolute bottom-0 left-0 right-0 w-full p-4 md:opacity-0 group-hover:opacity-100 z-20">
            <span className={`block relative px-10 pt-3 md:pt-4 pb-3 md:pb-4 border border-white text-white rounded-full overflow-hidden`}>
              <span className="relative block overflow-hidden z-10 text-center text-lg md:text-xl lg:text-2xl">
                Read Bio
              </span>
            </span>
          </div>
        </div>

        <MetaText text={jobTitle} className="mb-2" />

        <span className="block text-[4.7vw] md:text-[3.2vw] lg:text-[2.75vw] xl:text-[2.4vw] 2xl:text-[1.8vw] leading-none md:leading-none lg:leading-none xl:leading-none 2xl:leading-none">{name}</span>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button className="w-6 h-6 block absolute top-3 md:top-5 right-3 md:right-5 z-30 text-white md:text-black" onClick={closeModal}>
          <svg className="w-full" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-width="4" d="m1.293 47.293 46-46M2.707 1.293l46 46"/></svg>
        </button>

        <div className="flex flex-wrap h-full">
          <div className="w-full md:w-[35%] relative overflow-hidden aspect-[14/10] md:aspect-auto">
            <div className="absolute z-20 inset-0 bg-gradient-to-tr from-orange via-orange to-yellow mix-blend-multiply"></div>

            <div className="absolute inset-0">
              <SanityImage
                image={image}
                widthOverride={550}
                layout="fill"
                alt={`Photo of ${name}`}
                className="w-full absolute inset-0 cover-image--top-mobile"
              />
            </div>
          </div>
          <div className="w-full md:w-[65%] md:border-l md:border-black bg-off-white py-5 px-5 md:px-6 lg:px-8 md:flex md:items-center md:justify-center">
            <div className="md:w-[90%] md:max-h-[85%] self-center overflow-y-scroll modal--inner">
              <MetaText text={jobTitle} className="mb-2" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-none md:leading-none lg:leading-none xl:leading-none uppercase italic font-normal">{name}</h2>
              
              <div className="w-[90%] content content--small">
                <BlockContent serializers={{ container: ({ children }) => children }} blocks={bio} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}