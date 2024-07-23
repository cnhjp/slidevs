---
layout: default
---

## 7. npx

npx 是随 Node.js 安装附带的另一个指令，可以更方便的调用 Node.js 生态中的包 (通常是一些 Node CLI 工具)，

使用 npx，可以在不全局安装一个命令行工具的情况下直接运行它，同时也不会污染全局环境。

比如 nodemon 这个 CLI 工具，可以在开发时替代 node 指令执行 js 文件，文件修改后自动重新执行。

```shell
# 直接通过npx 调用执行
npx nodemon test.js

# 等价于
# ① 全局安装CLI工具
npm i -g nodemon
# ② 调用执行
nodemon test.js

```