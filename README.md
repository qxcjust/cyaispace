# CYAI Space 公司网站

这是一个使用 HTML、CSS 和 JavaScript 构建的现代化公司网站，部署在 GitHub Pages 上。

## 网站特性

- ✨ 响应式设计，支持各种设备
- 🎨 现代化的渐变设计和动画效果
- 📱 移动端友好
- 🚀 快速加载速度
- 🔧 自动部署到 GitHub Pages

## 本地预览

直接在浏览器中打开 `index.html` 文件即可预览网站。

## 部署到 GitHub

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新的仓库（例如：`cyaispace-website`）

### 2. 推送代码

```bash
git remote add origin https://github.com/YOUR_USERNAME/cyaispace-website.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库的 **Settings** > **Pages**
2. 在 **Source** 部分选择 **GitHub Actions**
3. 保存后，GitHub Actions 会自动部署网站

### 4. 配置自定义域名

#### 在 GitHub 中配置：
1. 进入仓库的 **Settings** > **Pages**
2. 在 **Custom domain** 中输入：`www.cyaispace.tech`
3. 点击 **Save**
4. 勾选 **Enforce HTTPS**

#### 在域名提供商处配置 DNS：

在你的域名管理面板中添加以下 DNS 记录：

**CNAME 记录：**
- 主机记录：`www`
- 记录类型：`CNAME`
- 记录值：`YOUR_USERNAME.github.io`

**A 记录（可选，用于根域名重定向）：**
- 主机记录：`@`
- 记录类型：`A`
- 记录值：`185.199.108.153`
- 记录值：`185.199.109.153`
- 记录值：`185.199.110.153`
- 记录值：`185.199.111.153`

### 5. 等待 DNS 生效

DNS 配置可能需要几分钟到几小时才能完全生效。

## 项目结构

```
cyaispace/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── index.html               # 主页面
├── styles.css               # 样式文件
├── script.js                # JavaScript 交互
├── CNAME                    # 自定义域名配置
├── .gitignore              # Git 忽略文件
└── README.md               # 说明文档
```

## 自定义内容

你可以根据需要修改以下内容：

- **公司信息**：编辑 `index.html` 中的文本内容
- **联系方式**：更新邮箱、地址和电话
- **服务项目**：修改服务卡片的内容
- **颜色主题**：在 `styles.css` 中调整颜色值
- **Logo 和品牌**：替换 `.logo` 类的内容

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- GitHub Pages
- GitHub Actions

## 许可证

© 2026 CYAI Space. 保留所有权利。

## 联系方式

- 邮箱：contact@cyaispace.tech
- 网站：www.cyaispace.tech
