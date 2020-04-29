<template>
  <div>
    <Mine name='a' @changeValue='receive'/>
    <Tab />
    <router-view />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import Mine from '../../components/Mine'
import Tab from '../../components/Tab'
export default {
    methods: {
        receive (val) {
            console.log(val)
        }
    },
    components: {
        'nav-bar': NavBar,
        Mine,
        Tab
    }
}
</script>

<style lang="scss" scoped>

</style>
