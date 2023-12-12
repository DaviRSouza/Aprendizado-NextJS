import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const limite = searchParams.get("limite")
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limite}`);
    
    if(!res.ok) throw new Error("Problemas com o Fetch");
    
    const data = await res.json();
    return NextResponse.json({ data });
}

export async function POST(request) {
    const { searchParams } = new URL(request.url)
    const limite = searchParams.get("limite")
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Meu Titulo"
            })
        });
    
    if(!res.ok) throw new Error("Problemas com o Fetch");
    
    const data = await res.json();
    return NextResponse.json({ data });
}