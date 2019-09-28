<template>
  <div class='container'>
    <ArticleList
      class='articleList'
      :articleList='ArticleList'
    />
    <Slider
      class='slider'
      :tagList='tagList'
      v-if='tagList.length > 0'
    />
    <!-- <Comment /> -->
  </div>
</template>

<script>
import ArticleList from '../../components/articleList'
import Slider from '../../components/slider/sliderHome'
import Comment from '../../components/comment'
import { getArticleList, getTagList } from '@/service/article'
export default {
  data() {
    return {
      ArticleList: [],
      tagList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getArticleList().then(res => {
        this.ArticleList = res.data
      })
      getTagList().then(res => {
        this.tagList = res.data
      })
    },
  },
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
    margin-top: 0.18rem;
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
