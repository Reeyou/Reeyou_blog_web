<template>
  <div class="redirect">
    <Spin class="spin" />
  </div>
</template>

<script>
import Spin from '../../components/loading/spin'
import { sendCode } from '@/service/login'
  export default {
    data() {
      return {
        code: ''
      }
    },
    created() {
      this.sendCode()
    },
    methods: {
      sendCode() {
        let uriCode = this.$route.query.code
        sendCode({code: uriCode}).then(res => {
          if(res.code == 200) {
            this.$router.go(-1)
            localStorage.setItem('userinfo',JSON.stringify(res.data))
          }
        })
      }
    },
    components: {
      Spin
    }
  }
</script>

<style lang="scss" scoped>
.redirect {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .spin {
    // position: absolute;
    // top: 200px;
    // left: 200px;
  }
}
</style>