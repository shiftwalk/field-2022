import { useFrame, useLayoutEffect } from '@studio-freight/hamo'
import Lenis from '@studio-freight/lenis'
import { useStore } from '@/helpers/store'
// import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from '@/components/header'

export default function Layout({ children }) {
  const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])
  // const router = useRouter()
  
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    window.lenis = lenis
    setLenis(lenis)

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  const [hash, setHash] = useState()

  // useLayoutEffect(() => {
  //   if (lenis && hash) {
  //     // scroll to on hash change
  //     const target = document.querySelector(hash)
  //     lenis.scrollTo(target, { offset: 0 })
  //   }
  // }, [lenis, hash])

  // useLayoutEffect(() => {
  //   // update scroll position on page refresh based on hash
  //   if (router.asPath.includes('#')) {
  //     const hash = router.asPath.split('#').pop()
  //     setHash('#' + hash)
  //   }
  // }, [router])

  // useLayoutEffect(() => {
  //   if (!lenis) return

  //   // eslint-disable-next-line no-unused-vars
  //   function onScroll(e) {
  //     // console.log(e)
  //   }

  //   lenis.on('scroll', onScroll)

  //   return () => {
  //     lenis.off('scroll', onScroll)
  //   }
  // }, [lenis])

  // useLayoutEffect(() => {
  //   // catch anchor links clicks
  //   function onClick(e) {
  //     e.preventDefault()
  //     const node = e.currentTarget
  //     const hash = node.href.split('#').pop()
  //     setHash('#' + hash)
  //     setTimeout(() => {
  //       window.location.hash = hash
  //     }, 0)
  //   }

  //   const internalLinks = [...document.querySelectorAll('[href]')].filter(
  //     (node) => node.href.includes(router.pathname + '#')
  //   )

  //   internalLinks.forEach((node) => {
  //     node.addEventListener('click', onClick, false)
  //   })

  //   return () => {
  //     internalLinks.forEach((node) => {
  //       node.removeEventListener('click', onClick, false)
  //     })
  //   }
  // }, [])

  useFrame((time) => {
    lenis?.raf(time)
  }, [])

  return (
    <>
      <Header />
      
      {children}
    </>
  )
}