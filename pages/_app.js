import '@/styles/main.css'
import PreviewAlert from '@/components/preview-alert';
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import * as gtag from '@/helpers/gtag'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      { pageProps.preview && <PreviewAlert/>}

      <div id="app">
        <Component {...pageProps} />
      </div>
    </>
  )
}