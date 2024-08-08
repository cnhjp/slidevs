---
layout: default
---

## ES Module

 ECMAScript 6 (ES2015/ES6) 中引入的一项重要特性，旨在取代 CommonJS 和 AMD 规范，成为 JavaScript 模块化的主要标准。

 **与 CommonJS 规范的区别**

ESM 模块的导入和导出遵循 ECMAScript 官方规范，与 CommonJS 不同。ESM 模块的导入使用 import 关键字，导出使用 export 关键字。

默认情况下 Node.js 会将 `.js` 后缀文件识别为 CJS 模块。

**要让 Node.js 正确识别，主要有两种方式：**
1. 使用 `.mjs` 作为文件后缀名 (例如 hello.mjs)；
2. package.json 中 `type` 字段设置为 `module`。