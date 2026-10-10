import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "KeepAlive",
  description: "Sistem personal de evaluare biologică și prevenție — bazat pe scoruri validate și research publicat",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "KeepAlive",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <img
                src="/icon.png"
                alt="KeepAlive"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-700">KeepAlive</h1>
                <p className="text-xs text-gray-500">Evaluare biologică · Prevenție</p>
              </div>
            </Link>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
        <footer className="mt-16 border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          KeepAlive · uz personal · nu este dispozitiv medical · discută rezultatele cu un medic
        </footer>
      </body>
    </html>
  );
}
