import Footer from '@/components/shared/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BotNavbar from '@/components/shared/BotNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rest Haven Memorial Park',
  description: 'Made by Armand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-neutral-100 min-h-screen w-full">
          {children}
          <BotNavbar />
          <Footer />
        </main>
      </body>
    </html>
  )
}
