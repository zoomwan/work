<template>
  <div>
    <div class="cart">
      <Header
        ><span class="carts">购物车</span>
        <span class="gohome" @click="gohome">首页</span></Header
      >
      <div class="good-list">
        <!-- 两个id 里面的是商品id(item.product._id)  外面的是(item._id)添加购物车生成的id  删除商品就传入商品的id，删除购物车就传购物车的id -->
        <div v-for="item in products" :key="item._id">
          <van-checkbox-group v-model="result" class="good">
            <van-checkbox :name="item._id" icon-size="24px"></van-checkbox>
            <img :src="item.product.coverImg" alt="" />
            <div class="num">
              <div>{{ item.product.name }}</div>
              <div>{{ item.product.price }}</div>
              <div>
                <!-- 只有满足商品的数量小于库存量，才执行后面的函数 商品的数量加1-->
                <span
                  @click="
                    item.quantity < item.product.quantity &&
                      add(item.product._id, 1)
                  "
                  >+</span
                >
                <!-- 当前商品的数量 -->
                {{ item.quantity }}
                <!-- 只有满足商品的数量大于1，才执行后面的函数 商品的数量减1-->
                <span @click="item.quantity > 1 && reduce(item.product._id, -1)"
                  >-</span
                >
                <span>￥{{ item.quantity * item.product.price }}</span>
                <van-icon name="delete-o" @click="del(item._id)">删除</van-icon>
              </div>
            </div>
          </van-checkbox-group>
        </div>
      </div>
      <van-submit-bar
        :price="sumprice * 100"
        button-text="立即结算"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
        <!-- 如果全选选中，就显示，否则就不显示 -->
        <van-icon name="delete-o" v-show="checked" @click="dels" />
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { reqOrder } from "../../api/cart";
import { Dialog } from "vant";
import { reqAddressList } from "../../api/cart";
import {
  reqCartList,
  reqAddCart,
  reqCartdel,
  reqCartdels,
} from "../../api/cart";
import Header from "../../components/headerbar.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      products: [], // 刚开始规定全选框没有选中
      checked: false,
      result: [], //双向数据绑定的数组，绑定的是id
    };
  },
  computed: {
    // 计算商品总价，
    sumprice() {
      console.log(this.products);
      // 将所有勾选的商品遍历出来，然后再利用reduce计算总价
      let newArr = [];
      for (let i = 0; i < this.products.length; i++) {
        for (let j = 0; j < this.result.length; j++) {
          if (this.products[i]._id == this.result[j]) {
            newArr.push(this.products[i]);
          }
        }
      }
      // console.log(newArr);
      return newArr.reduce((pre, cur) => {
        return (pre += cur.product.price * cur.quantity);
      }, 0);
    },
  },
  watch: {
    // rusult监听所有的单选框的选中  所有的单选框选中，多选框才选中
    result() {
      if (this.result.length == this.products.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
    async getCartList() {
      const result = await reqCartList();
      this.products = result.data;
      // console.log(this.products);
    },
    // 多选框选中，则每个单选框都选中
    checkAll() {
      if (this.checked) {
        this.products.forEach((item) => {
          if (this.result.indexOf(item._id) == -1) {
            this.result.push(item._id);
          }
        });
      } else {
        this.result = [];
      }
    },
    // 调用添加购物车的接口
    // 第一个参数product表示商品的id,第二个参数quantity表示商品增加的数量
    async reduce(product, quantity) {
      // 后台调一下接口
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      // this.getCartList(); 性能比较低
      // 前端直接操作 //遍历购物车列表，找到当前商品，
      this.products.forEach((v) => {
        if (v.product._id == product) {
          v.quantity = v.quantity + quantity;
        }
      });
    },
    async add(product, quantity) {
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      this.products.forEach((v) => {
        if (v.product._id == product) {
          v.quantity = v.quantity + quantity;
        }
      });
    },
    // 生成订单
    async onSubmit() {
      // 循环所有的购物车数据，将所有打钩的商品遍历出来，保存在空数组中
      const orderDetails = [];
      if (this.result.length > 0) {
        this.result.forEach((v) => {
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i]._id == v) {
              orderDetails.push({
                quantity: this.products[i].quantity,
                product: this.products[i].product._id,
                price: this.products[i].product.price,
              });
            }
          }
        });
        console.log(orderDetails);
        // 获取收货人地址列表，如果地址列表中没有数据，那么就跳转到address页面，提示用户添加收货人
        const res = await reqAddressList();
        if (res.data.addresses.length > 0) {
          //说明有收货人，否则就表示没有收货人  收货人选择那个，就会显示谁是那个收货人
          let consignee = JSON.parse(localStorage.getItem("shouhuoren"));
          // 订单提交
          reqOrder({
            receiver: consignee[0].receiver,
            regions: consignee[0].regions,
            address: consignee[0].address,
            orderDetails,
          }).then((resu) => {
            if (resu.data.code == "success") {
              Dialog({ message: "订单保存成功" });
              this.$router.push("/orders");
            }
          });
        } else {
          Dialog({ message: "请添加收货人" });
          this.$router.push("/address");
        }
      } else {
        Dialog({ message: "请选择要购买的商品" });
      }
    },
    // 删除所有的商品
    dels() {
      Dialog.confirm({
        message: "你确定删除全部商品吗？",
      })
        .then(async () => {
          let ids = [];
          //遍历所有的商品，找到所有购物车商品id，push到空数组中
          this.products.forEach((v) => {
            ids.push(v._id);
          });
          // 删除全部的商品，商品ids是一个一个对象，里面套着数组
          const result = await reqCartdels({ ids });
          console.log(result);
          this.getCartList();
        })
        .catch(() => {
          // on cancel
        });
    },
    // 删除一个商品
    del(id) {
      console.log(id);
      Dialog.confirm({
        message: "你确定要删除吗？",
      })
        .then(async () => {
          const result = await reqCartdel(id);
          console.log(result);
          // 遍历购物车数组，找到当前商品的下标，删除数组中的这一项
          let index = this.products.findIndex((v) => v._id == id);
          // console.log(index);
          // 数组中的这一项进行删除 splice的第一个参数表示起始位，第二个参数表示删除的长度是1
          this.products.splice(index, 1);
          // 将result数组遍历，如果删除的那个商品的id在result的数组中，就在数组中删除，否则就不用管
          /*  this.result.forEach((v, index) => {
        if (v == id) {
          this.result.splice(index, 1);
        }
      }); */
          if (this.result.length == this.products.length) {
            this.checked = true;
          } else {
            this.checked = false;
          }
        })
        .catch(() => {
          // on cancel
        });
    },
  },

  created() {
    this.getCartList();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.good-list {
  padding-bottom: 60px;
  margin-top: 40px;
}
.num {
  height: 80px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.good {
  display: flex;
}
.goods img {
  margin-left: 5px;
}
img {
  width: 80px;
  height: 80px;
  margin: 10px;
}

.num span {
  width: 25px;
  height: 25px;
  background: pink;
  text-align: center;
  line-height: 25px;
  display: inline-block;
}
.num span:nth-child(2) {
  margin-right: 20px;
}
.num span:nth-child(3) {
  width: auto;
  margin-right: 20px;
  background: none;
}
.carts {
  margin-left: 100px;
}
.gohome {
  margin-left: 130px;
}
</style>
