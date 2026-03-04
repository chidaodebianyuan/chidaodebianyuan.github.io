export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            关于我
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="flex items-start gap-6 mb-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center text-4xl font-bold text-zinc-600 dark:text-zinc-300 flex-shrink-0">
                X
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  xyd
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  热爱技术的开发者
                </p>
              </div>
            </div>

            <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p>
                你好！我是 <strong>xyd</strong>，一名热爱技术的开发者。欢迎来到我的个人博客！
              </p>

              <p>
                在这个数字花园里，我会分享：
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>📝 技术学习心得与教程</li>
                <li>💡 项目实践经验与总结</li>
                <li>🌟 生活感悟与思考</li>
                <li>📚 好书、好工具推荐</li>
              </ul>

              <p>
                我相信通过持续学习和分享，可以让自己成长得更快，也能帮助到更多人。
                如果你有任何问题或想法，欢迎与我交流！
              </p>

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
                联系方式
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/xyd"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                <a
                  href="https://twitter.com/xyd"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                <a
                  href="mailto:xyd@example.com"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
