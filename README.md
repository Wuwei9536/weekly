## 说明
### 版本记录

|修改时间|修改内容|作者|
|--|--|--|
|2018.08.16 | webpack 代码拆分和动态加载 |eric.wu
|2018.08.16 | 优化webpack配置 |eric.wu
|2018.08.16 | 规范目录结构 |eric.wu

### 1. 启动
开发（携带环境）：
```
dev：npm run start = npm run dev
qa：npm run qa
pl：npm run pl
online：npm run online
build：npm run build
```

编译完成后，打开浏览器，输入 `http://localhost:8000/` 查看项目页面。
补充： 其中demo页面的mock数据来自`https://www.sojson.com`

### 2. 目录说明(该目录由命令tree -I '*svn|*node_module*'生成)
```
.
├── README.md
├── config
│   ├── dev.js
│   ├── index.js
│   ├── prod.js
│   └── proxy.js
├── dist
├── jsconfig.json
├── package.json
├── public
│   └── index.html
├── scripts
│   └── hooks
│       └── pre-commit.js
├── src
│   ├── App.js
│   ├── App.less
│   ├── assets
│   ├── components
│   │   ├── form
│   │   │   └── myInput
│   │   │       └── index.js
│   │   ├── index.js
│   │   └── layout
│   │       └── page
│   │           └── index.js
│   ├── index.js
│   ├── pages
│   │   ├── channel
│   │   │   └── home
│   │   ├── common
│   │   │   ├── components
│   │   │   │   └── pageLoading
│   │   │   │       └── index.js
│   │   │   ├── error
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── demo
│   │   │   ├── components
│   │   │   │   └── test
│   │   │   │       └── index.js
│   │   │   ├── action.js
│   │   │   ├── index.js
│   │   │   ├── index.less
│   │   │   └── reducer.js
│   │   ├── goods
│   │   ├── order
│   │   ├── user
│   ├── store.js
│   └── utils
│       ├── history.js
│       └── request.js
└── webpack
    ├── webpack.config.dev.js
    └── webpack.config.prod.js
```

以上目录的引用均以`eg：import XXX from 'components';`别名的方式来导入。

### 3. 创建页面规范
```
demo
├── action.js
├── components
│   └── test
│       └── index.js
├── index.js
├── index.less
└── reducer.js
```

**tips**：需要将页面的reducer.js导入/store.js文件中：

```
import demoReducer from 'pages/demo/reducer';

const storeTree = combineReducers({
    demoReducer
});
```
**tips**：有的项目已经将action和reducer放在一个XXXRedux.js文件下，考虑到这样写文件代码量可能会很大，暂时base项目先分开写。。。

### 4. 页面props数据需做类型校验 `prop-types`
### 5. 要求immutable在项目中使用
### 6. 代码风格
>* 该项目已业务组织目录，即同一个目录包含view、components、reducer、action、assets
>* 文件夹既页面，如：pages/demo
>* 编写时请开启Eslint实时检查，并遵循其规则
>* 同时开启EditorConfig for VS Code主动配合代码缩进
>* 目录和文件命名需使用驼峰命名方式

### 7. 其他
>* 请使用 VS Code
>* 原则1: 不要随意添加第三方包
>* 原则2: 公共组件需要放到 components 文件夹下面，并且添加markdown说明及使用示例， 如： components/form/myInput/index.md
