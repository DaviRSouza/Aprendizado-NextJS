import { NextResponse } from "next/server";

export function middleware(request) {
    console.log('--- MiddleWare ---');

    // const requestHeaders = new Headers(request.headers)

    // requestHeaders.set("x-ola-do-middleware", "Ola")

    let isAuthenticated = false;

    if (!isAuthenticated) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "Usuario Não Authenticado"
            })
        )
    }


    const response = NextResponse.next();
    // const response = NextResponse.next({
    //     request: {
    //         headers: requestHeaders,
    //     },
    // });

    // response.headers.set("x-ola-do-middleware2", "Novamente");

    // console.log(response)

    return response;

    // const response = NextResponse.next();
    // response.cookies.set("CookieZinho", "cookie de coisa");


    // let GetCookie = request.cookies.get("CookieZinho")
    // console.log(GetCookie)

    // console.log(request.cookies.has(CookieZinho))
    // console.log(request.cookies.delete(CookieZinho))
    // console.log(request.cookies.has(CookieZinho))



    // if(request.nextURL.pathname.startswith("/about")) {
    //     console.log("Entrou")
    // }
    // return NextResponse.redirect(new URL("/", request.url));
    //                     rewrite 
}

export const config = {
    matcher: ["/about/:path*", "/dashboard/:path*", "/auth/:path*"]
}