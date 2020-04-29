<template>
  <div :class="['sliderDetail',scroll?'fixed':'']">
    <h2>目录列表</h2>
    <ul class='list'>
      <li :class="['item-list', index == currenIndex ? 'active' : '']" @click="showActive(index)" v-for="(item,index) in data" :key='index'>
        <a v-if="item.label" :href="`#${item.id}`">{{item.label}}</a>
        <ul v-if="item.sub_label">
          <li class='item'><a :href="`#${item.id}`">{{item.sub_label}}</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        data: Array
    },
    data () {
        return {
            currenIndex: 0,
            scroll: false
        }
    },
    mounted () {
        window.addEventListener('scroll', (e) => {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            this.scroll = scrollTop > 250
        })
    },
    methods: {
        showActive (index) {
            this.currenIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
.fixed {
  position: fixed;
  width: 200PX;
  top: 80PX;
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
