---
layout: default
---

#### 卸载依赖
- `npm uninstall <package>`：从`node_modules`目录和`package.json`文件中移除指定的包。

#### 列出依赖
- `npm list`：显示当前项目的所有依赖。
- `npm list <package>`：显示指定包的信息。
- `npm ls -g`：列出全局安装的包。

#### 检查依赖
- `npm outdated`：列出过时的包和它们的最新版本。
- `npm check`：验证`node_modules`中的包是否与`package.json`和`package-lock.json`文件中的条目匹配。

#### 执行脚本
- `npm run <script>`：运行`package.json`中的预定义脚本。

#### 清理缓存
- `npm cache clean --force`：清理npm缓存。
