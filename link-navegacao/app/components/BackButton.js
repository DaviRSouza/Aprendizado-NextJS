"use client"
import { useRouter } from "next/router"

const BackButton = props => {
    const router = useRouter();
  return (
    <button type='button' onClick={() => router.back}>voltar</button>
  )
}

backButton.propTypes = {}

export default backButton