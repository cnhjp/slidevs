---
layout: default
---

# Node.js用途

<span></span>

在 Node.js 创造之初，主推的是“单线程”“天然异步 API”下的高性能运行时。单线程，意味着业务逻辑不用考虑各种锁的问题；天然异步 API，意味着可以方便地处理并发。这种方式自然适合做服务端。

Node.js 的一些内置模块如 http、net、fs 等，就是为服务端设计的。无论是 HTTP 服务端，还是其他一些 TCP、UDP 的服务端。各种框架开始冒出，最有名的如 Express.js、Koa.js 等。

除了服务端外，Node.js 提供的形如 tty、repl、readline 等内置模块，同时又为创造各种工具提供了方便的能力。

Node.js 还有一个用途就是桌面端。一路发展过来，从 NW.js到 Electron.js。Visual Studio Code，1Password、钉钉等都是用Electron开发的。

目前来看，**Node.js 最大的场景已经变成了泛前端领域的工具链了**。也正是因为泛前端生态的涌入，Node.js 的趋势越来越往前端生态的补足发展，加上桌面端领域，统称泛前端，服务端领域日渐式微。

<img src="/nodejs用途.png" class="scale-150 transition bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" v-click />