<!--  -->
<template>
  <div class="brand">
    <p v-for="item in brands" :key="item.id" @click="brandID(item.id)">
      <img :src="  item.img_url " alt />
    </p>
  </div>
</template>

<script>
import API from "@/api/Shoplist";

export default {
  name: "Brand",
  data() {
    return {
      brands: []
      //   brand_id: ""
    };
  },
  mounted() {
    this.brand();
  },

  methods: {
    brandID(id) {
      console.log(id)
      this.$emit("Brandid", id);
    },
    brand() {
      API.brand().then(res => {
        this.brands = res.data;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.brand_wrap {
  display: flex;
  align-items: center;
  .lable {
    width: 107px;
  }
  .brand {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    p {
      width: 120px;
      height: 56px;
      img {
        width: 120px;
        height: 56px;
      }
    }
  }
}
</style>