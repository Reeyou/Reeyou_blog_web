<template>
  <div>
    <nav-bar />
    <div class="layout">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Index from './Index'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
    computed: {
        loading () {
            return this.$store.state.loading
        }
    },
    created () {
        console.log(this.loading)
    },
    components: {
        Index,
        'nav-bar': NavBar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.layout {
  padding: 60px 0 40px 0 ;
  max-width: 1200PX;
  margin: 0 auto;
  .content {
    width: 100%;
    .loading {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      .spin {
        height: 100px;
      }
    }
  }
}
</style>
