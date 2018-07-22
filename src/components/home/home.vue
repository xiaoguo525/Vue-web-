<template>
  <div id="home">
  	  <myhead>
        <div class="home-head">
          <mu-icon value="menu" class='home-head-icon' size='34' @click='toclassify'></mu-icon>
          <div class='mu-content'>
            <mu-text-field type="number" placeholder="请输入商品名称" icon="search"></mu-text-field>
          </div>
          <div class="head-icon">
             <mu-icon value="sms" class='myicon' size='20'></mu-icon>
             <span class='head-news'>消息</span>
          </div>
        </div>
      </myhead>
      <mycarrousel></mycarrousel>
      <myclassify></myclassify>
      <recommend></recommend>
  </div>
</template>

<script>
import MyHead from '../myhead/myhead.vue'
import MyCarousel from './carousel.vue'
import MyClassify from './myclassify.vue'
import Recommend from './recommend.vue'
export default {
  name: 'home',
  data () {
    return {}
  },
  components:{
  	'myhead':MyHead,
    'mycarrousel':MyCarousel,
    'myclassify':MyClassify,
    'recommend':Recommend,
  },
  methods:{
    toclassify(){
       this.$router.push('/classify')
    }
  }
}
</script>
<style lang='less'>
.home-head{
    display:flex;
    justify-content:space-between;
    align-items:center;
       background-color: #F23030;
    .mu-content{
      flex:4;
       height:50px;
       padding:5px 0;
       .mu-input{
            background-color: white;
            border-radius:20px;
            width:100%;
            height:60%;
            min-height:30px;
            padding-bottom:0;
            .material-icons{
                font-size:24px;
                top:5px;
            }
       }
    }
    .head-icon{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      flex:1;
      font-size:10px;
      .head-news{
         line-height:10px;
      }
    }
    .home-head-icon{
      flex:1
    }
}
</style>
