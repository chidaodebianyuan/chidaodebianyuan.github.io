import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Posts() {
  const allPosts = getAllPosts();

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
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                      {post.content.slice(0, 150).replace(/[#*`]/g, '').trim()}...
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
