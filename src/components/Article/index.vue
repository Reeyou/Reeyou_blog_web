<template>
  <div class="article">
    <div class="dots"></div>
    <div class="date-container">
      <router-link
        tag="span"
        class="date"
        :to="{name: 'detail', params: {id: articleId}}"
      >{{$moment(article.create_time).format('YYYY/MM/DD')}}</router-link>
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
        <div class='loading' v-if='loading'></div>
        <img :src="poster_url" v-else alt />
      </div>
    </div>
  </div>
</template>

<script>
import spin from '@/components/Loading'
import loadingPic from '@/assets/logo.png'
export default {
    props: ['article'],
    data () {
        return {
            loading: true,
            articleId: this.article._id,
            poster_url: ''
        }
    },
    watch: {},
    created () {
        console.log(this.article)
    },
    mounted () {
    // 图片加载loading
        var newImg = new Image()
        newImg.src = this.article.poster
        newImg.onerror = () => { // 图片加载错误时的替换图片
            this.loading = false
            newImg.src = ''
        }
        newImg.onload = () => { // 图片加载成功后把地址给原来的img
            this.loading = false
            this.poster_url = newImg.src
        }
    },
    components: {
        spin
    }
}
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
    top: 16PX;
    left: -40px;
    z-index: 10;
    background: #fff;
  }
  .date-container {
    display: block;
    position: absolute;
    top: 10PX;
    font-size: 12px;
    margin-left: 10PX;
    transition: 400ms;
    z-index: 10;
    &:hover {
      margin-left: -6PX;
      cursor: pointer;
      .date {
        background: $hoverColor;
        &:after {
          border-color: $hoverColor transparent transparent transparent;
        }
      }
    }
    .date {
      display: inline-block;
      box-sizing: border-box;
      padding: 0 8PX 0 2PX;
      height: 26PX;
      vertical-align: middle;
      line-height: 26PX;
      font-size: 12PX;
      background: $BrightColor;
      position: relative;
      color: $DeepColor;
      &:after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: -26PX;
        border-width: 13PX;
        border-style: dashed;
        border-color: $BrightColor transparent transparent transparent;
        transform: rotate(90deg);
      }
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
        margin: 30PX 0 .2rem 0;
        font-size: 14PX;
        line-height: 18PX;
        a {
          color: $titleColor;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .descript {
        font-size: 13PX;
        line-height: 17PX;
        text-align: left;
      }
      .tagList {
        position: absolute;
        bottom: 22px;
        margin: 10px 0;
        font-size: 12PX;
        a {
          color: $DeepColor;
          padding: 6px 20px;
          border-radius: 8px;
          background: $BrightColor;
          // text-decoration: underline;
          font-size: 14PX;
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
      height: 190px;
      margin-top: .45rem;
      justify-content: center;
      align-items: center;
      position: relative;
      img {
        width: 200px;
        height: 190px;
        border-radius: 10px;
      }
      .loading {
        width: 200px;
        height: 190px;
        border-radius: 10px;
        background: $BrightColor;
      }
    }
  }
}
</style>
