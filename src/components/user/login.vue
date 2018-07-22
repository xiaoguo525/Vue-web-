<template>
	<div>
	      <myhead>
                  <div class="login-head">
                        <h2>我的京东</h2>
                        <mu-icon class='back' @click='back' value="navigate_before" color="black"></mu-icon>
                  </div>
        </myhead>
        <div class="login-wrapper">
              <div class="login-logo">
                    <div class="logo">
                    		<img :src="logoSrc">
                    		<p>ID:郭正国</p>
                                <p class='quit' @click='quitId'>退出账号</p>
                    </div>
              </div>
              <div class="user-pay-list">
              	  <div class="pay-item" @click='toCart'>
              	  	  <mu-icon size="30" value="local_grocery_store"  color='#DD9E58'></mu-icon>
              	  	 <p>购物车</p>
                           <p class='number' v-if='cartCount>0'>{{cartCount}}</p>
                      </div>
                      <div class="pay-item" @click='toPay'>
                            <mu-icon size="30" value="credit_card" color='#DD9E58'></mu-icon>
                           <p>待付款</p>
                           <p class='number' v-if='allWaitCount>0'>{{allWaitCount}}</p>
                      </div>
                      <div class="pay-item"  @click='toWaitGoods'>
                            <mu-icon size="30" value="local_shipping" color='#DD9E58'></mu-icon>
                           <p>待收货</p>
                           <p class='number' v-if='allWaitGoodsNum>0'>{{allWaitGoodsNum}}</p>
              	  </div>
              </div>
              <div class='recommend'>
                    <h2>专属推荐</h2>
                    <div class="recommend-item">
                          <div @click='detail(item.imgSrc,item.title,item.price)' class="item" v-for='(item,index) in arr'>
                                <img :src="item.imgSrc">
                                <span class='title'>{{item.title}}</span>
                                <p class='price'>￥{{item.price}}</p>
                          </div>
                    </div>
              </div>
        </div>
	</div>
</template>
<script>
      import MyHead from '../myhead/myhead.vue';
      import {loginCommend} from '../../components/api.js';
      import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
	export default{
            computed:{
                  ...mapGetters({
                        'cartCount':'userCartCount',
                        'allWaitCount':'allWaitCount',
                        'allWaitGoodsNum':'allWaitGoodsNum'
                  }),
                  ...mapState(['isLogin'])
            },
		components:{
		  	'myhead':MyHead
		},
		data(){
		  	 return {
		  	 	logoSrc:'http://img3.imgtn.bdimg.com/it/u=320835249,3635862900&fm=27&gp=0.jpg',
                        arr:[]
		  	 }
		},
            methods:{
                  back(){
                        this.$router.push('/home')
                  },
                  toCart(){
                        this.$router.push('/cart')
                  },
                  toPay(){
                        this.$router.push('/pay')
                  },
                  toWaitGoods(){
                        this.$router.push('/waitgood')
                  },
                  getData(){
                        loginCommend().then(result=>this.arr=result)
                  },
                  detail(src,title,price){
                        this.$router.push({name:'detail',params:{src:src,title:title,price:price}})
                  },
                  quitId(){
                        this.$router.push('user')
                        this.quitlogin();
                  },
                  ...mapActions({
                        'quitlogin':'quitlogin'
                  })
            },
            created(){
                  this.getData()
            }
	}
</script>
<style lang='less' scoped>
@import url('../../style/base.less');
.login-head{
      width:101%;
      height:103%;
      background-color: white;
      color:black;
      border-bottom:1px solid #999;
}
.login-wrapper{
      margin-top: 44px;
      .login-logo{
              width:100%;
              background-color: white;
              padding:7px 0;    
             .logo{
                  width:90%;  
             	text-align: center;
                  margin:5px auto;
             	height:160px;
             	background: url('http://img2.imgtn.bdimg.com/it/u=2747290804,1309682854&fm=27&gp=0.jpg');
                  background-size: cover;
             	padding: 10px 0;
                  border-radius:20px;
                  color:white;
             	img{
             		width:80px;
             		height:80px;
             		border-radius: 50%;
             	}
                  p{
                        margin-top:10px;
                  }
                  .quit{
                        font-size:10px;
                        color:#99BBF5;
                  }
             }
      }
       .user-pay-list{
             background-color: white;
             margin-top: 15px;
             padding:15px 0;
       	 .RowFlex();
       	 .pay-item{
       	 	flex:1;
       	 	text-align: center;
                  position: relative;
                  .number{
                        position: absolute;
                        top:-5px;
                        right:30%;
                        font-size:12px;
                        background-color: red;
                        width:20px;
                        height:20px;
                        border-radius:50%;
                        line-height:20px;
                        color:white;
                        opacity:0.7
                  }
       	 }
       }
      .recommend{
            text-align:center;
            h2{
                  margin-top: 15px;
                  margin-bottom: 10px;
                  color:red;
                  font-size:18px;
            }
            a{
                  font-size: 14px;
                  margin-bottom: 10px;
                  display:inline-block;
            }
            color:black;
            .recommend-item{
                  color:black;
                  width:100%;
                  .RowFlex();
                  justify-content:space-between;
                  .item{
                        background-color: #fff;
                        width:49%;
                        height:255px;
                        margin-top: 7px;
                        .ColumnFlex();

                        img{
                              width:90%;
                              height:60%

                        };
                        .price{
                              color:red;
                              margin-top: 10px;
                              height:15%;
                        }
                        .title{
                              height:20%;
                              overflow:hidden;
                              padding:5px 5px;
                              font-size: 14px;
                              line-height:24px;
                              margin-top: 10px;
                        }
                  }
            }
      }
}
</style>