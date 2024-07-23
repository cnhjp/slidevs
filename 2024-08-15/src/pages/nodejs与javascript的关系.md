---
layout: default
---

# Node.js与JavaScript的关系

<img src="/nodejs与js关系.png" class="scale-120" />

这里我们从下往上梳理。

最下面一层是脚本语言规范（Spec） ，由于我们讲的是 Node.js，所以这里最下层只写 ECMAScript。

再往上一层就是对于该规范的实现了，如 JavaScript、JScript 以及 ActionScript 等都属于对 ECMAScript 的实现。

然后就是执行引擎，JavaScript 常见的引擎有 V8、SpiderMonkey、QuickJS 等（其相关 Logo 如下图所示）。

最上面就是运行时环境了，比如基于 V8 封装的运行时环境有 Chromium、Node.js、Deno、CloudFlare Workers 等等。而我们所说的 Node.js 就是在运行时环境这一层。

可以看到，JavaScript 在第二层，Node.js 则在第四层。