<!--  -->
<template>
  <div>us</div>
</template>

<script>
import API from '@/api/shop'
export default {
  data () {
    return {
    };
  },
  mounted() {
      this.aboutUs()
  },

  methods: {
      aboutUs(){
          let params = {
             id:1 //店铺id
          }
          API.aboutUs(params).then(res=>{
              console.log(res)
          })
      }
  }
}

</script>
<style lang='scss' scoped>
</style>