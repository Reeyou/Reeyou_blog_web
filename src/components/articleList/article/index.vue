<template>
  <div class="article">
    <div class="dots"></div>
    <div class="date-container">
      <p class="trig"></p>
      <router-link tag="span" class="date" :to="{name: 'detail', params: {id: articleId}}">2019.9.9</router-link>
    </div>
    <div class="container">
      <div class="line"></div>
      <div class="content">
        <div class="title">
          <router-link :to="{name: 'detail', params: {id: articleId}}">{{article.title}}</router-link>
        </div>
        <div class="descript">{{article.desc}}</div>
        <div class="tagList">
          <!-- <a
            v-for="(item,index) in article.tag"
            :key='index'
          >#{{item}}</a>-->
          <a href>#{{article.tag}}</a>
        </div>
      </div>
      <div class="cover-img">
        <img :src="article.poster" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
    return {
      articleId: this.article._id
    };
  },
  watch: {},
  created() {}
};
</script>

<style lang="scss" scoped>
$DeepColor: #948c76;
$hoverColor: #e7d9ba;
$BrightColor: #f7f3ee;
$dotColor: #e2e0dc;
$titleColor: #444;

.article {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-left: 0.6em;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  .dots {
    width: 1em;
    height: 1em;
    border: 2px solid $dotColor;
    border-radius: 50%;
    position: absolute;
    top: 0.3rem;
    left: -40px;
    z-index: 10;
    background: #fff;
  }
  .date-container {
    display: block;
    position: absolute;
    top: 0.18rem;
    font-size: 12px;
    margin-left: 0.5em;
    transition: 400ms;
    z-index: 10;
    &:hover {
      margin-left: 0.1em;
      cursor: pointer;
      .trig {
        border-color: $hoverColor transparent transparent transparent;
      }
      .date {
        background: $hoverColor;
      }
    }
    .date {
      display: inline-block;
      padding: 0 0.5em;
      height: 2.4em;
      line-height: 2.4em;
      vertical-align: top;
      background: $BrightColor;
      color: $DeepColor;
    }
    .trig {
      display: inline-block;
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: -2.3em;
      border-width: 1.2em;
      border-style: dashed;
      border-color: $BrightColor transparent transparent transparent;
      transform: rotate(90deg);
    }
  }
  .container {
    width: 100%;
    position: relative;
    padding: 40px 0 60px 0;
    display: flex;
    .line {
      width: 2px;
      height: 100%;
      background: $BrightColor;
      position: absolute;
      left: -40px;
      z-index: 0;
    }
    .content {
      padding: 0 1em 2em 0em;
      overflow: hidden;
      flex: 1;
      .title {
        margin: .6rem 0 .2rem 0;
        font-size: 1.2em;
        line-height: 18px;
        a {
          color: $titleColor;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .descript {
        font-size: 1em;
        line-height: 1.6em;
        text-align: justify;
      }
      .tagList {
        position: absolute;
        bottom: 58px;
        margin: 10px 0;
        a {
          color: $DeepColor;
          padding: 6px 20px;
          border-radius: 8px;
          background: $BrightColor;
          // text-decoration: underline;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        a + a {
          margin-left: 14px;
        }
      }
    }
    .cover-img {
      flex: 0 0 200px;
      margin-top: .45rem;
      img {
        width: 200px;
        height: 190px;
        border-radius: 10px;
      }
    }
  }
}
</style>