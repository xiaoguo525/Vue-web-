<template>
  <div id="user">
  	  <myhead>
        <mu-icon class='back' @click='back' value="navigate_before" color="white"></mu-icon>
        <h2>个人中心</h2>
      </myhead>
      <div class="user-login">
          <login v-if='isLogin' ></login>
          <unlogin v-if='!isLogin' ></unlogin>
      </div>
  </div>
</template>

<script>
import MyHead from '../myhead/myhead.vue'
import Login from './login.vue'
import Unlogin from './unlogin.vue'
import {mapState} from 'vuex'
export default {
  name: 'user',
  data () {
    return {
      
    }
  },
  components:{
    'myhead':MyHead,
    'login':Login,
  	'unlogin':Unlogin
  },
  methods:{
     back(){
       this.$router.go(-1)
     }
  },
  computed:{
    ...mapState({
      isLogin:'isLogin'
    })
  }
}
</script>

<style lang='less' scoped>
@import url('../../style/base.less');
 .user-login{
   margin-top: 44px;
 }
</style>
