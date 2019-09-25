<template>
  <div class="article">
    <div class="dots"></div>
    <div class="date-container">
      <p class='trig'></p>
      <router-link
        tag='span'
        class='date'
        to='./detail'
      >2019.9.9</router-link>
    </div>
    <div class="container">
      <div class="line"></div>
      <div class="content">
        <div class="title">
          <router-link
            to="./detail"
          >深度优先遍历</router-link>
        </div>
        <div class="descript">深度优先遍历 算法</div>
        <div class="tagList">
          <a>#html</a>
          <a>#html</a>
        </div>
      </div>
      <div class="cover-img" v-if='imgState'>
        <img src="../../../assets/reeyou.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgState: true
    }
  }
};
</script>

<style lang="scss" scoped>
$DeepColor: #948C76;
$hoverColor: #e7d9ba;
$BrightColor: #F7F3EE;
$dotColor: #e2e0dc;
$titleColor: #444;

.article {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-left: .6em;
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
    top: 0;
    left: 0;
    z-index: 10;
    background: #fff;
  }
  .date-container {
    display: block;
    position: absolute;
    top: -8px;
    font-size: 12px;
    margin-left: 3em;
    transition: 400ms;
    z-index: 10; 
    &:hover {
      margin-left: 2em;
      cursor: pointer;
      .trig {
        border-color: $hoverColor transparent transparent transparent;
      }
      .date {
        background: $hoverColor;
      }
    }
    .trig {
      display: inline-block;
      width: 0;
      height: 0;
      position: absolute;
      top: -1px;
      left: -40px;
      border-width: 21px;
      border-style: dashed;
      border-color: $BrightColor transparent transparent transparent;
      transform: rotate(90deg)
    }
    .date {
      display: inline-block;
      padding: 0 1em;
      height: 40px;
      font-size: .8em;
      vertical-align: top;
      line-height: 40px;
      background: $BrightColor;
      color: $DeepColor;
    }
  }
  .container {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 20px 0 40px 0;
    .line {
      width: 2px;
      height: 100%;
      background: $BrightColor;
      position: absolute;
      z-index: 0;
    }
    .content {
      padding: 0 1em 2em 2em;
      overflow: hidden;
      float: left;
      .title {
        margin: .6rem 0 .2rem 0;
        font-size: 14px;
        line-height: 18px;
        a {
          color: $titleColor;
        }
        &:hover {
          text-decoration: underline;
        }
      }
      .descript {
        margin-top: 20px;
        font-size: 14px;
      }
      .tagList {
        position: absolute;
        bottom: 40px;
        margin: 10px 0;
        a {
          color: $DeepColor;
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
      float: right;
      img {
        width: 200px;
        height: 190px;
        border-radius: 10px;
      }
    }
  }
}
</style>