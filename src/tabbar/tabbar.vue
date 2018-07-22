<template>
	<div class='tabbar' v-if='isShowTabbar'>
	  <mu-bottom-nav >
		    <mu-bottom-nav-item to='/home' title="首页" icon="home"></mu-bottom-nav-item>
		    <mu-bottom-nav-item to='/classify' title="分类" icon="list"></mu-bottom-nav-item>
		    <mu-bottom-nav-item to='/cart' title="购物车" icon="shopping_cart"></mu-bottom-nav-item>
		    <mu-bottom-nav-item to='/user' title="用户" icon="perm_identity"></mu-bottom-nav-item>
	  </mu-bottom-nav>
	</div>
</template>
<script>
export default {
 	name: 'tabbar',
 	data(){
 		return {
 			isShowTabbar:true
 		}
 	},
 	watch:{
		    $route(to,from){
		      var path = to.path;
		      if (path=='/home'||path=='/classify'||path=='/find') {
		        this.isShowTabbar = true
		      }else{
		        this.isShowTabbar = false
		      };
		    }
		}
}
</script>
<style lang='less' scoped >
	.tabbar{
		position: fixed;
		left: 0;
		bottom: 0;
		width:100%;
		border-top:1px solid #999;
		z-index:9999;
	}
	a{
		color:black
	}
	.active {
	    padding-top: 6px;
	    padding-bottom: 5px;
	    color: white;
	    background-color: #2196f3;
	}
</style>