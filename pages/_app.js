import '@/styles/main.css'
import PreviewAlert from '@/components/preview-alert';
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      { pageProps.preview && <PreviewAlert/>}

      <div className="border-r border-black fixed top-0 w-px left-3 md:left-4 lg:left-5 h-full z-10"></div>
      <div className="border-r border-black fixed top-0 w-px right-3 md:right-4 lg:right-5 h-full z-10"></div>

      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}