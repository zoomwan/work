<template>
  <div class="footer">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="search">发现</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/home" icon="friends-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
</style>