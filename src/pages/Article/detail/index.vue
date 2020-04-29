<template>
  <div class="detail">
    <div class="detail-container">
      <section class="title">{{article.title}}</section>
      <section class="detail-content" v-highlightB v-html='article.content'>
      </section>
      <section class="foot" v-if='showVisble'>
        <div class="date">{{$moment(article.create_time).format('YYYY/MM/DD')}}</div>
      </section>
      <section class='comment'>
        <!-- <Comment
          type="评论"
          :Data='commentData'
          :handleDel='handleDel'
          :handleDelReply='handleDelReply'
          @commentTo='handleComment'
          @replyTo='handleReply'
          v-if='showVisble'
        /> -->
      </section>
    </div>
    <div class="slider">
      <m-catalog :data="listData" v-if='showVisble' />
    </div>
    <div class="toolBar">
      <m-toolBar />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Catalog from '../../../components/slider/catalog'
import ToolBar from '../../../components/slider/toolBar'
import Comment from '../../../components/comment'
import {
    getArticleDetail,
    addComment,
    // getComment,
    deleteComment,
    replyComment,
    deleteReply
} from '@/service/article'
export default {
    data () {
        return {
            article: {},
            articleId: this.$route.params.id,
            commentData: [],
            showVisble: false,
            listData: []
        }
    },
    created () {
        this.getData()
    },
    mounted () {
        this.$nextTick(() => {
            window.addEventListener('load', () => {
                const el = document.querySelector('.detail-content')
                for (let i = 0; i < el.children.length; i++) {
                    let obj = {}
                    if (el.children[i].nodeName === 'H1') {
                        obj.label = el.children[i].innerHTML.split('/a>')[1]
                        obj.id = el.children[i].firstChild.id
                        this.listData.push(obj)
                    }
                    if (el.children[i].nodeName === 'H2') {
                        obj.sub_label = el.children[i].innerHTML.split('/a>')[1]
                        obj.id = el.children[i].firstChild.id
                        this.listData.push(obj)
                    }
                }
            })
        })
    },
    computed: {
        ...mapState({
            user: state => state.user
        })
    },
    watch: {
        article (val, oldVal) {
            if (val !== oldVal) {
                this.showVisble = true
            }
        }
    },
    methods: {
        getData () {
            getArticleDetail({id: this.articleId}).then(res => {
                this.article = res.data
            })
            // getComment({ pageSize: 1, limit: 5, articleId: this.articleId}).then(res => {
            //   this.commentData = res.data.list
            // })
        },
        handleComment (data) {
            const params = {
                articleId: this.articleId,
                name: this.user.name,
                content: data.content
            }
            addComment(params).then(res => {
                if (res.code === 200) {
                    this.getData()
                }
            })
        },
        handleReply (data) {
            const params = {
                fromName: this.user.name,
                toUid: data.replyId,
                articleId: this.articleId,
                content: data.content
            }
            replyComment(params).then(res => {
                if (res.code === 200) {
                    this.getData()
                }
            })
        },
        handleDel (id) {
            deleteComment({ commentId: id }).then(res => {
                if (res.code === 200) {
                    this.getData()
                }
            })
        },
        handleDelReply (id) {
            deleteReply({ replyId: id }).then(res => {
                if (res.code === 200) {
                    this.getData()
                }
            })
        }
    },
    components: {
        'm-catalog': Catalog,
        'm-toolBar': ToolBar,
        Comment
    }
}
</script>

<style lang="scss" scoped>
.detail {
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  position: relative;
  .detail-container {
    flex: 1;
    padding: 28px;
    box-sizing: border-box;
    text-align: center;
    .title {
      margin: 10px 0 20px 0;
      font-size: 20PX;
      font-weight: 400;
      color: #111;
    }
    .detail-content {
      margin: 0;
      font-size: 13PX;
      text-align: justify;
      line-height: 1.6em;
      >>> p {
        line-height: 1.5em;
      }
      >>> h1 {
        font-size: 18PX;
        font-weight: bold;
        padding-top: 20PX;
      }
      >>> h2 {
        font-size: 16PX;
        font-weight: bold;
      }
      >>> h3 {
        font-size: 14PX;
        font-weight: bold;
      }
      >>> h4 {
        font-size: 14PX;
        font-weight: bold;
      }
      >>> h5 {
        font-size: 14PX;
        font-weight: bold;
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
        font-size: 14PX;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        border-radius: 5px;
        line-height: 1.4em;
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
  .toolBar {
    position: absolute;
    top: 344px;
    left: -120px;
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
