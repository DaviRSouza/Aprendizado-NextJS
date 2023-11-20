"use client"

export default function Error({ error, reset }) {
    return <div>
        <h2>Algo Aconteceu</h2>
        <button onClick={() => reset()}>Tentar Novamente</button>
    </div>
}