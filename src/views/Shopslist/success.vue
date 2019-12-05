<!--  -->
<template>
  <div class="wid-w1240">
     
      <div class="sucess">
          <router-link to="/">
               <el-button style="text-align: left">返回首页</el-button>
          </router-link>
          <div>订单提交成功</div>
      </div>
     
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}

</script>
<style lang='scss' scoped>
.sucess{
    // display: flex;
    // align-items: center;
    text-align: left;
    div{
        padding: 300px 400px;
    }
}
</style>