import './globals.css'
import type { Metadata } from 'next'
import { Inter,Space_Grotesk } from 'next/font/google'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'],
weight:['300','400','500','600','700']

})
   
export const metadata: Metadata = {
  title:'priceProbe',
  description: 'Track your product prices with a single click and save money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
        <Navbar />

        {children}
        </main>
        </body>
    </html>
  )
}
