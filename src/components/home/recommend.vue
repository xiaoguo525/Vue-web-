<template>
	<div class='recommend'>
			<router-link to='/user' tag='a' v-if='!isLogin' >登录帐号，查看专属推荐商品 > </router-link>
			<div class="recommend-item">
				<div @click='detail(item.imgSrc,item.title,item.price)' class="item" v-for='(item,index) in arr'>
					<img :src="item.imgSrc">
					<span class='title'>{{item.title}}</span>
					<p class='price'>￥{{item.price}}</p>
				</div>
			</div>
	</div>
</template>
<script>
	import {recommends} from '../api.js';
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState(['isLogin'])
		},
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			getData(){
				recommends().then(result=>this.arr=result)
			},
			detail(src,title,price){
				this.$router.push({name:'detail',params:{src:src,title:title,price:price}})
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style lang='less' scoped >
@import url('../../style/base.less');
.recommend{
	margin-bottom: 44px;
	text-align:center;
	a{
		font-size: 14px;
		margin-bottom: 10px;
		margin-top: 20px;
		display:inline-block;
	}
	color:black;
	.recommend-item{
		margin-bottom: 60px;
		color:black;
		width:100%;
		.RowFlex();
		.item{
			margin-top: 10px;
			width:50%;
			height:255px;
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
				padding:0 5px;
				font-size: 14px;
				line-height:20px;
				margin-top: 5px;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
}
</style>