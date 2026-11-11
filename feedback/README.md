# AIVisionKit 反馈模块

本仓库当前只有发布后的静态页面，没有 VitePress 的 docs 源码。反馈功能由这里的独立 Vue 模块提供，入口已加入 `projects/AIVisionKit/en/latest/` 下的 HTML 页面。

修改表单：`FeedbackWidget.vue`；修改样式：`feedback.css`。来源为 `AIVisionKit docs`，版本取当前页面路径。

依赖安装后执行：

```powershell
npm ci
npm run feedback:build
```

构建只更新 `assets/feedback/` 和对应页面中的反馈模块标签，标签中的内容哈希用于更新浏览器缓存。重复执行不会重复插入入口。

本地也可以复用其他项目已安装的依赖：

```powershell
node feedback/build.mjs "E:\phpstudy_pro\WWW\githup\General-basic-courses-vite"
```

本模块使用现有正式反馈接口。手动提交测试会进入实际后台。
