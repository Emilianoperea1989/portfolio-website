import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emiliano Perea Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/images/logo-blanco.png'/>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
