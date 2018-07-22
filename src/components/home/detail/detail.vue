<template>
  <div id="detail">
      <myhead>
        <h2>商品详情</h2>
        <mu-icon class='back' @click='back' value="navigate_before" color="white"></mu-icon>
      </myhead>
      <div class="content">
         <img :src="iconSrc" alt="">
         <p class='detailtitle'>{{detailTitle}}</p>
         <div class="price-count">
             <p class='detailprice'>￥{{detailPrice}}</p>
             <div class="count">
                <span>数量 : </span>
                <span @click='del'> - </span>
                <span> {{itemNum}} </span>
                <span @click='add'> + </span>
             </div>
         </div>
         <p class='white-tiao'>
           <span class="title1">白条</span>
           <span class="title2">【白条支付】即享3期免息/6期息费5折】</span>
         </p>
          <p class='white-tiao'>
           <span class="title1">促销 </span>
           <span class="title2"> 【购买1件可优惠换购热销商品】</span>
         </p>
      </div>
    	<div class="buy">
          <div class="cart">
             <div><mu-icon size="20" value="account_circle"></mu-icon><p>卖家</p></div>
             <div><mu-icon size="20" value="store"></mu-icon><p>进店</p></div>
             <div @click='ToCart'><mu-icon size="20" value="shopping_cart"></mu-icon>
               <p>购物车</p>
             </div>
             <div class="shopCount" v-if='addCartsItems>0'>{{addCartsItems}}</div>
          </div> 
          <div class="add-cart">
                <mu-button color="warning" @click='addCart(iconSrc,detailTitle,detailPrice,itemNum)' >加入购物车</mu-button>
                <mu-button color="error" @click='nowPay(iconSrc,detailTitle,detailPrice,itemNum)'>立即购买</mu-button>
          </div> 
      </div>
      <mu-dialog  width="160" :open.sync="openSimple" >
        <div class="addSuccess">
            <mu-icon size="46" value="check_circle" v-if='isShow'></mu-icon>
            <p class='add-suc'>{{alertTxt}}</p>
        </div>
      </mu-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import MyHead from '../../myhead/myhead.vue'
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
   computed:{
     ...mapState(['itemNum','cartNum','checked','isLogin']),
     ...mapGetters(['addCartsItems'])
   },
   methods:{
    	back(){
    		this.$router.go(-1)
    	},
      ToCart(){
         this.$router.push('/cart')
      },
      addCart(iconSrc,detailTitle,detailPrice,itemNum){
          this.sendParams({iconSrc:iconSrc,detailTitle:detailTitle,detailPrice:detailPrice,itemNum:itemNum,checked:true});
          this.openSimple = true;
          this.isShow = true;
          this.alertTxt = '加入购物车成功'
          setTimeout(()=>{
            this.openSimple = false;
        }, 1000)
      },
      ...mapActions({
        'sendParams':'getParams',
        'immediatelyPay':'immediatelyPay'
      }),
      add(){
          this.$store.commit('countAdd')
      },
      del(){
          this.$store.commit('countDel')
      },
      nowPay(iconSrc,detailTitle,detailPrice,itemNum){
        if (this.isLogin) {
                this.$router.push('/pay')
                this.immediatelyPay({iconSrc:iconSrc,detailTitle:detailTitle,detailPrice:detailPrice,itemNum:itemNum})
            } else{
              this.openSimple = true;
              this.isShow = false;
              this.alertTxt = '请先登录！'
              setTimeout(()=>{
                this.openSimple = false;
                this.$router.push('/user')
            }, 1000)
            };
         
      }
  },
  data(){
    return {
      iconSrc:'',
      detailTitle:'',
      detailPrice:'',
      openSimple: false,
      alertTxt:'',
      isShow:''
    }
  },
  components:{
    'myhead':MyHead,
  },
  created(){
      this.iconSrc = this.$route.params.src
      this.detailTitle = this.$route.params.title
      this.detailPrice = this.$route.params.price
  }
 }
</script>

<style lang='less' scoped >
@import url('../../../style/base.less');
  *{margin:0;padding:0}
  .wrap{
    padding:20px 20px;
    border-bottom: 1px solid #999
  }
  .content{
    text-align:center;
    margin-bottom: 44px;
    .white-tiao{
      background-color: #fff;
       margin-top: 2px;
       padding:15px 0;
       font-size:14px;
       text-align: left;
       .title1{
         color:gray;
         margin-left: 32px;
       }

    }
    img{
      margin-top:44px;
      width:100%;
    }
    .detailtitle{
      padding:5px 15px;
      line-height: 20px;
      background-color: #fff;

    }
    .price-count{
      background-color: #fff;
        .RowFlex();
        margin-top: 2px;
        justify-content:space-between;
        padding:15px 20px;
        .detailprice{
          color:red;
          text-align: left;
          margin-left: 10px;
          font-size:18px;
          
        }
        .count{
          span{
            font-size:18px;
            margin:0 5px;
          }
        }
    }
  }
  .buy{
      .RowFlex();
      position:fixed;
      left:0;
      bottom:0;
      width:100%;
      background-color:white;
      .cart{
          position: relative;
          font-size: 10px;
          flex:1;
          .RowFlex();
          div{
            flex:1;
            text-align:center;
            color:#999;
          }
          .shopCount{
            position: absolute;
            right:10px;
            top:-15px;
            width:20px;
            height:20px;
            text-align: center;
            line-height:20px;
            background-color: red;
            border-radius:50%;
            color:white;
            font-weight:bold;
            opacity:0.6
          }
      }
      .add-cart{
        margin-left: 20px;
          flex:1;
          display:flex;
          justify-content:flex-end;
          height:40px;
         .mu-raised-button{
             height:100%;
          }
      }
  }
  .addSuccess{
    .ColumnFlex();
    .add-suc{
      margin-top:5px;
      font-size:16px;
    }
  }
</style>
