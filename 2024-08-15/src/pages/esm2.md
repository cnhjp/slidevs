---
layout: default
---

### 导入导出

<div class="flex justify-between">
<div>
1. 普通导入导出

```javascript
// et.mjs
export function hello(name) {
  console.log(`hello ${name}`)
}
export default {
  userInfo: {
    name: 'forever', 
    age: 18
  }
}

// it.mjs
import md,{hello} from './et.mjs'

hello(
    md.userInfo.name
)
```
</div>

<div>
2. 导入导出所有对象

```javascript
// 导出所有模块成员
export * from './et.js'

// 导入所有模块成员
import * as md from './it.mjs'
```
</div>

<div>
3. 重新导出

```javascript
export { hello,
 default as libData 
} from './lib.js'

export * from './util.js'
```
</div>
</div>