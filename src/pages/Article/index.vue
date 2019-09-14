<template>
  <div>
    <Mine />
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
  components: {
    Mine,
    Tab,
    ArticleList,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
