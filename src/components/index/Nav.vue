<!--  -->
<template>
  <div class="search_bac">
    <div class="topfixd-contan">
      <div class="topfixd-contan-l">
        <router-link to="/">
          <img src="../../assets/images/home/logo.png" alt class="logo_index" />
        </router-link>
      </div>
      <div class="topfixd-contan-r">
        <div class="search-wrap">
          <div class="search-input">
            <!-- <img src="../../assets/images/home/search.svg" alt />
            <input placeholder="请输入内容" />
            <div class="search_b">搜索</div>
            <el-select v-model="select" slot="prepend" placeholder="请选择" class="select">
              <el-option label="硬件" value="1"></el-option>
              <el-option label="服务" value="2"></el-option>
            </el-select>-->

            <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="硬件">
                <el-option label="硬件" value="1"></el-option>
                <el-option label="服务" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <div></div>
          <div class="or">或</div>
          <div class="publish">免费发布</div>
        </div>
        <div class="hot">
          <a href="#">展厅设计</a>
          <a href="#">中控系统</a>
          <a href="#">软件开发</a>
          <a href="#">多媒体硬件</a>
          <a href="#">企业招聘</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: ""
    };
  }
};
</script>
<style lang='scss'>
.search_bac {
  background-color: rgba(239, 199, 19, 1);
}
.logo_index{
  padding: 35px 0;
}
.search-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  .search-input {
    display: flex;
    width: 480px;
    height: 40px;
    position: relative;
    .el-select .el-input {
      width: 100px;
     
    }
    .el-button{
      background: #f95959;
      // border:1px solid #f95959;
      border-radius:0px; 
      // outline: none;
    }
    [class^=el-icon-]{
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
      border:2px solid #f95959;
      border-right: 1px solid transparent;
    }
    .el-input__inner{
       border:2px solid #f95959;
       border-left: none;
    }
    // .el-input-group__append button.el-button, .el-input-group__append div.el-select .el-input__inner, .el-input-group__append div.el-select:hover .el-input__inner, .el-input-group__prepend button.el-button, .el-input-group__prepend div.el-select .el-input__inner, .el-input-group__prepend div.el-select:hover .el-input__inner{
    //   background-color: #f95959;
    // }
    // input {
    //   border: 2px solid #f95959;
    //   outline: none;
    //   width: 100%;
    //   text-indent: 3em;
    // }
    // img {
    //   width: 20px;
    //   height: 20px;
    //   position: absolute;
    //   top: -25px;
    //   left: 10px;
    // }
    // .search_b {
    //   width: 80px;
    //   background: #f95959;
    //   color: #fff;
    //   cursor: pointer;
    // }
    // .select{
    //   position: absolute;
    //   width: 100px;
    //   height: 20px;
    //   el-option{
    //     height: 20px;
    //   }
    // }
  }
  .or {
    width: 15%;
  }
  .publish {
    width: 152px;
    background: #f95959;
    color: #fff;
    cursor: pointer;
  }
}
.hot {
  width: 350px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  a {
    display: block;
  }
}
</style>