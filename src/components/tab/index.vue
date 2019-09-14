<template>
  <div class='tab'>
    <ul>
      <li>简历</li>
      <li>点滴</li>
      <li>留言</li>
    </ul>
  </div>
</template>

<script>
  export default {
    
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
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>