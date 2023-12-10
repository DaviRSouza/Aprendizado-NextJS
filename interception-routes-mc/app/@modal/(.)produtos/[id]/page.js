import Modal from "@/app/components/Modal";
import ProdutoFrame from "@/app/components/ProdutoFrame";

async function getProdutoById(produtoId) {
    const request = await fetch(`https://jsonplaceholder.typicode.com/photos/${produtoId}`);
    const data = await request.json();
    return data;
}

//route intercerptor
export default async function ModalProduto({ params }) {
    const produto = await getProdutoById(params.id);
    return (
        <Modal>
            <ProdutoFrame {...produto} />
        </Modal>
    )
}