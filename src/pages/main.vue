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
  padding: 100px 0 40px 0 ;
  max-width: 1400px;
  margin: 0 auto;
}
</style>