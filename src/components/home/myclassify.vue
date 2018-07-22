<template>
	<div class='myclassify'>
		<div class="item" v-for='(item,index) in arr'>
			<img :src="item.imgSrc">
			<span>{{item.title}}</span>
		</div>
	</div>
</template>
<script>
	import {myclassifies} from '../api.js';
	export default{
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			getData(){
				myclassifies().then(result=>this.arr=result)
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style lang='less' scoped >
@import url('../../style/base.less');
	.myclassify{
		margin-top: -7px;
		padding-bottom:10px;
		z-index:1;
		position: relative;
		border-top-left-radius:10px;
		border-top-right-radius:10px;
		background-color:#ffffff;
		.RowFlex();
		.item{
			.ColumnFlex();
			width:20%;
			img{
				width:60%;
				margin-top: 10px;
			};
			span{
				color:black;
				font-size:12px;
				margin-top: 10px;
			}
		}
	}
</style>