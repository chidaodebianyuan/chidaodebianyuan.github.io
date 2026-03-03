import Link from "next/link";

const allPosts = [
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

export default function Posts() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            所有文章
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">
            在这里你可以找到我写的所有文章
          </p>

          <div className="grid gap-6">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
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
                            className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md text-xs"
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
        </div>
      </section>
    </div>
  );
}
