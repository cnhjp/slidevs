---
layout: default
---

## CommonJS

CommonJS 是一种 JavaScript 环境中模块化编程的规范。它定义了一套模块化导入和导出的语法和机制，旨在解决 JavaScript 在模块化方面的缺陷。

<div class="flex justify-between">
<div>
<h3>导出模块</h3>

<div class="flex" v-click>
<div>
1. module.exports

```javascript
const hello = (name) => {
  console.log(`hello ${name}`)
  }
const userInfo = {
  name: 'forever',
  age: 18
}

module.exports = {
userInfo,
hello
}

```
</div>

<div class="w-4"></div>

<div>
2. exports

```javascript
exports.hello = (name) => {
  console.log(`hello ${name}`)
  }
exports.userInfo = {
  name: 'forever',
  age: 18
}

```
</div>



</div>
</div>

<div v-click>
<h3>导入模块</h3>

1. 完整引入

```javascript
const context = require('./exports')
context.hello(context.userInfo.name)

```

2. 结构引入(支持)

```javascript
const { hello: logHello, userInfo } = require('./exports')
logHello(userInfo.name)

```
</div>
</div>
