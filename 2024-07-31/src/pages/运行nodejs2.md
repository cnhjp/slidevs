---
layout: default 
---

## 2. 命令行执行

通过`node`命令直接执行脚本文件，如`node test.js`，`curl https://script.sugarat.top/js/tests/test.js | node`。

## 3. 直接执行

```Hashbang (也称为 shebang) 是一种特殊的注释，以 #! 开头，通常出现在可执行的脚本文件的第一行，用于告诉系统要使用哪个解释器来执行该脚本文件。```

```js
#!/usr/bin/env node

const hello = 'hello world'
console.log(hello)
```

然后在命令行执行`chmod +x test.js`，然后执行`./test.js`即可。