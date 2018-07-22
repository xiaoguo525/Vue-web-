<template>
	<div>
		<myhead>
	        <h2>待收货</h2>
	          <mu-icon class='back' @click='back' value="navigate_before" color="white"></mu-icon>
      	</myhead>
      	<div class="wrapper">
      		<h1 v-if='userWaitGoods.length>0'><p class='back-home' @click='backHome'>返回首页</p>您的宝贝正在配送中... </h1>
      		<h1 v-else>暂无商品，请先购买</h1>
      		<div class="goods-item" v-for='(item,index) in userWaitGoods'>
      			<img :src="item.iconSrc" alt="">
	             <div class="main">
	                 <p>{{item.detailTitle}}</p>
	                 <p class='price'>￥{{item.detailPrice}} </p>
	                 <p class='count'>数量：{{item.itemNum}}</p>
	             </div>
      		</div>
      	</div>
	</div>
</template>
<script>
import MyHead from '../myhead/myhead.vue';
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		components:{
		  	'myhead':MyHead
		},
		methods:{
		     back(){
		       this.$router.push('/login')
		     },
		     backHome(){
		     	this.$router.push('/home')
		     }
		},
		computed:{
			...mapState(['userWaitGoods'])
		}
	}
</script>
<style lang='less' scoped >
@import url('../../style/base.less');
	.wrapper{
	    margin:50px 0;
	    h1{
	    	font-size:20px;
	    	padding:10px 10px;
	    }
	    .back-home{
	    	color:red;
	    	margin-bottom: 5px;
	    	font-size:16px;
	    	text-decoration: underline;
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
</style>