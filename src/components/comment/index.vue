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
        <p ref="errMsg" class="errMsg" v-if="loginState">请先登录再发表</p>
        <button
          @click="handleComment"
          class="btn"
          v-if="btnState"
        >发布</button>
        <button
          @click="handleReply"
          class="btn"
          v-if="!btnState"
        >回复</button>
      </div>
    </section>
    <section class="comment-list">
      <ul ref="commentList">
        <li v-for="(item,index) in Data" :key="index">
          <div class="avatar">{{item.name.substr(0,1)}}</div>
          <div class="con">
            <p class="info">
              <span class="name">{{item.name}}</span>
              <span class="date">{{$moment(item.create_time).format('YYYY/MM/DD HH:mm')}}</span>
            </p>
            <p class="value">{{item.content}}</p>
            <p class="handle">
              <span
                class="back hover"
                @click="handleBack(item.name, item._id)"
              >回复</span>
              <span
                class="del hover"
                v-if='item.name == user.name'
                @click="handleDel(item._id)"
              >删除</span>
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
                      <span class="date">{{$moment(replyItem.create_time).format('YYYY/MM/DD HH:mm')}}</span>
                    </p>
                    <p class="value">{{replyItem.content}}</p>
                    <p class="handle">
                      <span
                        class="back hover"
                        @click="handleBack(item.name, item._id)"
                      >回复</span>
                      <span
                        class="del hover"
                        v-if='replyItem.from_name == user.name'
                        @click="handleDelReply(replyItem._id)"
                      >删除</span>
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
import config from '@/config'
export default {
  props: [
    'type',
    'Data',
    'handleDel',
    'handleDelReply'
  ],
  data() {
    return {
      state: false,
      inputValue: "",
      comment: "",
      loginState: false,
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
      window.location = config.github; 
    },
    handleLogout() {
      localStorage.removeItem("userinfo");
      this.state = false
      this.user.name = ''
    },
    handleComment() {
      this.errState = this.inputValue ? false : true;
      this.loginState = JSON.stringify(this.user) === "{}" && !this.errState ? true : false;
      this.inputValue = ''
      if(!this.errState && !this.loginState) {
        this.$emit('commentTo',{content: this.inputValue})
      }
    },
    handleBack(name, id) {
      this.btnState = false;
      this.inputValue = `@${name}：`;
      this.$refs.textarea.focus();
      this.replyId = id;
    },
    handleReply() {
      this.errState = this.inputValue.split('：')[1] ? false : true;
      this.loginState = this.user.name ? false : true;
      this.inputValue = ''
      if(!this.errState && !this.loginState) {
        this.$emit('replyTo',{content: this.inputValue, replyId: this.replyId})
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>