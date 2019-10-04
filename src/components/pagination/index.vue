<template>
  <div class="pagination">
    <div class="pageInfo">
      <div class="current">当前第{{pageSize}}页</div>/
      <div class="total">共{{totalPage}}页</div>
    </div>
    <ul  @click="changePage">
      <li id='first' v-if='firstState'>首页</li>
      <li id='prev' v-if='prevState'>上一页</li>
      <li id='next' v-if='nextState'>下一页</li>
      <li id='last' v-if='lastState'>尾页</li>
    </ul>
  </div>
</template>

<script>
/**
 * @totalPage 总页数
 * @pageSize  当前页数
 * @limit     每页条数
 */
export default {
  props: ['totalPage','pageSize','limit'],
  data() {
    return {
      currentPage: this.pageSize,
    };
  },
  computed: {
    firstState() {
      return this.currentPage > 1
    },
    lastState() {
      return this.currentPage > 0 && this.currentPage < this.totalPage
    },
    prevState() {
      return this.currentPage > 1
    },
    nextState() {
      return this.currentPage < this.totalPage
    }
  },
  methods: {
    changePage(e) {
      //   /* 事件委托 */
      switch (e.target.id) {
        case "first":
          this.currentPage = 1;
          break;
        case "prev":
          if (this.currentPage > 1) {
            this.currentPage--;
          }
          break;
        case "next":
          if (this.currentPage < this.totalPage) {
            this.currentPage++;
          }
          break;
        case "last":
          this.currentPage = this.totalPage;
          break;
        default:
          break;
      }
      this.$emit("handleChangePage", this.currentPage);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  overflow: hidden;
  .pageInfo {
    float: left;
    padding: 12px 0;
    border-radius: 6px;
    background: #f7f3ee;
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
      background: #f7f3ee;
      border: 1px solid #eee;
      &:nth-child(n + 2) {
        margin-left: 10px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>