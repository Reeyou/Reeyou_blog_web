<template>
  <div class="comment">
    <section class="comment-container">
      <div class="input-container">
        <div class="login">
          <p class="tips" v-if="state">欢迎{{type}} {{user.name}}</p>
          <p class="tips" v-else>{{type}}请先登录</p>
          <p class="login-btn" v-if="state" @click="handleLogout">退出</p>
          <p class="login-btn" v-else @click="handleLogin">登录</p>
        </div>
        <textarea
          ref="textarea"
          v-model="inputValue"
          placeholder="请输入内容..."
          class="input"
          name
          id
          cols="80"
          rows="20"
        ></textarea>
      </div>
      <div class="control">
        <p ref="errMsg" class="errMsg" v-if="errState">请输入{{type}}内容</p>
        <button @click="handleComment" class="btn" v-if="btnState">发布</button>
        <button @click="handleReply" class="btn" v-if="!btnState">回复</button>
      </div>
    </section>
    <section class="comment-list">
      <ul ref="commentList">
        <li v-for="(item,index) in Data" :key="index">
          <div class="avatar">{{item.name.substr(0,1)}}</div>
          <div class="con">
            <p class="info">
              <span class="name">{{item.name}}</span>
              <span class="date">{{$moment(item.create_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
            </p>
            <p class="value">{{item.content}}</p>
            <p class="handle">
              <span class="back hover" @click="handleBack(item.name, item._id)">回复</span>
              <span class="del hover" @click="handleDel(item._id)">删除</span>
            </p>
            <div
              class="reply"
              v-for="(replyItem,index) in item.reply"
              :key="index"
              v-show="item.reply.length > 0"
            >
              <ul>
                <li>
                  <div class="avatar">{{replyItem.from_name.substr(0,1)}}</div>
                  <div class="con">
                    <p class="info">
                      <span class="name">{{replyItem.from_name}}</span>
                      <span class="date">{{$moment(replyItem.create_time).format('YYYY-MM-DD HH:mm:ss')}}</span>
                    </p>
                    <p class="value">{{replyItem.content}}</p>
                    <p class="handle">
                      <span class="back hover" @click="handleBack(item.name, item._id)">回复</span>
                      <span class="del hover" @click="handleDel(item._id)">删除</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: [
    'type',
    'Data',
    // 'handleComment',
    // 'handleBack',
    // 'handleReply',
    'handleDel'
  ],
  data() {
    return {
      state: false,
      inputValue: "",
      comment: "",
      errState: false,
      btnState: true,
      replyName: "",
      replyId: ""
    };
  },
  created() {
    this.state = JSON.stringify(this.user) === "{}" ? false : true;
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    handleLogin() {
      window.location =
        "https://github.com/login/oauth/authorize?client_id=Iv1.0332894e1a1d8b33&redirect_uri=http://localhost:8080/oauth/redirect";
    },
    handleLogout() {
      localStorage.removeItem("userinfo");
    },
    handleComment() {
      this.$emit('commentTo',{content: this.inputValue})
      this.errState = this.inputValue ? false : true;
    },
    
    handleBack(name, id) {
      this.btnState = false;
      this.inputValue = `@${name}：`;
      this.$refs.textarea.focus();
      this.replyId = id;
    },
    handleReply() {
      this.$emit('replyTo',{content: this.inputValue, replyId: this.replyId})
      this.errState = this.inputValue ? false : true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>