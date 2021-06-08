<template>
  <div id="app">
    <router-view></router-view>
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
</style>
