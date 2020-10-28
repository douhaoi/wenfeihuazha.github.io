---
title: '学习Vue-Router'
date: 2020-10-28
# 永久链接
# permalink: '/hello-world'
# 文章访问密码
# keys: '123'
# 是否发布文章
# publish: true
# 置顶: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级
# sticky: 1
# sidebar: false
# sidebarDepth: 2
# isTimeLine: false
# isShowComment: true
tags:
- 学习笔记
- vue
categories:
- 'vue'
---

学习 Vue-Router 的学习笔记,还有模拟 Vue 响应式原理, Virtual DOM 实现原理

<!-- more -->

## 简单使用 Vue-Router

- 在src下创建router文件夹(非强制)
- 创建 router/index.js | router.js
- 在 js 中配置router
```js
// router/index.js | router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
// 1. 注册路由插件
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
]
// 2. 创建 router 对象
const router = new VueRouter({
  routes
})

export default router
```
- 在 main.js 中引入 router(非必须)
```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  // 3. 注册 router 对象
  router,
  render: h => h(App)
}).$mount('#app')

```
:::tip
在全局注册 router 后, vue 全局会挂载两个对象
- $route: 可以拿到当前路由规则/参数/路径
- $router: 可以拿到路由对象相关的方法 push/go/back 等等
:::
- 在 app.vue 中写入 router-view 组件

成功了~

## 动态路由

```js
// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/detail/:id', //:id是占位符
    name: 'Detail',
    // 开启 props，会把 URL 中的参数传递给组件
    // 在组件中通过 props 来接收 URL 参数
    props: true,
    // 在加载到路由时才加载组件,可以提升性能~(路由懒加载)
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

```

```vue
<template>
  <div>
    <!-- 方式1： 通过当前路由规则，获取数据 -->
    通过当前路由规则获取：{{ $route.params.id }}

    <br>
    <!-- 方式2：路由规则中开启 props 传参 -->
    通过开启 props 获取：{{ id }}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id']
}
</script>

<style>

</style>
```

## 嵌套路由

```js
// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
// 加载组件
import Layout from '@/components/Layout.vue'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // 嵌套路由
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '', //地址为 / 时默认会展示这个路由
        component: Index
      },
      {
        name: 'detail',
        path: 'detail/:id', // 地址为 /detail/:id 会匹配到这个路由
        props: true,
        component: () => import('@/views/Detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
```

```vue
<template>
  <div>
    <div>
      <img width="25%" src="@/assets/logo.png">
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style scoped>
</style>

```

## 编程式导航

- this.$router.push('/')
:::tip
也可以使用 this.$router.push({name:这里输入路由声明时的name,path:这里输入路由path})
:::
- this.$router.go(-1)
:::tip
-1 和 this.$router.back() 相等,但是可以是 -2 -3
:::
- this.$router.replace('/login')
:::tip
replace 会删除当前页面记录 重定向
:::

## Hash 模式和 History 模式的区别

- Hash 模式

> 示例url: https:xxx.xxx.com/#/index
> 原理: Hash 模式是基于锚点.以及 onhashchange 时间



- History

> 示例url: https:xxx.xxx.com/index
> History 模式是基于 HTML5 中的 History API
> 1. 缺点是ie10以后才支持
> 2. 改变浏览器地址,但是不请求,会被记录在浏览器历史中

## History 模式使用

- History 需要服务器的支持
> 1. 因为服务器不存在/xxx的页面所以会出现找不到该页面
> 2. 所以在服务器要配置除了静态资源,都指向到 index.html

### Node 配置

```js
const path = require('path')
// 导入处理 history 模式的模块
const history = require('connect-history-api-fallback')
// 导入 express
const express = require('express')

const app = express()
// 注册处理 history 模式的中间件
app.use(history())
// 处理静态资源的中间件，网站根目录 ../web
app.use(express.static(path.join(__dirname, '../web')))

// 开启服务器，端口是 3000
app.listen(3000, () => {
  console.log('服务器开启，端口：3000')
})

```

### Nginx 配置

