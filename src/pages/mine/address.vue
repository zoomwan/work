<template>
  <div class="aderss">
    <Back> <span class="back">地址列表</span></Back>
    <div class="bottom">
      <ul class="bottom-ul">
        <li v-for="item in list" :key="item._id">
          <van-checkbox
            @click="onSelect(item)"
            v-model="item.isDefault"
          ></van-checkbox>
          <div class="main">
            <div class="name">
              <p>{{ item.receiver }}</p>
              <p>{{ item.mobile }}</p>
            </div>
            <div class="address">{{ item.regions }}{{ item.address }}</div>
          </div>
          <div class="redu">
            <van-button type="warning" @click="onEdit(item._id)" class="up"
              >修改</van-button
            >
            <van-button type="warning" @click="onDel(item._id)" class="del"
              >删除</van-button
            >
          </div>
        </li>
      </ul>
      <van-button type="danger" @click="onAdd" class="btn">新增地址</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Back from "../../components/headerbar";
import { addressList, updateAddress, delAdress } from "../../api/adress";
export default {
  components: { Back },
  data() {
    return {
      list: [],
      page: { per: 5, page: 1 },
    };
  },
  computed: {},
  watch: {},

  methods: {
    onAdd() {
      Toast("新增地址");
      this.$router.push("/addaddress");
    },
    onEdit(id) {
      this.$router.push("/updateaddress/" + id);
    },
    async onDel(id) {
      console.log(id);
      const result = await delAdress(id);
      console.log(result);
      var index = this.list.findIndex((item) => item._id == id);
      this.list.splice(index, 1);
    },
    async onSelect(item) {
      console.log(item.isDefault);
      var obj = {};
      obj.receiver = item.receiver;
      obj.mobile = item.mobile;
      obj.regions = item.regions;
      obj.address = item.address;
      obj.isDefault = item.isDefault;
      const result = await updateAddress(item._id, obj);
      console.log(result);

      // 将选择中的收货人保存在localstorage
      if (result.data.isDefault == false) {
        localStorage.setItem("shouhuoren", JSON.stringify([obj]));
        console.log(localStorage.getItem("shouhuoren"));
      }
    },
    // 地址列表
    async getAdlist(params) {
      const result = await addressList(params);
      let arr = result.data.addresses;
      this.list = arr;
    },
  },
  created() {
    this.getAdlist(this.page);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.bottom {
  height: 100%;
  /* background: #999; */
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}
.bottom-ul {
  height: 100%;
}
.bottom-ul li {
  /* height: 30%; */
  width: 100vw;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  margin-top: 10px;
  border: solid 1px #999;
  box-shadow: 0 0 5px #999;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
}
.main {
  width: 75%;
  padding: 0 5px;
  font-size: 14px;
  box-sizing: border-box;
}
.name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.name p {
  margin-left: 5px;
}
.back {
  margin-left: 100px;
}
.btn {
  position: fixed;
  bottom: 50px;
  width: 100vw;
}
.redu {
  height: 100%;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.up,
.del {
  height: 30px;
  font-size: 14px;
}
</style>