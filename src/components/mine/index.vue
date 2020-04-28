<template>
  <div class='mine'>
    <div class="avatar">
      <img src="../../assets/reeyou.jpg" alt="">
    </div>
    <!-- <div class="nickName" @click="$emit('changeValue','change')"><span>Reeyou{{name}}</span></div> -->
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
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
      width: 60vw;
      height: 60vw;
      max-width: 160px;
      max-height: 160px;
      border-radius: 50%;
    }
    .nickName {
      color: #000;
      font-size: 1.2em;
      margin: 2.6em 0 3em 0;
      span {
        background: #fdf4e8;
        padding: 10px 20px;
        color: #948c76;
        letter-spacing: 0.1em;
        font-weight: 400;
        font-size: 1.3em;
        border-radius: 0.2em;
      }
    }
  }
</style>
