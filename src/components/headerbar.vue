<template>
  <div class="header">
    <div class="fan"><span @click="back">返回</span> <slot></slot></div>
  </div>
</template>

<script>
import { isLogin } from "../utils/auth";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    back() {
      if (isLogin()) {
        this.$router.push("/home");
      } else {
        this.$router.push("/login");
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.header {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  height: 40px;
  line-height: 40px;
  background: red;
  color: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  font-size: 16px;
}
</style>