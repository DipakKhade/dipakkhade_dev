import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeSwitch from '@/components/theme-switcher'
import ThemeContextProvider from '@/context/theme-context'
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import {NextAuthProvider} from './AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dipak | Personal Portfolio',
  description: 'A Portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-gray-50 dark:bg-neutral-950  dark:text-zinc-200 text-zinc-800`}>
    
        <ThemeContextProvider>
        <NextAuthProvider>
        <Header/>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
<NextTopLoader color='#2196F3'/>
        {children}
        <ThemeSwitch/>
        </NextAuthProvider>
        </ThemeContextProvider>
       
        </body>
    </html>
  )
}
