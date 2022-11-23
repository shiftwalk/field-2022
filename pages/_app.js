import '@/styles/main.css'
import PreviewAlert from '@/components/preview-alert';
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent'
import * as gtag from '@/helpers/gtag'
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const showCookieBar = useState(true)

  useEffect(() => {
    if (getCookieConsentValue()){
      const handleRouteChange = (url) => {
        gtag.pageview(url)
    }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} /> 

      {showCookieBar && (
        <CookieConsent
          disableStyles
          buttonWrapperClasses="absolute left-0 bottom-0 lg:left-auto lg:bottom-auto lg:top-0 lg:right-0 flex items-center space-x-3 pr-6 pl-6 lg:pl-0 pb-[20px] lg:pb-0 lg:pt-[9px] text-sm"
          buttonClasses="underline"
          declineButtonClasses="underline"
          containerClasses="bg-soft-black-dark text-off-white fixed bottom-0 left-0 lg:left-auto lg:right-0 bottom-auto h-[auto] lg:h-[40px] lg:rounded-full w-full lg:w-[610px] 2xl:w-[640px] z-[999] flex lg:items-center px-6 pt-[20px] pb-[55px] lg:pb-[1px] text-sm lg:pt-0 lg:m-[35px] leading-snug"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          onDecline={() => { Cookies.remove("tagManagerCookieName") }}
        >
          This site uses cookies to improve your visiting experience, <Link href="/privacy-policy"><a className="underline inline-block">more info</a></Link>
        </CookieConsent>
      )}
      
      { pageProps.preview && <PreviewAlert/>}

      <div id="app">
        <Component {...pageProps} />
      </div>
    </>
  )
}