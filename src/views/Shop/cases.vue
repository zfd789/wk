<!--  -->
<template>
  <div class="wid-w1240">
    <div>
      <h1>作品案例</h1>
      <ul class="case">
        <li v-for="(item,index) in caselist" :key="index" @click="toCaseDetail">
          <img :src="item.pic" alt />
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <router-link to="/Shop/casedetail">详情</router-link>
  </div>
</template>

<script>
import API from "@/api/shop";
export default {
  data() {
    return {
      caselist: []
    };
  },
  mounted() {
    this.getShopCases();
    this.caselist = [
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/fddff5bfde64f2f5b536cb6ecbf1b7ed.jpg",
        title: "【微信小程序】想见+轻量级约见服务"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/fddff5bfde64f2f5b536cb6ecbf1b7ed.jpg",
        title: "【微信小程序】想见+轻量级约见服务"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/fddff5bfde64f2f5b536cb6ecbf1b7ed.jpg",
        title: "【微信小程序】想见+轻量级约见服务"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/fddff5bfde64f2f5b536cb6ecbf1b7ed.jpg",
        title: "【微信小程序】想见+轻量级约见服务"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/fddff5bfde64f2f5b536cb6ecbf1b7ed.jpg",
        title: "【微信小程序】想见+轻量级约见服务"
      },
      {
        pic:
          "http://192.168.2.32/uploads/banner/20191213/fddff5bfde64f2f5b536cb6ecbf1b7ed.jpg",
        title: "【微信小程序】想见+轻量级约见服务"
      }
    ];
  },

  methods: {
    // 案例详情
    toCaseDetail() {
      this.$router.push({
        path: "/Shop/casedetail"
      });
    },
    getShopCases() {
      let params = {
        shop_id: 1, // 店铺id
        page: 1
      };
      API.shopcases(params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.case {
  display: flex;
  flex-wrap: wrap;
  // justify-content: flex-start;
  justify-content: space-around;
  justify-content: space-evenly;
  justify-content: space-between;
  li {
    width: 220px;
    height: 190px;
    background: #f2f2f2;
    margin: 10px 0px;
    p {
      padding: 10px;
    }
  }
}
</style>