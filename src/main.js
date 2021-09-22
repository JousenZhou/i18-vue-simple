import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import ElementUI from "element-ui";
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang

import i18n from "i18n-jousenzhou";

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
  // 当前默认语言 lang 需要与messages对象key匹配
  lang: "zh_CHS",
  messages,
});

Vue.use(ElementUI, {
  size: "medium",
  i18n: (path, options) => Vue.prototype.$t(path, options),
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
