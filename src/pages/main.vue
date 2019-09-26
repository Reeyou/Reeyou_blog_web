<template>
  <div class="layout">
    <Mine />
    <Tab />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Mine from "../components/mine";
import Tab from "../components/tab";
import Footer from "../components/footer";
export default {
  components: {
    Mine,
    Tab,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 60px 0 40px 0 ;
  max-width: 22.222222rem /* 1200/54 */;
  margin: 0 auto;
}
</style>