<template>
  <div class='article'>
    <div class="date">
      <router-link to='./Article'>2018.9.9</router-link>
    </div>
    <div class="title">
      <router-link to='./Article'>深度优先遍历</router-link>
    </div>
    <div class="cover-img">
      <img src="../../../assets/reeyou.jpg" alt="">
    </div>
    <div class="descript">深度优先遍历 算法</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .article {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto 30px;
    padding-left: 50px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
    }
    &:after {
      content: '';
      width: 1px;
      height: calc(100% + 10px);
      background: #000;
      position: absolute;
      top: 14px;
      left: 14px;
    }
    .date {
      font-size: 12px;
      position: realtive;
      &:after {
        content: '';
        width: 20px;
        height: 20px;
        border: 4px solid #000;
        border-radius: 50%;
        position: absolute;
        top: -10px;
        left: 0;
      }
    }
    .title {
      margin: 10px 0 20px 0;
      font-size: 14px;
    }
    .cover-img {
      img {
        width: 340px;
        height: 200px;
      }
    }
    .descript {
      margin-top: 20px;
      font-size: 14px;
    }
  }
</style>