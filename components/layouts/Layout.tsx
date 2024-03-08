'use client'
import Header from '@/components/modules/Header/Header'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileNavbar from '@/components/modules/MobileNavbar/MobileNavbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
    </>
  )
}

export default Layout
