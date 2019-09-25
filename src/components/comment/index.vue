<template>
  <div class='comment'>
    <section class='input-container'>
      <textarea ref='input' class='input' name="" id="" cols="30" rows="10"></textarea>
      <div class="control">
        <p ref='errMsg' class="errMsg">请输入评价内容</p>
        <button ref='btn' class='btn'>发布</button>
      </div>
    </section>
    <section class='comment-list'>
      <ul></ul>
    </section>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .comment {
    .input-container {
      .input {

      }
      .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .errMsg {
          font-size: 14px;
          color: red;
        }
        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          background: red;
        }
      }
    }
    .comment-list {
      ul {
        li {
          line-height: 57px;
				  font-size: 14px;
				  color: #606060;
          &:nth-child(n+2) {
            border-top: 1px solid #eee;
          }
        }
      }
    }
  }
</style>