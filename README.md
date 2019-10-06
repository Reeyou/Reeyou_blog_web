# Reeyou_blog_web

> ##### 技术栈：vue-cli + vue  + webpack 
> ##### 实现效果：个人博客网页展示，兼容移动端


## 简介
* 想自己从前端到服务端结合独立搭建一个自己的博客网站记录技术上的问题
* 整个项目分为三个部分：博客前端页面、后台管理、Koa服务端。
* 整个项目包含基础组件、后端通信、功能页面、数据存储、服务器搭建，从零到有慢慢有了一个模型，后面也会继续规划功能迭代，继续完善


## 线上预览

  [https://www.reeyou.cn](https://www.reeyou.cn)


## 后台管理
###### vue + elementUi + axios
[项目地址](https://github.com/Reeyou/Reeyou_blog_admin)

## 服务端
###### koa2
[项目地址](https://github.com/Reeyou/Reeyou_blog_koa2)

## 主要功能

 **已实现功能** 
- [x] 首页内容
- [x] 文章详情
- [x] 文章评论
- [x] 留言
- [x] 第三方登录--github
- [x] 简历页
- [x] 标签类型

 **待开发功能**
- [ ] 推荐文章
- [ ] 标签分类页
- [ ] 文章详情目录

            

**博客部分截图演示**

#### 主页文章
![主页部分](./assets/shoot1.jpg)

#### 文章详情、评论
![detail](./assets/shoot2.jpg)

#### 留言
![chat](./assets/shoot3.jpg)

## 基本目录树
```
─build
├─config
├─src
│  ├─assets
│  ├─common
│  ├─components
│  ├─config 
│  ├─pages    
│  │  ├─Article
│  │  │  └─detail
│  │  ├─Index
│  │  ├─Login
│  │  ├─Message
│  │  └─Resume
│  ├─router   
│  ├─service  后端请求api
│  ├─store    vuex
│  └─utils
├─static
└─test
    ├─e2e
    └─unit
```

## 运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```



