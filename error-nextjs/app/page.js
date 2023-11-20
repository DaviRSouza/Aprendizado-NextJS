import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center mt-10 text-2xl">Pagina inicial</div>
      <Link
        href={"/blog"}
        className="border p-4 m-10 rounded-md hover:bg-slate-800 flex justify-center"
      >
        ir Para Blog
      </Link>
    </>
  )
}
