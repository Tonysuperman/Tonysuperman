# 学术个人主页 - GitHub Pages 版本

这是一个简洁、现代的学术个人主页，专为研究人员和学者设计。采用纯 HTML/CSS/JavaScript 构建，可直接部署到 GitHub Pages。

## 🎨 特点

- **简洁高级的学术审美**：大量留白，清晰的视觉层次
- **响应式设计**：完美适配桌面、平板和手机
- **可筛选项目列表**：点击分类标签即可筛选项目
- **数据分离**：所有项目、经历和审稿信息都在独立的 JS 文件中，易于更新
- **零依赖**：无需构建工具，纯静态文件
- **快速加载**：轻量级代码，优秀的性能表现

## 📁 文件结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── data.js            # 数据文件（项目、经历、审稿信息）
├── main.js            # 交互逻辑
├── assets/            # 资源文件夹
│   └── profile.jpg    # 个人头像（请替换）
└── README.md          # 说明文档
```

## 🚀 部署到 GitHub Pages

### 方法一：直接推送（推荐）

1. **创建 GitHub 仓库**
   ```bash
   # 如果还没有初始化 git
   git init
   git add .
   git commit -m "Initial commit: Academic Portfolio"
   ```

2. **关联远程仓库**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，folder 选择 `/ (root)`
   - 点击 Save

4. **访问你的网站**
   - 等待几分钟后，访问 `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 方法二：使用 gh-pages 分支

1. **创建 gh-pages 分支**
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   git commit --allow-empty -m "Initializing GitHub Pages"
   git checkout main
   git merge main
   git push origin gh-pages
   ```

2. **在 GitHub 设置中选择 gh-pages 分支作为 Pages 源**

## ⚙️ 自定义内容

### 1. 修改个人信息

编辑 `data.js` 文件中的以下内容：

- **projects** - 项目列表
  ```javascript
  const projects = [
      {
          id: 1,
          title: "项目名称",
          description: "项目描述",
          category: "ai", // ai, frontend, fullstack, tool
          tags: ["标签 1", "标签 2"],
          links: {
              github: "GitHub 链接",
              demo: "演示链接"
          }
      }
  ];
  ```

- **experience** - 经历时间线
  ```javascript
  const experience = [
      {
          id: 1,
          title: "职位/角色",
          organization: "机构名称",
          date: "时间范围",
          description: "工作描述"
      }
  ];
  ```

- **reviewerService** - 审稿服务
  ```javascript
  const reviewerService = [
      {
          id: 1,
          name: "审稿类型",
          detail: "详细描述"
      }
  ];
  ```

### 2. 更换头像

将你的头像图片放在 `assets/` 文件夹中，命名为 `profile.jpg`，或者修改 `index.html` 中的图片路径。

### 3. 修改社交链接

在 `index.html` 中找到 `.social-links` 部分，修改链接地址。

### 4. 调整研究方向标签

在 `index.html` 中找到 `.research-tags` 部分，修改或添加标签。

### 5. 自定义颜色主题

在 `styles.css` 的 `:root` 部分修改 CSS 变量：

```css
:root {
    --color-primary: #2563eb;        /* 主色调 */
    --color-text: #1a1a1a;           /* 文字颜色 */
    --color-bg: #ffffff;             /* 背景颜色 */
    /* ... 其他颜色变量 */
}
```

## 📱 响应式断点

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🎯 项目分类

当前支持的项目分类：
- `all` - 全部项目
- `ai` - AI 应用
- `frontend` - 前端开发
- `fullstack` - 全栈项目
- `tool` - 效率工具

你可以在 `data.js` 中为项目指定不同的分类。

## 🌟 功能亮点

1. **项目筛选**：点击分类按钮，实时筛选显示对应项目
2. **平滑滚动**：优雅的页面滚动动画
3. **悬停效果**：卡片和项目链接的微妙悬停动画
4. **头像降级处理**：如果没有头像图片，自动显示占位符
5. **SEO 友好**：语义化 HTML 标签

## 🛠️ 本地开发

直接在浏览器中打开 `index.html` 即可预览，或使用本地服务器：

```bash
# Python 3
python3 -m http.server 8080

# 或使用 VS Code 的 Live Server 扩展
```

然后访问 `http://localhost:8080`

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**Built with simplicity and clarity in mind.**
