<template>
	<div class='pay-wrap'>
		<myhead>
	        <h2>支付</h2>
	          <mu-icon class='back' @click='back' value="navigate_before" color="white"></mu-icon>
      	</myhead>
		<div class="wrapper">
      		<h1 v-if='userWaitPay.length>0'>亲，您的宝贝清单 ↓</h1>
      		<h1 v-else>暂无商品，请先购买</h1>
      		<div class="goods-item" v-for='(item,index) in userWaitPay'>
      			<img :src="item.iconSrc" alt="">
	             <div class="main">
	                 <p>{{item.detailTitle}}</p>
	                 <p class='price'>￥{{item.detailPrice}} </p>
	                 <p class='count'>数量：{{item.itemNum}}</p>
	             </div>
      		</div>
      	</div>
      	<div class="pay">
      		<p>总金额:</p>
      		<p class='all'>{{allPay}}.00</p>
      		<mu-button color="error" class='affirm' @click='buy'>确认支付</mu-button>
      	</div>
	</div>
</template>
<script>
import MyHead from '../myhead/myhead.vue';
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		computed:{
		    ...mapGetters(['allPay']),
		    ...mapState(['isLogin','userWaitPay'])
		  },
		components:{
		  	'myhead':MyHead
		},
		methods:{
		     back(){
		       this.$router.go(-1)
		     },
		     buy(){
		     	if (this.isLogin) {
			     	this.$router.replace('/success')
			     	this.affirmPay()
		        } else{
		           this.$router.push('/user')
		        };
		     },
		     ...mapActions({
		     	 'affirmPay':'affirmPay'
		     })
		}
	}
</script>
<style lang='less' scoped >
@import url('../../style/base.less');
.pay-wrap{
	position: relative;
	.pay{
		.RowFlex();
		justify-content:flex-end;
		width:100%;
		background-color:#AFD5FF;
		padding-left:40px;
		position:fixed;
		left: 0;
		bottom: 0;
		.all{
			color:red;
			font-size:24px;
			text-align: left;
			margin-left: 10px;
		}
		.affirm{
			height:44px;
			font-size:18px;
			margin-left: 15px;
		}
	}
	.wrapper{
	    margin:50px 0;
	    h1{
	    	font-size:20px;
	    	padding:10px 10px;
	    }
	    .goods-item{
	      padding:10px 15px;
	      margin-bottom: 10px;
	      border-bottom:1px solid #999;
	      .RowFlex();
	      img{
	        flex:1;
	        height:90px;
	        margin:0 5px;
	      };
	      .main{
	        flex:2;
	        .price{
	           color:red;
	           margin-top: 10px;
	           margin-bottom: 10px;
	        };
	        .count{
	              font-size: 16px;
	        }
	      }
    	}
	}
}
</style>