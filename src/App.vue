<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './tabbar/tabbar.vue'
export default {
  name: 'app',
  data () {
    return {}
  },
  components:{
    'tabbar':tabbar
  }
}
</script>
<style lang='less'>
  @import  url('./style/reset.less');
</style>