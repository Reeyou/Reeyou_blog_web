<template>
  <div class='tab'>
    <ul>
      <router-link
        tag='li'
        :to="{name: 'article'}"
        v-for='(item,index) in tabList'
        :key='index'
      >{{item}}</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabList: ['简历','点滴','留言']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    ul {
      padding: 0;
      > li {
        display: inline-block;
        margin-right: 20px;
        font-size: 1.2em;
        color: #948c76;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          cursor: pointer;
          color: #1890ff;
          text-decoration: underline;
        }
      }
    }
  }
</style>