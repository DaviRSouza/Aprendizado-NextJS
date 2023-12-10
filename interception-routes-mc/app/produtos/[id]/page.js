import ProdutoFrame from "@/app/components/ProdutoFrame";

async function getProdutoById(produtoId) {
    const request = await fetch(`https://jsonplaceholder.typicode.com/photos/${produtoId}`);
    const data = await request.json();
    return data;
}

export default async function Produto({ params }) {
    const produto = await getProdutoById(params.id);
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-500">
                <ProdutoFrame {...produto}/>
            </div>
        </div>
    )
}