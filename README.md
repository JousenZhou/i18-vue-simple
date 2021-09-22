<div align="center">
<h1>i18n-vue-simple</h1>
<p>
  <strong>i18n-vue (2.0) international plug-in lightweight version</strong>
  <br /><br />
  <strong>i18n-vue (2.0)  国际化插件轻身版</strong>
</p>
<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/JousenZhou">JousenZhou</a>
  </sub>
</p>
<p>
<a href="https://github.com/JousenZhou/i18n-vue-simple"><img src="https://img.shields.io/badge/Github Page-JousenZhou-yellow" /></a>
<a href="https://github.com/JousenZhou"><img src="https://img.shields.io/badge/Author-Jousen-blueviolet" /></a>
</div>



### Usage 
开发，构建、运行|体验

```bash
# 获取远程仓库代码
git clone https://github.com/JousenZhou/i18n-vue-simple
# 进入目录
cd i18n-vue-simple
# 安装依赖
yarn
# 启动项目
yarn serve
# 在浏览器访问 http://localhost:8080
```

### 设计目的：

应用于微前端模块化架构，尽可能将 业务模块 深度解耦  所设计的。 官方的 i18n-vue 挂载点在入口实例上，不符合模块化微前端架构设计。


### Example

```js
// 安装
import i18n from "i18n-jousenzhou";
const messages = {
  en: {
    name: "bloodCat"
  },
  zh_CHS: {
    name: "染血猫"
  },
};
Vue.use(i18n, {
  // 当前默认语言 lang 需要与messages对象key匹配
  lang: "zh_CHS",
  messages,
});
```

### 属性与方法

$i18n 全局Vue属性   = Vue.prototype.$i18n

lang: string :获取当前语言类型

setLang:function :设置语言类型

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ $t("name") }}</h2>
    <button @click="changeLang">切换语言</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    changeLang: function () {
      // 获取当前语言类型
      let lang = this.$i18n.lang;

      this.$i18n.setLang(lang === "en" ? "zh_CHS" : "en");
    },
  },
};
</script>
```

### 进阶：与Element-ui 链接

```js
import Vue from 'vue';
import i18n from "i18n-jousenzhou";
import ElementUI from 'element-ui';
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";

const messages = {
  en: {
    name: "bloodCat",
    ...elementEnLocale,
  },
  zh_CHS: {
    name: "染血猫",
    ...elementZhLocale,
  },
};

Vue.use(i18n, {
  lang: "zh_CHS",
  messages,
});

Vue.use(ElementUI, {
    size: 'medium',
    i18n: (path, options) => Vue.prototype.$t(path, options)
});

```

