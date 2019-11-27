<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <Superlier></Superlier>
    <Buyer></Buyer>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/index/Header.vue'
import Banner from '@/components/index/Banner.vue'
import Superlier from '@/components/index/Superlier.vue'
import Buyer from '@/components/index/Buyer.vue'
import Footer from '@/components/Footer.vue'

// import API from "../api/home";
export default {
  name: "home",
  components: {
    Header,
    Banner,
    Superlier,
    Buyer,
    Footer
  },
  methods: {
 
  },
  mounted(){
    // this.clsssList()
  }
};
</script>
