export default function page({ params }) {
    
  return (
    <>meu post:{params.postid} </>
  )
}

export async function generateMetadata({ params }){
  return {
    title: `Post ${params.slug}`,
    description: `Pagina do Post ${params.slug}`
  }
}

//gerar conteudos estaticos sem ter que renderizar antes
export async function generateStaticParams(){
  const request = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await request.json()
  return posts.map((post) => ({
    postid: String(post.id),
  }))
}