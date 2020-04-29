<template>
  <div class="container">
    <div class="box">
      <Article class="article" v-for="(item,index) in ArticleList" :key="index" :article="item" />
      <div class="page">
        <Pagination
          :totalPage="total"
          :pageSize="page"
          limit="5"
          @handleChangePage="handleChangePage"
          v-if="total > 0"
        />
      </div>
    </div>
    <Slider class="slider" :tagList="tagList" v-if="tagList.length > 0" />
  </div>
</template>

<script>
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'
import Slider from '../../components/slider/sliderHome'
import Comment from '../../components/comment'
import { getArticleList, getTagList } from '@/service/article'
export default {
    data () {
        return {
            ArticleList: [],
            tagList: [],
            total: 0,
            page: 1
        }
    },
    created () {
        this.getArticleData()
        this.getTagData()
    },
    methods: {
        getArticleData (pageSize = 1, limit = 5) {
            getArticleList({ pageSize, limit }).then(res => {
                this.ArticleList = res.data.list
                this.total = Math.ceil(res.data.total / 5)
            })
        },
        getTagData () {
            getTagList().then(res => {
                this.tagList = res.data
            })
        },
        handleChangePage (pageSize) {
            this.page = pageSize
            this.getArticleData(pageSize)
        }
    },
    components: {
        Article,
        Pagination,
        Slider,
        Comment
    }
}
</script>

<style lang="scss" scoped>
$BrightColor: #f7f3ee;
.container {
  width: 100%;
  margin-top: 80px;
  display: flex;
  .box {
    flex: 1;
    box-sizing: border-box;
    padding: 0 20px 0 60px;
    .article {
      border-bottom: 1px solid $BrightColor;
      &:last-child {
        border-bottom: none;
      }
    }
    .page {
      width: 100%;
      margin-top: 60px;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
  .slider {
    margin-top: 0.18rem;
    padding-left: 20px;
    flex: 0 0 25%;
  }
}
@media screen and (max-width: 800px) {
  .container {
    .slider {
      display: none;
    }
  }
}
</style>
