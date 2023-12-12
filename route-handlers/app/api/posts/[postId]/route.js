import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const postId = params.postId

    const res = await fetch(`https://jsonplaceholder.typicode.com/api/posts/${postId}`)

    if(!res.ok) throw new Error("Erro de Fetch")

    const data = await res.json()

    return NextResponse.json({ data })
}