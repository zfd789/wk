<!--  -->
<template>
  <div>添加商品</div>
</template>

<script>
import API from "@/api/customer";

export default {
  data() {
    return {};
  },
  methods: {
    addGoods() {
      let params = {
        goods_name: "",
        goods_imgs: "",
        goods_price: "",
        class_p_p_id: "",
        class_p_id: "",
        goods_class_id: "",
        bus_class_id: "",
        brand_id: "",
        // goods_param.['1']: "",
        // goods_param[3]: "",
        goods_introduce: ""
      };
      API.addGoods(params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>