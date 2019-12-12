<!--  -->
<template>
  <div>
     <router-link to="/Shop/casedetail">详情</router-link>
  </div>
</template>

<script>
import API from '@/api/shop'
export default {
  data () {
    return {
    };
  },
  mounted() {
      this.getShopCases()
  },

  methods: {
      getShopCases(){
          let params = {
              shop_id:1, // 店铺id
              page:1
          }
          API.shopcases(params).then(res=>{
              console.log(res)
          })
      }
  }
}

</script>
<style lang='scss' scoped>
</style>