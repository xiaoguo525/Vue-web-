<template>
	 <mu-carousel>
          <mu-carousel-item  v-for='(item,index) in arr' keys='index'>
            <img :src="item.imgSrc">
          </mu-carousel-item>
     </mu-carousel>
</template>
<script>
	import {carousels} from '../api.js'
	export default {
	  	data(){
	  		return {
	  			arr:[]
	  		}
	  	},
	  	methods:{
	  		getCarousel(){
	  			carousels().then(result=>this.arr = result)
	  		}
	  	},
	  	created(){
	  		this.getCarousel()
	  	}
	}
</script>
<style lang='less' scoped>
.mu-carousel{
	margin-top: 44px;
	height:200px;
	.mu-carousel-item{
		img{
			width:100%;
			height:200px
		}
	}
}
	
</style>