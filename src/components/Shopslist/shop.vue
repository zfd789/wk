<!--  -->
<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" >
      <p class="img" @click="todetail(props.id)">
        <img :src="props.goods_imgs" class="image" />
        <img :src="props.shop_pic" class="image" />
      </p>
      <div style="padding: 14px;">
        <div class="price">
          <div>￥{{props.goods_price}}{{props.min_price}}/起</div>
          <div>成交量（{{props.volume}}）</div>
        </div>
        <div class="shop_disc">{{props.goods_desc}}</div>
        <!-- 店铺描述 -->
         <div class="shop_disc">{{props.shop_desc}}</div>
        <div class="shop_disc c_ccc">{{props.shop_name}}</div>
        <div class="shop_disc c_ccc">
          <i class="el-icon-location-outline" style="color:red;"></i>
          {{props.province_name}}-{{props.city_name}}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: ["props"],
  data() {
    return {
    };
  },
  methods:{
    todetail(id){
      console.log(id)
      this.$emit("todetail", id);
      

    }
  }
};
</script>
<style lang='scss' scoped>
.price {
  display: flex;
  justify-content: space-between;
}
.shop_disc {
  width: 200px;
  text-align: left;
  overflow: hidden;
  margin: 10px 0px;
  text-overflow: ellipsis; //溢出部分用省略号代替
  -webkit-line-clamp: 2; //设置文本显示两行
  -webkit-box-orient: vertical;
  white-space: normal;
  -webkit-box-orient: vertical;
  display: block;
  white-space: nowrap;

}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
p {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  .image {
    width: 100%;
    display: block;
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>