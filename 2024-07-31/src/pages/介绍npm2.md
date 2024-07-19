---
layout: default
---

## 1. 配置国内镜像源    

npm 默认的镜像源地址是 `https://registry.npmjs.org/`，国内访问较慢，通常会使用淘宝开源的镜像站 `https://registry.npmmirror.com/`。

可通过`npm config set registry https://registry.npmmirror.com/`手动切换镜像源；也可通过nrm、yrm等工具来管理。

<img src="/介绍npm2.png" />