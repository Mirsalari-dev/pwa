import { type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  if (token && pathname === "/auth") {
    return Response.redirect(new URL("/app", req.url));
  }

  if (!token && !["/", "/auth", "/install"].includes(pathname)) {
    // return NextResponse.redirect(new URL("/auth", req.url));
    return Response.redirect(new URL("/auth", req.url));

  }

  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!favicon.ico|workbox*.js|workbox-c2c0676f.js|sw*.js|manifest.json|_next/static|_next/image|image).*)",
  ],
};
