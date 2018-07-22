<template>
  <div id="cart">
  	  <myhead>
        <h2>购物车</h2>
        <mu-icon class='back' @click='back' value="navigate_before" color="white"></mu-icon>
      </myhead>
      <div class="wrapper">
          <div v-if='iconSrc.length>0' class="cart-item" v-for='(item,index) in iconSrc'>
             <input class='checkbox' type='checkbox' :checked='item.checked' @change='checkbox($event,index)' />
             <img :src="item.iconSrc" alt="">
             <div class="car-main">
                 <p>{{item.detailTitle}}</p>
                 <p class='price'>￥{{item.detailPrice}} </p>
                 <p class='count'>数量：
                    <mu-icon class='picon' size="20" value="remove" @click='item.itemNum>1?del(index):0'></mu-icon>
                    <i>{{item.itemNum}}</i>
                    <mu-icon class='picon' size="20" value=" add" @click='add(index)'></mu-icon>
                </p>
             </div>
             <mu-icon value="clear" color='red' @click='delItem(index)'></mu-icon>
          </div>
          <div v-if='iconSrc.length<=0' class='noGoods' >
             <h2>暂无商品 <span class='goStroll' @click='goStroll'> 点击去逛逛</span></h2>
          </div>
      </div>
      <div class="cart-foot">
          <input class='checkbox' type='checkbox' v-if='iconSrc.length>0' :checked="checkedAll" @change="changeAll" >
          <div class='cart-foot-money'>
            <div class="allMoney">
                <span>总金额 :</span>
                <span>{{allMoney}}.00</span>
            </div>
            <mu-button color="error" @click='buy' v-if='addCartsItems>0'>去结算<span>({{addCartsItems}}件)</span></mu-button>
            <mu-button disabled v-else>去结算<span>(0件)</span></mu-button>
          </div>
      </div>
      <mu-dialog  width="120" :open.sync="openSimple">
          <p class='add-suc'>请先登录</p>
      </mu-dialog>
  </div>
</template>

<script>
import MyHead from '../myhead/myhead.vue';
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['iconSrc','checked','isLogin']),
    ...mapGetters(['addCartsItems','allMoney','checkedAll'])
  },
  name: 'cart',
  data () {
    return {
      isChangeChecked:true,
      openSimple: false,
    }
  },
  components:{
  	'myhead':MyHead
  },
  methods:{
     buy(){
        if (this.isLogin) {
           this.$router.push('/pay')
           this.addWaitPay()
        } else{
              this.openSimple = true;
              setTimeout(()=>{
                this.openSimple = false;
                this.$router.push('/user')
            }, 1000)   
        };
     },
     back(){
       this.$router.go(-1)
     },
     add(index){
        this.cartCountChange({
          index:index,
          tag:1,
        })
     },
     del(index){
        this.cartCountChange({
          index:index,
          tag:-1,
        })
     },
     ...mapActions({
       'cartCountChange':'cartCountChange',
       'isChecked':'isChecked',
       'changeAllCheckState':'changeAllCheckState',
       'addWaitPay':'addWaitPay'
     }),
     checkbox(e,index){
        this.isChecked({
           isHasChecked:e.target.checked,
           index:index
        })
     },
     changeAll(e){
       this.changeAllCheckState({
          checked:e.target.checked
       })
     },
     delItem(index){
        this.iconSrc.splice(index,1)
     },
     goStroll(){
       this.$router.push('/home')
     }
  }
}
</script>

<style lang='less' scoped >
@import url('../../style/base.less');
.wrapper{
  .noGoods{
    padding:10px;
    .goStroll{
      color:red;
      font-size:20px;
      &:hover{
        cursor:ponter;
      }
    }
  }
    margin:50px 0;
    padding:3px 5px;
    .cart-item{
      padding:10px 10px;
      margin-bottom: 10px;
      border:1px solid #999;
      .RowFlex();
      img{
        flex:1;
        height:100px;
        margin:0 5px;
      };
      .checkbox{
         width:20px;
         height:20px;
      }
      .car-main{
        flex:2;
        .price{
           color:red;
           margin-top: 10px;
           margin-bottom: 10px;
        };
        .count{
              font-size: 20px;
        }
      }
    }
}
.cart-foot{
   width:100%;
   height:50px;
   background-color: #fff;
   border-top: 1px solid #999;
   position: fixed;
   left: 0;
   bottom: 0;
   .RowFlex();
   .checkbox{
         width:20px;
         height:20px;
         flex:1;
      }
   .cart-foot-money{
          height:100%;
          flex:5;
          display:flex;
          justify-content:flex-end;
          align-items:center;
          .allMoney{
            margin-right: 20px;
            span{
              font-size:16px;
            }
          }
         .mu-raised-button{
              height:100%;
              float:right;
              font-size:16px;
              font-weight:bolder;
         }
   }
}
</style>
