import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-w-full">
          <h1 className="bg-blue-950 text 2xl flex justify-center">
            Root Layout
          </h1>
        </div>

        {children}
      </body>
    </html>
  )
}
