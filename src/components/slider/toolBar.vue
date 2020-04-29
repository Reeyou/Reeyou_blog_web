<template>
    <div :class="['m-toolBar',fixed?'fixed':'']">
        <ul>
            <li><a href="" title="点赞"><i class='iconfont icon-comment'></i></a></li>
            <li><a href="" title="点赞"><i class='iconfont icon-dianzan1'></i></a></li>
            <li><a href="" title="评论"><i class='iconfont icon-like1'></i></a></li>
            <li><a href="" title="评论"><i class='iconfont icon-like'></i></a></li>
        </ul>
        <p>分享至</p>
        <ul>
            <li><a href="" title="QQ"><i class='iconfont icon-qq'></i></a></li>
            <li><a href="" title="微信"><i class='iconfont icon-weixin2'></i></a></li>
            <li><a href="" title="微博"><i class='iconfont icon-weibo'></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            fixed: false
        }
    },
    mounted () {
        window.addEventListener('scroll', (e) => {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            this.fixed = scrollTop > 300
        })
    }
}
</script>

<style lang="scss" scoped>
.m-toolBar {
    text-align: center;
    // background: #fff;
    padding: 14px 0;
    border-radius: 10px;
    // box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
    > ul {
        // display: none;
        li {
            i {
                padding: 20px;
                border-radius: 50%;
                background: #fff;
                font-size: 30px;
                color: #aaa;
                transition: all 400ms linear;
                &:hover {
                    color: #000;
                }
            }
            +li {
                margin-top: 30px;
            }
        }
    }
    p {
        padding: 20px 0;
    }
    .share-box {
        // margin-top: 20PX;
    }
}
.fixed {
  position: fixed;
  top: 380px;
  animation: fadeIn 500ms 0s linear;
}
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
</style>
