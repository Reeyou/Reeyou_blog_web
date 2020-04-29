<template>
    <div :class="['m-toolBar',fixed?'fixed':'']">
        <p class='bg'></p>
        <ul>
            <li><a href="" title="点赞"><i class='iconfont icon-comment'></i></a></li>
            <li><a href="" title="评论"><i class='iconfont icon-like1'></i></a></li>
        </ul>
        <p>分享</p>
        <ul>
            <li><a href="" title="QQ"><i class='iconfont icon-qq'></i></a></li>
            <li><a href="" title="微信"><i class='iconfont icon-weixin2'></i></a></li>
            <li><a href="" title="微博"><i class='iconfont icon-weibo'></i></a></li>
        </ul>
        <p class='bg bg1'></p>
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
    background: #fff;
    // border: 1px solid #000;
    > ul {
        li {
            i {
                padding: 20px;
                border-radius: 50%;
                background: #fff;
                font-size: 30px;
                color: #aaa;
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
    .bg {
        display: inline;
        position: absolute;
        top: -40px;
        // left: -40px;
        padding: 20px;
        border: 1px solid rgba(45, 181, 93, .68);
        border-radius: 70% 30% 30% 70% /60% 40% 60% 40%;
        z-index: -1;
    }
    .bg1 {
        top: 366px;
        right: -14px;
        transform: rotate(90deg);
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
