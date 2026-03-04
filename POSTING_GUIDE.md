# 发布新文章指南

## 步骤

### 1. 创建 Markdown 文件

在 `content/posts/` 目录下创建新的 `.md` 文件，文件名使用**英文 slug**（如 `my-new-post.md`）。

文件内容格式：

```markdown
+++
date = '2026-03-04T00:00:00+08:00'
draft = false
title = '你的文章标题'
tags = ['标签 1', '标签 2']
+++

这里是文章内容...

## 可以使用 Markdown 语法

- 标题：使用 # ## ###
- 列表：使用 - 或 1.
- 代码块：使用 ```language
- 链接：使用 [文本](url)
```

### 2. 构建并部署

```bash
# 构建项目
npm run build

# 复制构建产物到根目录
cp -r out/* .

# 提交更改
git add -A
git commit -m "Add: 新文章标题"

# 推送到 main 分支
git push origin main

# 部署到 gh-pages
npx gh-pages -d out -b gh-pages
```

### 3. 等待部署

GitHub Pages 通常在 2-5 分钟内完成更新。

---

## 注意事项

| 项目 | 说明 |
|------|------|
| **文件命名** | 使用英文 slug（如 `my-post.md`），避免中文导致 URL 编码问题 |
| **日期格式** | `YYYY-MM-DDTHH:MM:SS+08:00` |
| **草稿** | 设置 `draft = true` 的文章不会显示 |
| **标签** | 使用数组格式，如 `['技术', '教程']` |

---

## 示例文件

```
content/posts/
├── hello-world.md
├── claude-code-installation.md
├── my-dev-journey.md
├── nextjs-tutorial.md
└── your-new-post.md  # 新文件
```
