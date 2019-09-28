<template>
  <div class='article-list'>
    <div class="box">
      <Article
      class='article'
      v-for='(item,index) in articleList'
      :key='index'
      :article='item'
    />
    </div>
    <div class="page">
      <!-- <Pagination /> -->
    </div>
  </div>
</template>

<script>
import Article from './article'
import Pagination from '../pagination'
  export default {
    props: ['articleList'],
    components: {
      Article,
      Pagination
    }
  }
</script>

<style lang="scss" scoped>
$BrightColor: #f7f3ee;
  .article-list {
    box-sizing: border-box;
    padding: 0 20px;
    .box {
      padding: 0 40px;
      .article {
      border-bottom: 1px solid $BrightColor;
      &:last-child {
        border-bottom: none;
      }
    }
    }
    .page {
      width: 100%;
      margin-top: 60px;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>