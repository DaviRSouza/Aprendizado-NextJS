import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-500">
        <h1 className="bg-red-600" >Navegação</h1>
        {children}
      </body>
    </html>
  )
}
