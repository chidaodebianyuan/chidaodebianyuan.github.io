import { notFound } from "next/navigation";
import { getPostSlugs, getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500 mb-4">
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
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <hr className="my-12 border-zinc-200 dark:border-zinc-800" />

        <nav className="flex justify-between">
          <a
            href="/posts"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回文章列表
          </a>
          <a
            href="/"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            返回首页
          </a>
        </nav>
      </div>
    </article>
  );
}
