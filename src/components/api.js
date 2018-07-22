import axios from 'axios';
axios.defaults.baseURL = 'http://pbfwbdhuu.bkt.clouddn.com';
var carousels = ()=>{
	return axios.get("/nav-img.json").then(response=>{
		return response.data;
	})
}
var myclassifies = ()=>{
	return axios.get("/homeClassify.json").then(response=>{
		return response.data;
	})
}
var recommends = ()=>{
	return axios.get("/homeRecommend2.json").then(response=>{
		return response.data;
	})
}
var classifyList = ()=>{
	return axios.get("/classify.json").then(response=>{
		return response.data.all;
	})
}
var loginCommend = ()=>{
	return axios.get("/login-Commend.json").then(response=>{
		return response.data;
	})
}
export {carousels,myclassifies,recommends,classifyList,loginCommend}