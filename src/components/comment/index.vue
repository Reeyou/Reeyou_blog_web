<template>
  <div class="comment">
    <section class="comment-container">
      <div class="input-container">
        <div class="login">
          <p class="tips" v-if='state'>欢迎评论 {{user.name}}</p>
          <p class="tips" v-else>评论请先登录</p>
          <p class="login-btn" v-if='state' @click='handleLogout'>退出</p>
          <p class="login-btn" v-else @click='handleLogin'>登录</p>
        </div>
        <textarea
          v-model="inputValue"
          placeholder="请输入评论,文明理性..."
          class="input"
          name
          id
          cols="80"
          rows="20"
        ></textarea>
      </div>
      <div class="control">
        <p ref="errMsg" class="errMsg" v-if='errState'>请输入评价内容</p>
        <button @click='handleOk' class="btn">发布</button>
      </div>
    </section>
    <section class="comment-list">
      <ul ref='commentList'>
        <li v-for='(item,index) in list' :key='index'>
          <div class="avatar">{{item.firstName}}</div>
          <div class="con">
            <p class='info'>
              <span class="name">{{item.name}}</span>
              <span class='date'>1个月前</span>
            </p>
            <p class="value">{{item.content}}</p>
            <p class='handle'>
              <span class="back hover">回复</span>
              <span class='del hover'>删除</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { addComment } from '@/service/article'
import { getComment } from '@/service/article'
export default {
  data() {
    return {
      state: false,
      firstName: '',
      inputValue: '',
      comment: '',
      errState: false,
      list: [],
      commentData: []
    }
  },
  created() {
    this.getCommentList()
    this.state = JSON.stringify(this.user) === '{}' ? false : true
    this.firstName = this.user.name.substr(0,1)
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    handleLogin() {
      window.location = 'https://github.com/login/oauth/authorize?client_id=Iv1.0332894e1a1d8b33&redirect_uri=http://localhost:8080/oauth/redirect'
    },
    handleLogout() {
      localStorage.removeItem('userinfo')
    },
    handleOk() {
      this.content = this.inputValue
      this.errState = this.comment ? false : true
      this.list.unshift({
        firstName: this.firstName,
        name: this.user.name,
        date: '一个月前',
        content: this.content,
      })
      const params = {
        articleId: this.$route.params.id,
        name: this.user.name,
        content: this.content
      }
      addComment(params).then(res => {
        if(res.code == 200) {
          // this.data = res.data
        }
      })
    },
    getCommentList() {
      getComment({articleId: this.$route.params.id}).then(res => {
        this.commentData = res.data
        let len = this.commentData.length
        for(var i = 0; i < len; i++) {
          this.commentData[i]['firstName'] = this.commentData[i].name.substr(0,1)
        }
        this.list.push(...this.commentData)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>