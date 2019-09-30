<template>
  <div class='tab'>
    <ul>
      <router-link
        tag='li'
        v-for='(item,index) in tabList'
        :to="{name: item.name}"
        :key='index'
        @click.native="handleClick(item.name)"
        :class="[setTabItem == item.name ? 'active' : '']"
      >{{item.label}}</router-link>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        tabList: [
          {
            label: '简历',
            name: 'resume'
          },
          {
            label: '点滴',
            name: 'article'
          },
          {
            label: '留言',
            name: 'message'
          },
        ]
      }
    },
    computed: mapState({
      setTabItem: state => state.selectTab
    }),
    created() {
      // 获取浏览器前进后退 tab_name
      this.$router.beforeResolve((to, from, next) => {
        next()
        if(to.name == 'detail') {
          this.changeTab('article')
        } else {
          this.changeTab(to.name)
        }
      })
    },
    methods: {
      ...mapActions({
        changeTab: 'changeTab'
      }),
      handleClick(tab_name) {
        sessionStorage.setItem('selectTab', JSON.stringify(tab_name)),
        this.changeTab(tab_name)
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