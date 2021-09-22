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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
