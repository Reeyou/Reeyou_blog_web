<template>
  <div class='mine'>
    <div class="avatar">
      <img src="../../assets/reeyou.jpg" alt="">
    </div>
    <div class="nickName" @click="$emit('changeValue','change')">Reeyou{{name}}</div>
  </div>
</template>

<script>
  export default {
    props: ['name'],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .mine {
    width: 100%;
    text-align: center;
    .avatar img{
      width: 40vw;
      height: 40vw;
      max-width: 140px;
      max-height: 140px;
      border-radius: 50%;
    }
    .nickName {
      color: #000;
      font-size: 1.2em;
      margin: 20px 0;
    }
  }
</style>