<template>
  <div class='container'>
    <Mine name='a' @changeValue='receive'/>
    <Tab />
    <ArticleList />
    <Footer />
  </div>
</template>

<script>
import Mine from '../../components/mine'
import Tab from '../../components/tab'
import ArticleList from '../../components/articleList'
import Footer from '../../components/footer'
export default {
  methods: {
    receive(val) {
      console.log(val)
    }
  },
  components: {
    Mine,
    Tab,
    ArticleList,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
