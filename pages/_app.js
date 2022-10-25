import '@/styles/main.css'
import { useLayoutEffect } from '@studio-freight/hamo'
import PreviewAlert from '@/components/preview-alert';
import { RealViewport } from '@/components/real-viewport'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { useStore } from '@/helpers/store'
import SEO from '@/helpers/seo.config';
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const lenis = useStore(({ lenis }) => lenis)
  const overflow = useStore(({ overflow }) => overflow)

  useEffect(() => {
    if (overflow) {
      lenis?.start()
      document.documentElement.style.removeProperty('overflow')
    } else {
      lenis?.stop()
      document.documentElement.style.setProperty('overflow', 'hidden')
    }
  }, [lenis, overflow])

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      { pageProps.preview && <PreviewAlert/>}
      
      <RealViewport />

      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}