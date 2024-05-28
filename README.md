# vue3_test

## 开发环境
```
nodejs版本:20.11.0

vue版本：3.2.13
```
## 结构说明
 
```
├─.env.development //开发环境
├─.env.production  //生产环境
├─babel.config.js  
├─jsconfig.json
├─package-lock.json
├─package.json 
├─README.md
├─vue.config.js  //webpack配置文件
├─src
|  ├─.DS_Store
|  ├─App.vue                    //主文件
|  ├─main.js                    //入口文件
|  ├─views                      //页面组件
|  |   ├─.DS_Store
|  |   ├─watermark
|  |   |     └Watermark.vue
|  |   ├─uploadImage
|  |   |      └UploadImage.vue
|  |   ├─System
|  |   |   ├─user
|  |   |   |  └User.vue
|  |   |   ├─menu
|  |   |   |  └Menu.vue
|  |   |   ├─juese
|  |   |   |   └Juese.vue
|  |   |   ├─gangwei
|  |   |   |    └Gangwei.vue
|  |   |   ├─bumen
|  |   |   |   └Bumen.vue
|  |   ├─radio
|  |   |   └RadioDemo.vue
|  |   ├─productpara
|  |   |      └Productpara.vue
|  |   ├─processcenter
|  |   |       ├─Java.vue
|  |   |       ├─Pr.vue
|  |   |       └Processcenter.vue
|  |   ├─piniademo
|  |   |     └PiniaDemo.vue
|  |   ├─login
|  |   |   └Login.vue
|  |   ├─investmentattraaction
|  |   |           └Investmentattraaction.vue
|  |   ├─home
|  |   |  └Home.vue    //首页
|  |   ├─calendar
|  |   |    └Calendar.vue
|  |   ├─buttonview
|  |   |     └ButtonView.vue
|  ├─utils
|  |   ├─index.js    //配置侧边栏导航
|  |   ├─token.js    //配置token
|  |   └utils.js
|  ├─store
|  |   ├─user
|  |   |  └user.js
|  ├─router
|  |   ├─index.js //路由组件
|  |   └router.js
|  ├─http
|  |  └request.js //请求方法封装
|  ├─componts
|  |    ├─.DS_Store
|  |    ├─Dmoe.vue
|  |    ├─Erzi.vue
|  |    ├─Fuqin.vue
|  |    ├─weather   //天气组件
|  |    |    └Weather.vue
|  |    ├─topHeader  //头部组件
|  |    |     └TopHeader.vue
|  |    ├─sideMenu  //侧边栏组件
|  |    |    ├─MenuTree.vue
|  |    |    └SideMenu.vue
|  |    ├─particles  // 配置登录页面背景组件
|  |    |     └particles.js
|  |    ├─layout
|  |    |   └Breadcrumb.vue
|  |    ├─echart    //echarts 组件
|  |    |   └Echarts.vue
|  |    ├─date
|  |    |  └date.vue
|  |    ├─dark   //切换暗黑模式
|  |    |  └Dark.vue
|  |    ├─content
|  |    |    └Content.vue  //内容组件
|  |    ├─basicTable
|  |    |     └BasicTable.vue  //表格组件
|  |    ├─basicForm
|  |    |     └BasicForm.vue  //表单组件
|  ├─assets
|  |   ├─jiguang.jpg
|  |   ├─logo.png
|  |   └user.png
├─public
|   ├─favicon.ico
|   └index.html


```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development(项目启动)
```
npm run serve
```

**_[### Compiles and minifies for production(打包部署)]()_**
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
