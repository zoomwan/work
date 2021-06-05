<template>
  <div id="app">
    <Footerbar></Footerbar>
  </div>
</template>

<script>
import Footerbar from "./components/footerbar.vue";

export default {
  name: "App",
  components: {
    Footerbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
