<template>
	<div class='wrapper'>
	  	<div class="userAndPsw">

	   		<span>帐号：</span>
	      	<mu-text-field v-model='user'></mu-text-field >
	    	<br>
	   		<span>密码：</span>
	        <mu-text-field type="password" v-model='pas' >
	     	</mu-text-field>
	  	</div>	
	    <div class="login">
	  		<mu-button color="success" class='loging' @click='login'>登录</mu-button>
	    </div>
	    <p class='login-txt'>登录帐号，查看专属推荐商品</p>
	    <mu-dialog  width="160" :open.sync="openSimple">
          <p class='add-suc'>{{alertTxt}}</p>
        </mu-dialog>
	</div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		data(){
			return{
				user:'',
				pas:'',
      			openSimple: false,
      			alertTxt:''
			}
		},
		computed:{
			...mapState(['isLogin'])
		},
		methods:{
			login(){
				if (this.user==''||this.pas=='') {
					  this.openSimple = true;
					  this.alertTxt = '请输入账号密码'
			          setTimeout(()=>{
			            this.openSimple = false;
			        }, 1000)
				} else{
					  this.openSimple = true;
					  this.alertTxt = '恭喜您登录成功'
			          setTimeout(()=>{
			            this.openSimple = false;
			            this.changeLogin()
						this.$router.push('/login')
			        }, 2000)
				};
			},
			...mapActions({
				'changeLogin':'changeLogin'
			})
		}
	}
</script>
<style lang='less' scoped>
@import url('../../style/base.less');
 .wrapper{
 	.login-txt{
 		text-align: center;
 		margin-top: 15px;
 		color:#F23030;
 	}
 	.userAndPsw{
 		padding:20px 20px;
 	}
 	margin-top: 44px;
 	.login{
 		width:80%;
 		margin:0px auto;
 		.loging{
 			width:100%
 		}
 	}
 }
</style>