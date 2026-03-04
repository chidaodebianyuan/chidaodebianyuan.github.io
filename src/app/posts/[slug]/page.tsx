import { notFound } from "next/navigation";

const postsData: Record<string, {
  title: string;
  date: string;
  tags: string[];
  content: React.ReactNode;
}> = {
  "claudecode 安装教程": {
    title: "Claude Code 安装教程",
    date: "2026-03-03",
    tags: ["开发工具", "教程"],
    content: (
      <>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
          Claude Code 是一个强大的 AI 编程助手，可以帮助你更高效地开发代码。本教程将指导你完成安装过程。
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          系统要求
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          在安装 Claude Code 之前，请确保你的系统满足以下要求：
        </p>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li><strong>操作系统</strong>：Windows 10+、macOS 10.15+ 或 Linux</li>
          <li><strong>内存</strong>：至少 4GB RAM</li>
          <li><strong>网络</strong>：需要稳定的互联网连接</li>
          <li><strong>VS Code</strong>：版本 1.80 或更高版本</li>
        </ul>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          安装步骤
        </h2>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          方法一：通过 VS Code 扩展市场安装（推荐）
        </h3>

        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li><strong>打开 VS Code</strong> - 启动 Visual Studio Code 编辑器</li>
          <li><strong>打开扩展市场</strong> - 点击左侧活动栏中的"扩展"图标（或按 <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">Ctrl+Shift+X</code> / <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">Cmd+Shift+X</code>）</li>
          <li><strong>搜索 Claude Code</strong> - 在搜索框中输入 "Claude Code"，找到官方扩展（发布者为 Anthropic）</li>
          <li><strong>安装扩展</strong> - 点击"安装"按钮，等待安装完成</li>
          <li><strong>验证安装</strong> - 安装完成后，你应该能在 VS Code 的活动栏中看到 Claude Code 图标</li>
        </ol>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          方法二：命令行安装
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          如果你喜欢使用命令行，可以通过以下命令安装：
        </p>

        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto mb-6">
          <code>{`code --install-extension Anthropic.claude-code`}</code>
        </pre>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          初始配置
        </h2>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          1. 获取 API Key
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          Claude Code 需要 API Key 来连接 Anthropic 服务：
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>访问 <a href="https://console.anthropic.com" className="text-blue-600 dark:text-blue-400 underline">Anthropic Console</a></li>
          <li>登录你的账户（如果没有账户，需要先注册）</li>
          <li>进入 "API Keys" 页面</li>
          <li>点击 "Create Key" 创建新的 API Key</li>
          <li>复制生成的 API Key</li>
        </ol>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          2. 配置 API Key
        </h3>

        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>在 VS Code 中打开 Claude Code 扩展</li>
          <li>点击设置图标或进入扩展设置</li>
          <li>在 "API Key" 字段中粘贴你的 API Key</li>
          <li>保存配置</li>
        </ol>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          3. 配置模型选择（可选）
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          在扩展设置中，你可以选择：
        </p>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li><strong>Claude 3 Sonnet</strong>：平衡速度和质量</li>
          <li><strong>Claude 3 Opus</strong>：高质量输出</li>
          <li><strong>Claude 3 Haiku</strong>：快速响应</li>
        </ul>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          快捷键速查表
        </h2>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          Windows/Linux 快捷键
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left">功能</th>
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left">快捷键</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开 Claude Code</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+Shift+L</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开扩展市场</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+Shift+X</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开命令面板</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+Shift+P</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开终端</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+Shift+`</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">聊天窗口中发送消息</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+Enter 或 Shift+Enter</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">清除对话历史</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+L（在聊天窗口中）</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          macOS 快捷键
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left">功能</th>
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left">快捷键</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开 Claude Code</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Cmd+Shift+L</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开扩展市场</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Cmd+Shift+X</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开命令面板</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Cmd+Shift+P</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">打开终端</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Ctrl+`</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">聊天窗口中发送消息</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Cmd+Enter 或 Shift+Enter</td></tr>
              <tr><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">清除对话历史</td><td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Cmd+L（在聊天窗口中）</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          使用 Claude Code
        </h2>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          基本使用
        </h3>

        <ol className="list-decimal pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li><strong>打开对话</strong> - 点击 VS Code 活动栏中的 Claude Code 图标，在侧边栏中打开聊天窗口</li>
          <li><strong>提出问题</strong> - 在输入框中描述你的编程问题，Claude Code 会提供代码建议或解决方案</li>
          <li><strong>代码集成</strong> - 点击代码块右上角的"复制"或"插入"按钮，代码会自动插入到你的编辑器中</li>
        </ol>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          快速命令
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li><code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/explain</code> - 解释选中的代码</li>
          <li><code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/refactor</code> - 重构选中的代码</li>
          <li><code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/test</code> - 生成测试代码</li>
          <li><code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">/document</code> - 为代码生成文档</li>
        </ul>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          常见问题
        </h2>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          Q: 安装后无法连接怎么办？
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          <strong>A:</strong> 检查以下几点：
        </p>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>确保 API Key 正确无误</li>
          <li>检查网络连接</li>
          <li>尝试重启 VS Code</li>
          <li>查看扩展日志了解错误信息</li>
        </ul>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          Q: API Key 安全吗？
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          <strong>A:</strong> 你的 API Key 存储在本地，不会被上传到其他服务器。但请勿将其分享给他人。
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          Q: 如何更新 Claude Code？
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          <strong>A:</strong> VS Code 会自动检查更新，或在扩展市场中手动点击"更新"按钮。
        </p>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">
          Q: 支持哪些编程语言？
        </h3>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          <strong>A:</strong> Claude Code 支持所有主流编程语言，包括：
        </p>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mb-6">
          <li>Python、JavaScript/TypeScript、Java、C++、Go</li>
          <li>Rust、PHP、Ruby、Swift、Kotlin 等</li>
        </ul>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          总结
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Claude Code 是一个功能强大的编程辅助工具，通过上述步骤的安装和配置，你就可以开始使用它来提高编程效率。如果在使用过程中遇到问题，建议查阅官方文档或社区资源。祝你使用愉快！
        </p>
      </>
    ),
  },
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

export function generateStaticParams() {
  return [
    { slug: "claudecode 安装教程" },
    { slug: "hello-world" },
    { slug: "nextjs-tutorial" },
    { slug: "my-dev-journey" },
  ];
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
