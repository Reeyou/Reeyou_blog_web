<template>
  <div class="slider-container">
    <section class="img-shadow">
      <div class="col-12">
        <a class="cover1" :style="cover1" href></a>
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
    <section class="recommend">
      <dl>
        <dt>最近文章</dt>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
        <dd><a href="">移动web性能优化从入门到进阶</a></dd>
      </dl>
    </section>
    <section class="tagList">
      <dl>
        <dt>文章标签</dt>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
        <dd><a href="">html</a></dd>
      </dl>
    </section>
  </div>
</template>

<script>
import cover1 from "../../assets/img/1.jpg";
import cover2 from "../../assets/img/2.jpg";
import cover3 from "../../assets/img/3.jpg";
export default {
  data() {
    return {
      cover1: { backgroundImage: "url(" + cover1 + ")" },
      cover2: { backgroundImage: "url(" + cover2 + ")" },
      cover3: { backgroundImage: "url(" + cover3 + ")" }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>