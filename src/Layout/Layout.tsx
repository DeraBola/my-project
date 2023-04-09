import React, { ReactNode } from 'react'
import NavBar from '@/component/NavBar'
import Footer from '@/component/Footer'
 
 
interface LayoutProps{
  children: ReactNode
}
export default function Layout({children}: LayoutProps) {
  return (
    <div>
      <NavBar />
      { children }
      <Footer />
    </div>
  )
}
 