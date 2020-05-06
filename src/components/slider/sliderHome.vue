<template>
  <div class="slider-container">
    <section class="cover shadow">
      <div class="col-12">
        <a class="cover1" :style="cover1" href></a>
        <div class="hover"></div>
        <div class='hover-title'>
          <span>Hit me</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="item">
            <a class="cover2" :style="cover2" href></a>
          </div>
        </div>
        <div class="col-6">
          <div class="item">
            <a class="cover3" :style="cover3" href></a>
          </div>
        </div>
      </div>
    </section>
    <section class="recommend shadow">
      <dl>
        <dt class='text-300 text-lg'>
          <i class='iconfont icon-comment text-500 text-lg'></i>
          推荐文章
        </dt>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
      </dl>
    </section>
    <section class="tagList shadow">
      <dl>
        <dt class='text-300 text-lg'>
          <i class='iconfont icon-comment text-500 text-lg'></i>
          标签分类
        </dt>
        <div :class="!showMore?'more':''  ">
          <dd v-for='(item,index) in newTagList' :key='index'>
            <a href="">{{item.tagname}}</a>
            <span class='badge'>18</span>
          </dd>
        </div>
      </dl>
      <div class='show-more'>
        <hr class='line'>
        <div class="more-btn" @click="toggle()">
          <span class='btn-text'>{{showText}}<i :class='icon'></i></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cover1 from '../../assets/img/1.jpg'
import cover2 from '../../assets/img/2.jpg'
import cover3 from '../../assets/img/3.jpg'
export default {
    props: ['tagList'],
    data () {
        return {
            showMore: true,
            showText: '显示更多',
            icon: 'iconfont icon-arrow_d',
            cover1: { backgroundImage: 'url(' + cover1 + ')' },
            cover2: { backgroundImage: 'url(' + cover2 + ')' },
            cover3: { backgroundImage: 'url(' + cover3 + ')' }
        }
    },
    computed: {
        newTagList () {
            const data = this.showMore ? this.tagList.slice(0, 15) : this.tagList
            return data
        }
    },
    methods: {
        toggle () {
            this.showMore = !this.showMore
            this.showText = !this.showMore ? '隐藏更多' : '显示更多'
            this.icon = !this.showMore ? 'iconfont icon-arrow_u' : 'iconfont icon-arrow_d'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
