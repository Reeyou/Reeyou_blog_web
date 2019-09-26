<template>
  <div class="detail">
    <article class="detail-container">
      <section class="title">{{article.title}}</section>
      <section class="content" v-highlightB v-html='article.content'>
        <h2>解放军解放军解放军解放军解放军解放军解放军解放军解放军解放军解放军解放军解放军解放军</h2>
      </section>
      <section class="foot">
        <div class="date">2019.09.09</div>
      </section>
    </article>
    <article class="slider">
      <SliderDetail />
    </article>
  </div>
</template>

<script>
import SliderDetail from "../../../components/slider/sliderDetail";
import { getArticleDetail } from '@/service/article'
export default {
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.getData()
    console.log(this.$route)
  },
  methods: {
    getData() {
      getArticleDetail({id: this.$route.params.id}).then(res => [
        this.article = res.data
      ])
    }
  },
  components: {
    SliderDetail
  }
};
</script>

<style lang="scss" scoped>
.detail {
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  .detail-container {
    flex: 1;
    padding: 28px;
    box-sizing: border-box;
    text-align: center;
    .title {
      margin: 10px 0 20px 0;
      font-size: 1.5em;
      font-weight: 400;
      color: #111;
    }
    .content {
      margin: 0;
      font-size: 1em;
      text-align: justify;
      line-height: 1.6em;
      >>> h2 {
        font-size: 20px;
      }
      & >>> *{
        margin-bottom: 0.7em;
      }
      & >>> code, & >>> pre div {
        margin-bottom: 0;
      }
      >>> strong {
        color: rgb(178, 107, 0);
        font-weight: bold;
      }
      >>> pre{
        display: block;
        // max-width: 800px;
        flex: 1;
        margin: 0 0 16px;
        font-size: 1em;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 5px;
        line-height: 1.5em;
        overflow: auto;
      }
    }
    .foot {
      margin: 10px 0;
      width: 100%;
      overflow: hidden;
      color: #787978;
      .date {
        float: right;
        font-size: 1em;
      }
    }
  }
  .slider {
    flex: 0 0 25%;
    margin-top: 80px;
    // margin-right: 40px;
    padding: 0 40px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 800px) {
  .detail {
    .detail-container {
      width: 100%;
    }
    .slider {
      display: none;
    }
  }
}
</style>