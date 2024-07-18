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
