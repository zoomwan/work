<template>
  <div class="updateAdress">
    <Back><span class="back">修改地址</span></Back>
    <div class="main">
      <p class="dizhi">
        <span>姓名</span><input type="text" class="name" v-model="receiver" />
      </p>
      <p class="dizhi">
        <span>电话</span><input type="text" class="tel" v-model="mobile" />
      </p>
      <p class="dizhi">
        <span>地区</span><input type="text" class="adress" v-model="regions" />
      </p>
      <p class="dizhi">
        <span>详细地址</span><input type="text" class="ad" v-model="address" />
      </p>
      <p class="dizhi">
        <span>设为默认</span
        ><input type="checkbox" class="moren" v-model="isDefault" />
      </p>
      <van-button type="danger" @click="onSave()" class="btn"
        >保存地址</van-button
      >
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Back from "../../components/headerbar.vue";
import { oneAdress, updateAddress } from "../../api/adress";
export default {
  components: { Back },
  data() {
    return {
      receiver: "",
      mobile: "",
      regions: "",
      address: "",
      id: "",
      isDefault: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async onSave() {
      // 保存已经修改的地址
      var params = {};
      params.receiver = this.receiver;
      params.mobile = this.mobile;
      params.regions = this.regions;
      params.address = this.address;
      params.isDefault = this.isDefault;
      const result = await updateAddress(this.id, params);
      console.log(result);
      if (result.status == 200) {
        if (params.isDefault == true) {
          console.log(11);
          localStorage.setItem("shouhuoren", JSON.stringify([params]));
        }
        Toast("保存成功");
        this.receiver = "";
        this.mobile = "";
        this.regions = "";
        this.address = "";
        this.isDefault = false;
        setTimeout(() => {
          this.$router.push("/address");
        }, 300);
      }
    },
    async getAddress(id) {
      // 显示要修改的地址
      const result = await oneAdress(id);
      console.log(result.data);
      var obj = result.data;
      this.receiver = obj.receiver;
      this.mobile = obj.mobile;
      this.regions = obj.regions;
      this.address = obj.address;
      this.isDefault = obj.isDefault;
      this.id = obj._id;
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getAddress(this.id);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.main {
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dizhi {
  height: 50px;
  line-height: 50px;
  border: solid 1px #000;
  font-size: 16px;
  margin-top: 20px;
  width: 98%;
  box-shadow: 0 0 6px #999;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0 0 10px;
}
input {
  height: 60%;
  background: rgb(185, 184, 184);
  border: solid 1px #000;
  margin-right: 10px;
  color: #fff;
  border-radius: 5px;
  width: 70%;
  text-indent: 5px;
}
.moren {
  width: 20px;
}
.btn {
  position: fixed;
  bottom: 50px;
  width: 100vw;
}
.back {
  margin-left: 100px;
}
</style>