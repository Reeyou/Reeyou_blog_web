<template>
  <div class='pagination'>
    <div class="pageInfo">
      <div class="current">当前第5页</div>
      /
      <div class="total">共10页</div>
    </div>
    <ul>
      <li>上一页</li>
      <li>下一页</li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  overflow: hidden;
 .pageInfo {
   float: left;
   padding: 12px 16px;
   border-radius: 6px;
   background: #F7F3EE;
   border: 1px solid #eee;
    .current {
    display: inline-block;
  }
  .total {
    display: inline-block;
  }
 }
  ul {
    float: right;
    li {
      display: inline-block;
      padding: 12px 16px;
      border-radius: 6px;
      background: #F7F3EE;
      border: 1px solid #eee;
      &:nth-child(n+2) {
        margin-left: 10px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>