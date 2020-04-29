<template>
  <div :class="['m-nav-container',scroll ? 'fixed':'',fade?'fade':'']">
    <nav>
      <ul class="nav-left">
         <li v-for="(item,index) in navLeftList" :key="index">
            <router-link :to="{name: item.url}">{{item.label}}</router-link>
         </li>
        <li class='light'>
          <router-link :to="{name: 'discover'}">
            <i class="iconfont icon-search"></i>
            <span>发现</span>
          </router-link>
        </li>
      </ul>
      <div class="nav-right">
        <span class='app'>
          <a href="">下载APP</a>
        </span>
        <span class='weapp'>微信小程序</span>
        <span>
          <a href>登录/注册</a>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data () {
        return {
            navLeftList: [
                {label: 'Reeyou', url: '/'},
                {label: '首页', url: '/'},
                {label: '分类', url: 'category'},
                {label: '博客', url: 'blog'},
                {label: '关于', url: 'about'}
            ],
            scroll: false,
            fade: false
        }
    },
    mounted () {
        window.addEventListener('scroll', (e) => {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            this.scroll = scrollTop > 40
            this.fade = scrollTop < 40
        })
    }
}
</script>

<style lang="scss" scoped>
$color: #aca082;
.m-nav-container {
  width: 100%;
  height: 44PX;
  line-height: 44PX;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  nav {
    max-width: 1200PX;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    .nav-left {
      display: inline-block;
      img {
        width: 60px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
      }
      > li {
        display: inline-block;
        color: rgb(84, 110, 122);
        font-size: 13px;
        +li {
           margin-left: 30px;
        }
        &:first-child {
          background: #fdf4e8;
          padding: 0 0.266667rem;
          color: #948c76;
          // letter-spacing: 0.1em;
          font-weight: 400;
          font-size: 1.3em;
          border-radius: 0.2em;
        }
        &:hover {
          cursor: pointer;
        }
        i {
          font-size: 20px;
        }
        span {

        }
      }
      .light {
        // color: rgb(224, 120, 40);
        color: #948c76;
      }
    }
    .nav-right {
      span {
        padding: 8px 20px;
        border: 1px solid $color;
        border-radius: 6px;
        +span {
          margin-left: 10px;
        }
      }
      .app {
        border-color: rgb(45, 181, 93);
        a {
          color: rgb(45, 181, 93);
        }
      }
      .weapp {
        border-color: rgb(121, 85, 72);
        color: rgb(121, 85, 72);
      }
    }
  }
}
.fixed {
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
  animation: fadeIn 400ms 0s linear;
}
// .fade {
//   position: fixed;
//   top: 0;
//   animation: fadeOut 200ms 0s linear;
// }
@keyframes fadeIn {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
</style>
