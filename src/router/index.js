import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue';
import Classify from '../components/classify/classify.vue';
import Cart from '../components/cart/cart.vue';
import User from '../components/user/user.vue';
import Detail from '../components/home/detail/detail.vue';
import Login from '../components/user/login.vue';
import Pay from '../components/pay/pay.vue';
import Success from '../components/pay/success.vue';
import Waitgood from '../components/user/waitgood.vue';
Vue.use(VueRouter)
var routes = [
	{path:'/home',component:Home,meta:{'title':'首页',"keepAlive":true}},
	{path:'/classify',component:Classify,meta:{'title':'商城分类',"keepAlive":false}},
	{path:'/cart',component:Cart,meta:{'title':'购物车',"keepAlive":false}},
	{path:'/user',component:User,meta:{'title':'个人中心',"keepAlive":false}},
	{path:'/login',component:Login,meta:{'title':'登录详情',"keepAlive":false}},
	{path:'/pay',component:Pay,meta:{'title':'待付款',"keepAlive":false}},
	{path:'/success',component:Success,meta:{'title':'支付成功',"keepAlive":false}},
	{path:'/waitgood',component:Waitgood,meta:{'title':'待收货',"keepAlive":false}},
	{
		path:'/detail/:src/:title/:price',
		component:Detail,
		name:'detail',
		meta:{'title':'商城详情',"keepAlive":false}
	},
	{path:'',redirect:'/home'},
]
var router = new VueRouter({
	routes:routes,
	linkActiveClass:'active'
})
router.beforeEach((to,from,next)=>{
	document.title = to.meta.title;
	next();
})
export default router;