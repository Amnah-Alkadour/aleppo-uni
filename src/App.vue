<template>
  <MyNav />
  <router-view />
  <MyFooter />
</template>
<script>
import MyNav from "@/components/MyNav.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: {
    MyNav,
    MyFooter,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Sakkal+Majalla&display=swap");
#app {
  font-family: "Sakkal Majalla", "serif" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 30px !important;
}
h4,
h3 {
  font-size: 26px !important;
}
</style>
