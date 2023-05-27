import { Inter } from 'next/font/google'
import Button2 from '@/components/IconButton/Button2'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <Button2 />
    </div>
  )
}

/* Nextjs ECommerce Tutorial For Beginners 2023 [Next.js, MongoDB & Tailwind]
Channel: Coding with Basir
https://www.youtube.com/watch?v=_IBlyR5mRzA&t=8760s

Note: For configuring Pretier and Extensions
*/
