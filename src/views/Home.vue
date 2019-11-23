<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/index/Header.vue'
import Banner from '@/components/index/Banner.vue'

// import API from "../api/home";
export default {
  name: "home",
  components: {
    Header,
    Banner
  },
  methods: {
 
  },
  mounted(){
    // this.clsssList()
  }
};
</script>
