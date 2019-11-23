<!--  -->
<template>
     <div class="menu">
      <div class="menu-con">
        <div class="left">
          展厅一站式服务中心
          <img src="../../assets/images/home/line.svg" alt />
          <!-- <div class="menulist"></div> -->
        </div>
        <div class="midle">
          <a href="#">我要发布</a>
          <a href="#">我要发布</a>
          <a href="#">我要发布</a>
          <a href="#">我要发布</a>
          <a href="#">我要发布</a>
          <a href="#">我要发布</a>
        </div>
        <div class="right">
          <img src="../../assets/images/home/rz.png" alt />
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"Menu",
  data () {
    return {
    }
  }
}

</script>
<style lang='scss' scoped>
.menu {
  width: 100%;
  background: #efc713;
  
  .menu-con {
    width: 1240px;
    display: flex;
    margin: 0 auto;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    .left {
      width: 220px;
      position: relative;
      background: #ff9a3c;
      position: relative;
      // .menulist{
      //   height: 550px;
      //   background: #ff9a3c;
      //   position: absolute;
      //   top: 40px;
      //   width: 100%;
      // }
    }
    .right {
      width: 15%;
      img {
        height: 40px;
      }
    }
    .midle {
      width: 65%;
      display: flex;
      justify-content: space-around;
      
      a{
        display: block;
        color: #fff;
        padding:0px 10px 0px; 
      }
      a:hover {
        background: #ff9a3c;
      }
    }
  }
}
</style>