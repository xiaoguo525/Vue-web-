<template>
  <div id="classify">
  	<myhead><h2>商品分类</h2></myhead>
    <div class="classify-wrap">
        <mu-list class="left_list">
            <template v-for="(item,index) in arr" >
              <mu-list-item class="category-item" :style="{color:currentIndex==index?'red':'black',backgroundColor:currentIndex==index?'#ccc':'#fff'}" >
                <mu-list-item-title @click="change(index)" :style="{color:currentIndex==index?'red':'black'}" >{{item.title}}</mu-list-item-title>
              </mu-list-item>
            </template>
        </mu-list>
        <div class="right_list">
           <div class="itemBox" v-for="(it,id) in arr[currentIndex]">
               <h1 class="list_name">{{it.name}}</h1>
               <ul class="goods_list">
                   <li class="goods"  v-for="(it1,id1) in it.list">
                      <img class="goodsImg" :src="it1.imgSrc" alt="">
                      <p class="goodsName">{{it1.name}}</p>
                   </li>
               </ul>          
           </div>
        </div>   
    </div>
  </div>
</template>

<script>
import MyHead from '../myhead/myhead.vue';
import {classifyList} from '../api.js';
export default {
  name: 'classify',
  data () {
    return {
      arr:[],
      currentIndex:0
    }
  },
  components:{
  	'myhead':MyHead
  },
  methods:{
      getData(){
        classifyList().then(result=>this.arr=result)
      },
      change(index){
          this.currentIndex = index;
      }
    },
    created(){
      this.getData()
    }
}
</script>

<style lang='less' scoped>
@import url('../../style/base.less');
.classify-wrap{
    position: relative;
    .left_list{
      margin-top:36px;
      position: fixed;
      left: 0;
      top:0;
      width:27%;
      height:100%;
      .category-item{
        background-color:red;
        width:100%;
        height:44px;
        text-align:center;
        line-height:44px;
      }
      .category-item:last-child{
          margin-bottom: 85px;
      }
    }
    .right_list{
      background-color: #fff;
      margin-top:40px;
      margin-bottom:60px;
      width:73%;
      position: absolute;
      right:0;
      top:0;
      .itemBox{
        .list_name{
          margin:10px 5px 10px;
          font-weight: bold;
        }
        .goods_list{
          .RowFlex();
          flex-wrap:wrap;
          .goods{
            .ColumnFlex();
            justify-content:center;
            list-style:none;
            width:33%;
            padding:10px 10px;
            .goodsImg{
                width:70px;
                height:70px;
            }
            .goodsName{
              font-size:12px;
              margin-top: 10px;
            }
          }
        }
      }
    }
}
</style>
