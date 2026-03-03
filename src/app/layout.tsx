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
  title: "xyd 的博客",
  description: "xyd 的个人博客 - 分享技术、生活与思考",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              xyd 的博客
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                首页
              </a>
              <a href="/posts" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                文章
              </a>
              <a href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                关于
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6">
          <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 dark:text-zinc-500 text-sm">
            <p>© 2026 xyd 的博客。All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
