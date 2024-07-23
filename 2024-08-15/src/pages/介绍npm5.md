---
layout: default
---

#### 查看包信息
- `npm info/view <pkg>`：查看包的信息。

#### 安装生产依赖
- `npm ci`：在CI/CD环境中使用，基于`package-lock.json`或`npm-shrinkwrap.json`文件安装依赖，不执行任何`package.json`中的脚本。

#### 发布包
- `npm publish`：将本地包发布到npm仓库。