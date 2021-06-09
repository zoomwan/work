<template>
  <div class="headline">
    <article class="breadcrumb">
      <header>
        <a id="btn-back" href="javascript:history.go(-1)">返回</a>
        <h1>商城头条</h1>
      </header>
    </article>
    <div class="shop">
      <p>
        <img
          src="https://download-bds.vmall.com/irs/pgc/img/large/000000004099c925000000007e3cd604.webp"
          alt
        />
      </p>
    </div>
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
  updated() {}
};
</script>
<style scoped>
.headline .breadcrumb {
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 720px;
  height: 3rem;
  margin: 0 auto;
  z-index: 100;
}
.headline .breadcrumb header {
  padding: 0.8rem;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.headline .breadcrumb header a {
  width: 1.2rem;
  height: 1.2rem;
  display: block;
}
.breadcrumb header h1 {
  display: block;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #191919;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}
#btn-back {
  display: flex;

  float: left;
  width: 40px;
}
img {
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: top;
}
</style>