<!--  -->
<template>
  <div class="topfixd-contan">
    <div class="topfixd-contan-l">
      <img src="../../assets/images/home/logo.png" alt />
    </div>
    <div class="topfixd-contan-r">
      <div class="search-wrap">
        <div class="search-input">
          <img src="../../assets/images/home/search.svg" alt />
          <input placeholder="请输入内容" />
          <div class="search_b">搜索</div>
        </div>
        <div></div>
        <div class="or">或</div>
        <div class="publish">免费发布</div>
      </div>
      <div class="hot">
        <a href="#">展厅设计</a>
        <a href="#">展厅设计</a>
        <a href="#">展厅设计</a>
        <a href="#">展厅设计</a>
        <a href="#">展厅设计</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
img {
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
    input {
      border: 2px solid #efc713;
      outline: none;
      width: 100%;
      text-indent: 3em;
    }
    img {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -25px;
      left: 10px;
    }
    .search_b {
      width: 80px;
      background: #efc713;
      color: #fff;
      cursor: pointer;
    }
  }
  .or {
    width: 15%;
  }
  .publish {
    width: 152px;
    background: #efc713;
    color: #fff;
     cursor: pointer;
  }
}
.hot {
  width: 300px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  a {
    display: block;
  }
}
</style>