<template>
  <div class="container">
    <div class="about">
      <h2>Reeyou</h2>
      <p>Hit me like a ray of sun!</p>
    </div>
    <div class="flex-box">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
    <div class="box">
      <div class="con"></div>
    </div>
    <div :style="{width: '100px',height: '20px',background: 'red'}" @click='show'>{{count}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  computed: mapState({
    count: state => state.count
  }),
  methods: {
    show() {
      this.$store.dispatch('changeStatus')
      // console.log(this.$store.state.count)
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  // font-size: 16px;
  .about {
    text-align: center;
    margin-top: 1rem;
    h2 {
      font-size: .64rem;
    }
    p {
      font-size: 0.533333rem;
      margin: 0.266667rem 0;
    }
  }
  .flex-box {
    display: flex;
    height: 1.6rem;
    .left {
      width: 1.866667rem;
      background: pink;
    }
    .middle {
      flex: 1;
      background: red;
    }
    .right {
      width: 1.86667rem;
      background: pink;
    }
  }
  .box {
    width: 100%;
    .con {
      width: 5rem;
      height: 5rem;
      margin: 1rem auto 0;
      background: blueviolet;
    }
  }
}
</style>