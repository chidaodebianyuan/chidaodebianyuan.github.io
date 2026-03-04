import Link from "next/link";

const featuredPosts = [
  {
    slug: "claudecode 安装教程",
    title: "Claude Code 安装教程",
    excerpt: "本教程将指导你完成 Claude Code 的安装过程，包括系统要求、安装步骤、初始配置和快捷键速查。",
    date: "2026-03-03",
    tags: ["开发工具", "教程"],
  },
  {
    slug: "hello-world",
    title: "你好，世界！我的博客上线了",
    excerpt: "这是我的第一篇博客文章。在这里，我将分享我的技术学习心得、生活感悟以及各种有趣的发现。",
    date: "2026-03-03",
    tags: ["生活", "开篇"],
  },
  {
    slug: "nextjs-tutorial",
    title: "Next.js 入门教程：从零开始搭建博客",
    excerpt: "本文将详细介绍如何使用 Next.js 和 Tailwind CSS 快速搭建一个现代化的个人博客。",
    date: "2026-03-02",
    tags: ["技术", "Next.js"],
  },
  {
    slug: "my-dev-journey",
    title: "我的开发者之路",
    excerpt: "回顾我成为一名开发者的历程，分享学习编程过程中的经验和教训。",
    date: "2026-03-01",
    tags: ["生活", "成长"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            欢迎来到 xyd 的博客
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            这里是我的数字花园，记录技术学习、生活感悟与思考。希望能对你有所启发。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/posts"
              className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              浏览文章
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-10">
            最新文章
          </h2>
          <div className="grid gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="p-6 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <Link href={`/posts/${post.slug}`}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("zh-CN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
            >
              查看所有文章
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
