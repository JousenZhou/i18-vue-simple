import { cloneLoop, get } from "./utils.js";
// eslint-disable-next-line no-unused-vars
let $t = null;
export default (Vue, { lang, messages }) => {
  const proto = Vue.prototype;
  const options = { lang, messages };
  proto.$i18n = cloneLoop(options);
  // 初始一个vue对象 进行双向绑定 修改lang属性时 自动修改语言文本
  const _vm = new Vue({
    data: options,
  });
  Object.defineProperty(Vue.prototype.$i18n, "lang", {
    get() {
      return _vm.lang;
    },
  });
  proto.$t = (path, args) => {
    if (!path) {
      return "";
    }
    // 读取语言类型文本
    let messages = _vm.messages[_vm.lang];
    if (!messages) {
      console.warn(`[i18n-JousenZhou] ${_vm.lang}语言包不存在`);
      return path;
    }
    return get(messages, path || "", typeof args === "object" ? args : {});
  };
  $t = proto.$t;
  proto.$i18n.setLang = (lang) => {
    _vm.lang = lang;
  };
};
export { $t };
