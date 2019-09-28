<template>
  <div class="detail">
    <article class="detail-container">
      <section class="title">{{article.title}}</section>
      <section class="content" v-highlightB v-html='article.content'>
      </section>
      <section class="foot">
        <div class="date">2019.09.09</div>
      </section>
      <section class='comment'>
        <Comment
          type="评论"
          :Data='commentData'
          :handleDel='handleDel'
          @commentTo='handleComment'
          @replyTo='handleReply'
        />
      </section>
    </article>
    <article class="slider">
      <SliderDetail />
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SliderDetail from "../../../components/slider/sliderDetail";
import Comment from "../../../components/comment";
import {
  getArticleDetail,
  addComment,
  getComment,
  deleteComment,
  replyComment
} from "@/service/article";
export default {
  data() {
    return {
      article: {},
      articleId: this.$route.params.id,
      commentData: []
    }
  },
  created() {
    this.getData()
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    getData() {
      getArticleDetail({id: this.articleId}).then(res => {
        this.article = res.data
      })
      getComment({ articleId: this.articleId}).then(res => {
        this.commentData = res.data;
      })
    },
   handleComment(data) {
      const params = {
        articleId: this.articleId,
        name: this.user.name,
        content: data.content
      };
      addComment(params).then(res => {
        if (res.code == 200) {
          // this.data = res.data
        }
      });
   },
   handleReply(data) {
     const params = {
        fromName: this.user.name,
        toUid: data.replyId,
        articleId: this.articleId,
        content: data.content
      };
      replyComment(params).then(res => {
        
      });
   },
    handleDel(id) {
      deleteComment({ commentId: id }).then(res => {});
    }
  },
  components: {
    SliderDetail,
    Comment
  }
};
</script>

<style lang="scss" scoped>
.detail {
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  .detail-container {
    flex: 1;
    padding: 28px;
    box-sizing: border-box;
    text-align: center;
    .title {
      margin: 10px 0 20px 0;
      font-size: 1.5em;
      font-weight: 400;
      color: #111;
    }
    .content {
      margin: 0;
      font-size: 1em;
      text-align: justify;
      line-height: 1.6em;
      >>> h2 {
        font-size: 20px;
      }
      & >>> *{
        margin-bottom: 0.7em;
      }
      & >>> code, & >>> pre div {
        margin-bottom: 0;
      }
      >>> strong {
        color: rgb(178, 107, 0);
        font-weight: bold;
      }
      >>> pre{
        display: block;
        // max-width: 800px;
        flex: 1;
        margin: 0 0 16px;
        font-size: 1.1em;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 5px;
        line-height: 1.4em;
        overflow: auto;
      }
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
    .comment {
      // height: 200px;
      margin-top: 40px;
    }
  }
  .slider {
    flex: 0 0 25%;
    margin-top: 80px;
    // margin-right: 40px;
    padding: 0 40px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 800px) {
  .detail {
    .detail-container {
      width: 100%;
    }
    .slider {
      display: none;
    }
  }
}
</style>