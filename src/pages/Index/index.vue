<template>
  <div class='container'>
    <nav-bar />
    <Mine name='a' @changeValue='receive'/>
    <Tab />
    <ArticleList />
    <Footer />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import Mine from '../../components/mine'
import Tab from '../../components/tab'
import ArticleList from '../../components/articleList'
import Footer from '../../components/footer'
export default {
  methods: {
    receive (val) {
      console.log(val)
    }
  },
  components: {
    'nav-bar': NavBar,
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
