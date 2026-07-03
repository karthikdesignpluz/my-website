import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southern Hide Exports",
  description: "Premium leather and raw hide export services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[radial-gradient(circle_at_top,rgba(248,250,252,1),rgba(241,245,249,0.9))] text-slate-900">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
          <div className="container flex h-20 items-center justify-between gap-6">
            <a href="/" className="font-semibold text-lg text-slate-900">
              Southern Hide Exports
            </a>
            <nav className="hidden items-center gap-6 md:flex text-sm text-slate-700">
              <a href="/" className="hover:text-slate-900">Home</a>
              <a href="/about" className="hover:text-slate-900">About</a>
              <a href="/service" className="hover:text-slate-900">Service</a>
              <a href="/blog" className="hover:text-slate-900">Blog</a>
              <a href="/contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white/80">
          <div className="container py-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Southern Hide Exports. Crafted for the global leather trade.
          </div>
        </footer>
      </body>
    </html>
  );
}
