import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">ไม่พบหน้าที่ต้องการ</h2>
        <p className="mt-4 text-lg text-gray-600">Subdomain นี้ไม่มีอยู่ในระบบ</p>
        <Link
          href="https://jakkapet.com"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </main>
  );
}
