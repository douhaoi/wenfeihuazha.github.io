---
title: '关于脚手架'
date: 2020-10-10
# 永久链接
# permalink: '/hello-world'
# 文章访问密码
# keys: '123'
# 是否发布文章
# publish: false
# 置顶: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级
# sticky: 1
# sidebar: false
# sidebarDepth: 2
# isTimeLine: false
# isShowComment: true
tags:
- 'JavaScript基础'
- '学习笔记'
- '脚手架'
categories:
- '脚手架'
---

关于自建脚手架的定义和自建脚手架的写法

<!-- more -->

# 关于脚手架

## 常用脚手架工具

- create-react-app
- vue-cli
- angular-cli

根据信息创建对应的项目基础结构

- yeoman

通用性项目脚手架,根据一套模板生成对应项目结构

- plop

创建特定类型文件
> 如创建一个组件/模块所需要的文件

## 关于 Yeoman

### 安装

- 在全局范围安装 yo
```js
npm i yo -g
```

- 安装对应的 generator
```js
npm i generator-node -g
```

- 通过 yo 运行 generator
```js
mkidr my-module
yo node
```