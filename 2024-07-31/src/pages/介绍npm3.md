---
layout: default
---

## 2. npm常用指令

npm（Node Package Manager）是Node.js的包管理器，用于安装、卸载、更新和管理Node.js项目的依赖包。以下是一些常用的npm指令：

#### 初始化项目
- `npm init`：创建一个新的`package.json`文件，用于记录项目元数据和依赖。
- `npm init -y`：快速初始化项目，使用默认值生成`package.json`文件。

#### 安装依赖
- `npm install <package>`：安装指定的包到`node_modules`目录，并将其添加到`package.json`的`dependencies`列表中。
- `npm install <package> --save-dev`：将包添加到`devDependencies`列表中，用于开发阶段的依赖。
- `npm install <package> -g`：全局安装包，通常用于命令行工具。

#### 更新依赖
- `npm update <package>`：更新指定的包到最新版本。
- `npm update`：更新所有已安装的包到它们各自的最新版本。
