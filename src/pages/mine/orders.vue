<template>
  <div class="orders">
    <table class="tb">
      <thead>
        <tr class="trs">
          <th>收货人姓名</th>
          <th>地址</th>
          <th>详细地址</th>
          <th>商品价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody class="trs">
        <tr v-for="item in list" :key="item._id">
          <td>
            {{ item.receiver }}
          </td>
          <td>{{ item.regions }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.price }}</td>
          <td class="cc clean">
            <div class="btns">
              <van-button
                icon="plus"
                type="danger"
                @click.stop="del(item._id)"
                class="delbtn"
                size="mini"
                >删除</van-button
              >
              <van-button
                icon="plus"
                type="info"
                @click="det(item._id)"
                class="delbtn"
                size="mini"
                >详情</van-button
              >
            </div>
            <!-- 勾选 -->
            <van-checkbox
              v-model="item.checked"
              check-color="red"
              :bind-group="false"
            ></van-checkbox>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <van-checkbox v-model="checkAll" class="chkall">全选</van-checkbox>
      </tfoot>
    </table>
    <van-button type="primary" size="large" class="delall" @click="delAll"
      >批量删除</van-button
    >
    <!-- 遮罩层详情 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="desc" v-for="item in detail" :key="item._id">
          <img :src="item.product.coverImg" alt="" class="detail_img" />
          <p>{{ item.product.name }}</p>
          <div class="price">
            <span>数量：{{ item.quantity }}</span>
            <span>单价：￥{{ item.price }}</span>
            <span>总价：￥{{ item.price * item.quantity }}</span>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Toast } from "vant";
import {
  getOrderList,
  delOrderdetail,
  getOrderdetail,
  delOrderall,
} from "../../api/orders";
export default {
  components: {},
  data() {
    return {
      list: [],
      detail: [],
      show: false,
    };
  },
  computed: {
    // 点击全选全部选中
    checkAll: {
      set(flag) {
        console.log(flag);
        return this.list.forEach((item) => {
          item.checked = flag;
        });
      },
      get() {
        return (
          this.list.length ==
          this.list.filter((item) => item.checked == true).length
        );
      },
    },
  },
  watch: {},

  methods: {
    //   订单列表
    async getOrders(params) {
      const result = await getOrderList(params);
      console.log(result.data.orders);
      this.list = result.data.orders;
    },
    // 订单删除
    async del(id) {
      const result = await delOrderdetail(id);
      console.log(result);
      if (result.status == 200) {
        var i = this.list.findIndex((v) => v._id == id);
        this.list.splice(i, 1);
      }
    },
    // 订单详情
    async det(id) {
      const result = await getOrderdetail(id);
      console.log(result.data.details);
      this.detail = result.data.details;
      if (result.status == 200) {
        this.show = true;
      }
    },
    // 批量删除订单
    async delAll() {
      console.log(1);
      var ids = [];
      var arr = this.list.filter((item) => item.checked == true);
      arr.forEach((item) => {
        ids.push(item._id);
      });
      if (ids.length >= 1) {
        const result = await delOrderall({ ids });
        console.log(result);
        if (result.status == 200) {
          this.list = this.list.filter((item) => item.checked != true);
        }
      } else {
        Toast("请选择要删除的订单");
      }
    },
  },
  created() {
    this.getOrders({ per: 10, page: 1 });
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.tb {
  box-sizing: border-box;
  border-collapse: collapse;
  width: 98%;
  margin: 10px auto;
}
.tb tr {
  width: 100%;
  box-sizing: border-box;
}
th {
  background: rgb(235, 11, 11);
  color: #fff;
  height: 40px;
  font-size: 12px;
}
.tb tr th,
.tb tr td {
  width: 20%;
}
.tb tr:nth-child(2n) {
  background: rgb(192, 192, 192);
  color: #fff;
}
.btns {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tb .cc {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delbtn {
  height: 20px;
  width: 40px;
  margin-top: 2px;
  font-size: 8px;
  text-align: center;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow-x: auto;
  width: 100%;
}
.desc {
  width: 90%;
  height: 60%;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px 10px;
}
.desc p {
  font-weight: 900;
  font-size: 16px;
}
.detail_img {
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 0 10px #999;
  margin-bottom: 5px;
  border-radius: 5px;
}
.price {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
.price span {
  color: red;
  font-family: "幼圆";
  text-shadow: 0 0 5px #999;
  font-weight: 900;
  margin-top: 3px;
}
.delall {
  position: fixed;
  bottom: 40px;
  left: 0;
}
.chkall {
  position: fixed;
  bottom: 100px;
  left: 0;
}
</style>