<template>
  <div class='tab'>
    <ul>
      <router-link
        tag='li'
        v-for='(item,index) in tabList'
        :to="{name: item.path}"
        :key='index'
        @click.native="handleClick(index)"
        :class="[currentIndex == index ? 'active' : '']"
      >{{item.label}}</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 1,
        tabList: [
          {
            label: '简历',
            path: 'resume'
          },
          {
            label: '点滴',
            path: 'article'
          },
          {
            label: '留言',
            path: 'message'
          },
        ]
      }
    },
    created() {
      console.log(this.$route)
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    width: 100%;
    text-align: center;
    ul {
      padding: 0;
      // .router-link-exact-active {
      //   text-decoration: underline;
      // }
      .active {
        text-decoration: underline;
      }
      > li {
        display: inline-block;
        margin-right: 1.2em;
        font-size: 1.2em;
        color: #948c76;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
</style>