import Header from '@/components/header'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <Header path={router.asPath} />
      
      {children}
    </>
  )
}