import { NextRequest, NextResponse } from "next/server";

// กำหนด site ที่ต้องการใช้สำหรับ local development
// เปลี่ยนค่านี้เป็น "portfolio" ถ้าต้องการทดสอบ portfolio site
const LOCAL_SITE: "jakkapet" | "portfolio" = "jakkapet";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

export function proxy(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get("host") || "";

    // ลบ port ออกสำหรับ local development
    const currentHost = hostname.replace(/:\d+$/, "");

    let site: string;

    // ตรวจสอบว่าเป็น local development หรือไม่
    const isLocalhost =
        currentHost === "localhost" ||
        currentHost === "127.0.0.1" ||
        currentHost.endsWith(".localhost");

    if (isLocalhost) {
        // Local development - ใช้ค่าจาก LOCAL_SITE หรือตรวจสอบ subdomain
        // รองรับ portfolio.localhost:3000 หรือ jakkapet.localhost:3000
        if (currentHost.startsWith("portfolio.")) {
            site = "portfolio";
        } else if (currentHost.startsWith("jakkapet.")) {
            site = "jakkapet";
        } else {
            // ใช้ค่า default ที่กำหนดไว้
            site = LOCAL_SITE;
        }
    } else {
        // Production - ตรวจสอบ domain และ subdomain
        if (
            currentHost === "portfolio.jakkapet.com" ||
            currentHost === "www.portfolio.jakkapet.com"
        ) {
            site = "portfolio";
        } else {
            // Default to jakkapet for any other domain
            site = "jakkapet";
        }
    }

    // Rewrite URL ไปยัง folder ที่ถูกต้อง
    // /page → /(sites)/jakkapet/page หรือ /(sites)/portfolio/page
    url.pathname = `/${site}${url.pathname}`;

    return NextResponse.rewrite(url);
}
