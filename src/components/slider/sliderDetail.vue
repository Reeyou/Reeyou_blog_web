<template>
  <div class='sliderDetail'>
    <h2>目录列表</h2>
    <ul class='list'>
      <li class='item-list active' v-for="(item,index) in data" :key='index'>
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
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
