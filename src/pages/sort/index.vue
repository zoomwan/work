<template>
  <div class="sort">
    <div class="top">
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
    </div>

    <van-tree-select
      height="160vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <sapn>
          <h2>新品手机</h2>
          <p width="100%">
            <img
              src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/46891466132616419864.png"
            />
            <img
              src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/46891466132616419864.png"
            /><img
              src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/46891466132616419864.png"
            /><img
              src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/46891466132616419864.png"
            />
          </p>
        </sapn>

        <van-image
          v-if="active === 0"
          src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/46891466132616419864.png"
        />
        <van-image
          v-if="active === 1"
          src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/17066304622610366071.png"
        />
        <van-image
          v-if="active === 2"
          src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/87904767722616740978.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      items: [
        { text: "新品 " },
        { text: "手机 " },
        { text: "智能穿戴 " },
        { text: "耳机音响眼睛 " },
        { text: "智能屏 " },
        { text: "电脑办公" },
        { text: "平板 " },
        { text: "智能路由" },
        { text: "生态产品 " },
        { text: "家用电器 " },
        { text: "汽车及周边" },
        { text: "美酒饮品 " },
        { text: "配件" },
        { text: "增值服务" },
        { text: "企业商用" },
      ],
    };
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