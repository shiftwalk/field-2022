import '@/styles/main.css'
import PreviewAlert from '@/components/preview-alert';
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      { pageProps.preview && <PreviewAlert/>}

      <Component {...pageProps} />
    </>
  )
}