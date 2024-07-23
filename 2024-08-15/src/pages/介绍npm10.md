---
layout: default
---

## 6. .npmrc 文件

.npmrc 文件是 NPM 的配置文件，它包含了一些 NPM 的配置信息，比如代理、镜像、命令别名等。通过修改 .npmrc 文件，可以更改 NPM 的默认行为。

例如修改 registry 配置，让项目协作同学不用主动设置镜像源的地址，也能和自己保持一致。

```
# .npmrc
registry=https://registry.npmjs.org/
```