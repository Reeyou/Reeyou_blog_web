<template>
  <div class='message'>
    <Comment
      type="留言"
      :Data='msgData'
      :handleDel='handleDel'
      :handleDelReply='handleDelReply'
      @commentTo='handleMsg'
      @replyTo='handleReply'
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Comment from "../../components/comment";
import { 
  getMessage,
  addMessage,
  deleteMsg,
  replyMsg,
  deleteReplyMsg
 } from '@/service/message'
  export default {
    data() {
      return {
        msgData: []
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
        getMessage().then(res => {
          if(res.code == 200) {
            this.msgData = res.data
          }
        })
      },
      handleMsg(data) {
        const params = {
          name: this.user.name,
          content: data.content
        };
        addMessage(params).then(res => {
          if (res.code == 200) {
            this.getData()
          }
        });
      },
      handleReply(data) {
        const params = {
          fromName: this.user.name,
          toUid: data.replyId,
          content: data.content
        };
        replyMsg(params).then(res => {
          if(res.code == 200) {
            this.getData()
          }
        });
      },
      handleDel(id) {
        deleteMsg({ msgId: id }).then(res => {
          if(res.code == 200) {
            this.getData()
          }
        })
      },
      handleDelReply(id) {
        deleteReplyMsg({ replyMsgId: id }).then(res => {
          if(res.code == 200) {
            this.getData()
          }
        })
      }
    },
    components: {
      Comment
    }
  }
</script>

<style lang="scss" scoped>
.message {
  max-width: 800PX;
  margin: 40px auto 0;
  box-sizing: border-box;
  padding: 0 20px;
}
</style>