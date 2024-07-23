# 说明

该repo用于存放slides，所有slides跑在一个项目中。

fork自 https://github.com/PassionZale/

# 如何使用

### 跑起来

运行package.json中命令。控制台会出现slides列表，选中对应slide按回车即可。

也可以运行各子项目package.json中的命令。

### 导出pdf

运行各子项目下的package.json中的export命令。

### 打包

可以运行package.json中的build命令，统一打包。

也可以运行各子项目package.json中的build命令，单独打包。

### 图片路径写法

图片放在子项目的scr/public文件夹下。不要写成相对路径，比如`../public/xxx.png`这种；直接写`/xxx.png`。

# 部署到vercel

需要先执行pnpm run redirects生成新的vervel.json，给几个子项目生成路由。需要在各子项目的build命令中加上--base参数，参考slidev build --base /2024/nodejs-base/ --out ../../dist/2024/nodejs-base。

需要修改vercel.json文件。

### 执行顺序

1. pnpm run export
2. pnpm run redirects
3. pnpm run index

目前已经添加了husky，在commit前会自动执行这些操作，只需提交代码即可。
