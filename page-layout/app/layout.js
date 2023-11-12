import Link from 'next/link';
import './globals.css'
export const metadata = {
  title: 'Aqui coloca o titulo',
  description: 'Aqui a descrição',
}

export default function RootLayout({ children }) {
  const valor = Math.floor(Math.random() * 30);
  return (
    <html lang="en">
      <body>
        <nav className='bg-red-600'>
          <ul>
            <li>{ valor }</li>
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
              <Link href="/dashboard" >Dashboard</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
