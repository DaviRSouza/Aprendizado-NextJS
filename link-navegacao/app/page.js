import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // PASSAR PARAMETROS:
  // href={`/dashboard?name=${Nome}`}
  // OU
  // href={{ 
  //   pathname: 'dashboard'
  //   query: 'name=${Nome}
  // }}
  // REPLACE - esconde o historico da url
  // prefetch - {true} para ativar - {false} para desativar


  return (
      <>
        Pagina Inicial <br />
        <Link href="/dashboard">Dashboard</Link>
      </>
  )
}