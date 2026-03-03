import { notFound } from "next/navigation";

const postsData: Record<string, {
  title: string;
  date: string;
  tags: string[];
  content: React.ReactNode;
}> = {
  "hello-world": {
    title: "你好，世界！我的博客上线了",
    date: "2026-03-03",
    tags: ["生活", "开篇"],
    content: (
      <>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
          这是我的第一篇博客文章，标志着我个人博客的正式上线！
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          为什么创建这个博客？
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          我一直相信，最好的学习方式是通过分享。当你尝试向他人解释一个概念时，
          你会发现自己对它的理解也变得更加深刻。
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          这个博客将成为我的数字花园，记录我在学习和工作中遇到的有趣事物。
          我希望这里不仅能帮助自己整理思路，也能为看到这些文章的读者带来一些价值。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          这里会有什么内容？
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>技术教程和心得体会</li>
          <li>项目开发经验分享</li>
          <li>读书笔记和工具推荐</li>
          <li>生活中的思考和感悟</li>
        </ul>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          开始旅程
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          如果你对这些话题感兴趣，欢迎关注我的博客。我会不定期更新文章，
          分享我的所见所学。
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          感谢你的阅读，希望我们能在这里一起成长！🌱
        </p>
      </>
    ),
  },
  "nextjs-tutorial": {
    title: "Next.js 入门教程：从零开始搭建博客",
    date: "2026-03-02",
    tags: ["技术", "Next.js"],
    content: (
      <>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
          本文将带你从零开始，使用 Next.js 和 Tailwind CSS 搭建一个现代化的个人博客。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          什么是 Next.js？
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          Next.js 是一个基于 React 的全栈框架，它提供了许多开箱即用的功能，
          包括服务端渲染、静态生成、API 路由等。这使得构建高性能的 Web 应用变得异常简单。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          快速开始
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          使用 create-next-app 可以快速创建一个新的 Next.js 项目：
        </p>

        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto mb-6">
          <code>{`npx create-next-app@latest my-blog --typescript --tailwind`}</code>
        </pre>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          Tailwind CSS 的优势
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          Tailwind CSS 是一个实用优先的 CSS 框架，它提供了一系列预定义的类，
          让你可以直接在 HTML 中编写样式，无需离开你的标记语言。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          总结
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Next.js 和 Tailwind CSS 的组合非常适合快速搭建个人博客。
          它们提供了良好的开发体验和优秀的性能表现。
        </p>
      </>
    ),
  },
  "my-dev-journey": {
    title: "我的开发者之路",
    date: "2026-03-01",
    tags: ["生活", "成长"],
    content: (
      <>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
          回顾我成为一名开发者的历程，这真是一段充满挑战和收获的旅程。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          起点
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          我的编程之旅始于大学时期的一门选修课。还记得第一次在屏幕上打印出
          "Hello, World!" 时的兴奋感。虽然只是一个简单的程序，但它为我打开了一扇通往新世界的大门。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          遇到的挑战
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          学习编程的路上并不总是一帆风顺。记得有一次，为了调试一个 bug，
          我花了整整两天的时间。最后发现问题只是一个小小的拼写错误。
          虽然当时很沮丧，但现在回想起来，正是这些经历让我成长。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          收获与建议
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          如果你想学习编程，我的建议是：
        </p>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>从基础开始，不要急于求成</li>
          <li>多动手实践，光看不练是没用的</li>
          <li>学会查阅官方文档</li>
          <li>加入社区，与他人交流</li>
          <li>不要害怕犯错，错误是最好的老师</li>
        </ul>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          编程是一场马拉松，而不是短跑。保持耐心，持续学习，你一定能到达想去的地方。
        </p>
      </>
    ),
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = postsData[slug];

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
          {post.content}
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
