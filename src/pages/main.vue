<template>
  <div class="layout">
    <Mine />
    <Nav />
    <div class="content">
      <div v-if='loading' class="loading">
        <Spin class='spin' />
      </div>
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Mine from "../components/Mine";
import Nav from "../components/Nav";
import Spin from '@/components/Loading'
import Footer from "../components/Footer";
export default {
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
  created() {
    console.log(this.loading)
  },
  components: {
    Mine,
    Nav,
    Spin,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 60px 0 40px 0 ;
  max-width: 1200PX;
  margin: 0 auto;
  .content {
    width: 100%;
    .loading {
      // position: absolute;
      // left: 0;
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      .spin {
        // position: a;
        height: 100px;
      }
    }
  }
}
</style>