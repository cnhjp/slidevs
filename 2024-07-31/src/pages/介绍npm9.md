---
layout: default
---

## 5. package-lock.json

主要用于锁定项目依赖的版本号，以确保在不同的机器和环境中安装相同的依赖和版本。

拿基线版移动端项目来看。

<div class="flex">
    <img src="/介绍npm9.png" class="w-1/2 mr-2" />

    version: 实际版本号
    resolved: 包下载的地址
    cpu: 当前包支持的 CPU 架构
    dev: 是否为开发依赖
    license: 当前包的许可证类型
    optional: 是否为可选依赖
    os: 当前包支持的操作系统
    integrity: 用于安全校验的哈希值，确保下载的包
    与发布的包一致
    dependencies: 当前包依赖的所有包的版本信息
    engines: 当前包支持的 Node.js 版本
</div>