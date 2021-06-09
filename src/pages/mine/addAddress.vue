<template>
  <div class="addAdress">
    <Back><span class="back">添加地址</span></Back>
    <div class="main">
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Back from "../../components/headerbar.vue";
import { addAdress } from "../../api/adress.js";
import arealist from "../../../area-list/area-list";
export default {
  components: { Back },
  data() {
    return {
      areaList: arealist,
      searchResult: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onSave(evt) {
      //  新增地址
      var params = {};
      var obj = {};
      obj.receiver = params.receiver = evt.name;
      params.mobile = evt.tel;
      obj.regions = params.regions =
        evt.province + " " + evt.city + " " + evt.county;
      obj.address = params.address = evt.addressDetail;
      params.isDefault = evt.isDefault;
      console.log(params);
      addAdress(params).then((res) => {
        if (res.status == 200) {
          Toast("保存成功");
          this.$router.push("/address"); //跳转地址列表页
          // this.$store.commit("getrecipient", obj);
          // console.log(this.$store.state.adressOrder);
          // console.log(this.$store.state.listAddress);
        }
      });
    },
    onDelete(evt) {
      Toast("已删除");
      evt.name = "";
      evt.tel = "";
      evt.province = "";
      evt.city = "";
      evt.county = "";
      evt.addressDetail = "";
      evt.isDefault = false;
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: val,
            // address: 11,
          },
        ];
      } else {
        this.searchResult = [];
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
.main {
  height: 100%;
  background: #999;
  margin-top: 40px;
}
.back {
  margin-left: 110px;
}
</style>