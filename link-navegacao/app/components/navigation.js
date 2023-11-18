"use client";
import Link from "next/link";
import { usePathname, useRouter, useSelectedLayoutSegment } from "next/navigation";

const Navigation = ({ navLink }) => {
    //metodo pathname
    const pathname = usePathname()
    //metodo router
    const router = useRouter();
    //metodo segment (melhor jeito)
    const segmento = useSelectedLayoutSegment();
    
    return(
        <nav className="bg-slate-500">
            <ul>
                {navLink.map((link) =>{
                    const IsActive = pathname.endsWith(link.href)
                    return (
                    <li key={link.name} className={IsActive ? "bg-red-600":"bg-slate-500"}>
                        {/* <Link href={link.href}>{link.name}   {IsActive ? 'Ativo' : ""}</Link> */}

                        <button type="button" onClick={() => router.push(link.href)}>
                            {link.name}
                        </button>
                    </li>
                    );
                })}
            </ul>
        </nav>
    )
}
export default Navigation