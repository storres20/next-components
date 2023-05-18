import Image from 'next/image'
import { Inter } from 'next/font/google'
/* import Navbar from '@/components/Navbar' */
import SideNavbar from '@/components/SideNavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <h1>Hello world</h1> */}
      {/* <Navbar /> */}
      <SideNavbar />
    </div>
  )
}
