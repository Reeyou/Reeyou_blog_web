<template>
  <div class='container'>
    <ArticleList class='articleList'/>
    <Slider class='slider' />
    <!-- <Comment /> -->
  </div>
</template>

<script>
import ArticleList from '../../components/articleList'
import Slider from '../../components/slider/sliderHome'
import Comment from '../../components/comment'
export default {
  components: {
    ArticleList,
    Slider,
    Comment
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  margin-top: 80px;
  display: flex;
  .articleList {
    flex: 1;
  }
  .slider {
    flex: 0 0 25%;
  }
}
@media screen and (max-width: 800px){
  .container {
    .slider {
      display: none;
    }
  }
}
</style>
