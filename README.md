# 照片回忆录项目

一个温馨浪漫的照片回忆录项目，记录美好回忆的数字珍藏。

## 功能特性

- ✨ 精美用户选择界面
- 📅 时间线展示回忆章节
- 📷 照片和视频浏览
- 💬 弹幕互动功能
- 🎵 背景音乐播放
- 🛠️ 完整的管理后台
- 💖 爱心飘落特效

## 技术栈

- **后端**: Node.js + Express
- **数据库**: MongoDB
- **前端**: HTML + CSS + JavaScript
- **样式**: Tailwind CSS
- **图标**: Font Awesome

## 项目结构

```
photo-memoir/
├── models/          # 数据模型
│   ├── User.js
│   ├── Chapter.js
│   ├── Photo.js
│   ├── Video.js
│   └── Comment.js
├── routes/        # API路由
│   ├── users.js
│   ├── chapters.js
│   ├── photos.js
│   ├── videos.js
│   └── comments.js
├── public/        # 前端文件
│   ├── index.html
│   ├── admin.html
│   └── uploads/
├── server.js     # 服务器入口
├── package.json
└── README.md
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动服务器

```bash
npm start
```

### 开发模式

```bash
npm run dev
```

## 使用说明

### 访问应用

打开浏览器访问: `http://localhost:3000`

### 管理后台

访问: `http://localhost:3000/admin.html`

## 环境变量

创建 `.env` 文件配置环境变量：

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/photo-memoir
```

## 许可证

MIT License