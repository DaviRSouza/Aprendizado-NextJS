import Link from "next/link"


const BlogLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-w-full">
            <h1 className="bg-slate-500 text 2xl flex justify-center">
                Blog Layout
            </h1>
            <section>{children}</section>
            <Link
                href={"/"}
                className="border p-4 m-10 rounded-md hover:bg-slate-800 flex justify-center"
            >
                ir Para Home
            </Link>
        </div>
    )
}

export default BlogLayout