<template>
	<div>
		<myhead>
	        <h2>支付成功</h2>
      	</myhead>
      	<div class="success">
			<h1>支付成功</h1>
      		<p><span class='time'>{{time}} </span> 秒后返回</p>
      	</div>
	</div>
</template>
<script>
import MyHead from '../myhead/myhead.vue';
	export default{
		components:{
		  	'myhead':MyHead
		},
		
		created(){
			var timer = setInterval(()=>{
					this.time --;
					if (this.time == -1) {
						this.$router.replace('/waitgood');
						clearInterval(timer);
					};
				}, 1000)
		},
		data(){
			return {
				time:3
			}
		}
	}
</script>
<style lang='less' scoped >
@import url('../../style/base.less');
	.success{
		margin: 80px auto;
		width:80%;
		height:200px;
		background-color: #76B3D4;
		border-radius: 10px;
		padding: 20px 0;
		text-align: center;
		.ColumnFlex();
		justify-content:space-around;
		h1{
			color:red;
			font-size:20px;
		}
		.time{
			font-size:20px;
		}
	}
</style>