export default function page({ params }) {
    console.log(params.slug);
  return (
    <div>
        Dados dinamicos: { params.slug } 
    </div>
  )
}

export async function generateMetadata({ params }){
  return {
    title: `Pagina de ${params.slug}`,
    description: `Pagina de ${params.slug}`
  }
}
