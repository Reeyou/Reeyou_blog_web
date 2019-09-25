<template>
  <div class="wrapper">
    <article class="articleDetail">
      <section class="title">nodejs 使用 nodemailer 发送邮件到指定邮箱</section>
      <section class="content">
        做这个功能的目的，是为了通知给我留言的同学。当TA的留言被回复后会即时收到通知邮件
        是为了通知给我留言的同学。当TA的留言被回复后会即时收到通知邮件是为了通知给我留言的同学。当TA的留言被回复后会即时收到通知邮件
      </section>
      <section class="foot">
        <div class="date">2019.09.09</div>
      </section>
    </article>
    <article>
      <section class="slider">slider</section>
    </article>
  </div>
</template>

<script>
import Mine from "../../../components/mine";
import Tab from "../../../components/tab";
export default {
  components: {
    Mine,
    Tab
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
  .articleDetail {
    max-width: 800px;
    float: left;
    padding: 28px;
    text-align: center;
    .title {
      margin: 10px 0 20px 0;
      font-size: 1.5em;
      font-weight: 400;
      color: #111;
    }
    .content {
      font-size: 1.2em;
      text-align: justify;
      line-height: 1.3em;
      color: #787978;
    }
    .foot {
      margin: 10px 0;
      width: 100%;
      overflow: hidden;
      color: #787978;
      .date {
        float: right;
        font-size: 1em;
      }
    }
  }
  .slider {
    float: right;
    margin: 40px 0;
    font-size: 1.5em;
    // background: #ddd;
  }
}
</style>