<template>
  <div class='article-list'>
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <div class="page">
      <Pagination />
    </div>
  </div>
</template>

<script>
import Article from './article'
import Pagination from '../pagination'
  export default {
    components: {
      Article,
      Pagination
    }
  }
</script>

<style lang="scss" scoped>
  .article-list {
    max-width: 1000px;
    box-sizing: border-box;
    padding:0 15px;
    overflow: hidden;
    .page {
      width: 100%;
      margin-top: 20px;
      padding: 0 10px;
    }
  }
</style>