<template>
  <div class='article-list'>
    <Article />
    <Article />
    <Article />
  </div>
</template>

<script>
import Article from './article'
  export default {
    components: {
      Article
    }
  }
</script>

<style lang="scss" scoped>
  .article-list {
    width: 100%;
  }
</style>