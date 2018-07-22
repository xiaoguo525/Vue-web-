export default{
	addCartsItems(state){
		var cartNum=0;
		for (var i = 0; i < state.iconSrc.length; i++) {
			if (state.iconSrc[i].checked) {
				cartNum += state.iconSrc[i].itemNum
			};
		};
		return cartNum;
	},
	allMoney(state){
		var money=0;
		for (var i = 0; i < state.iconSrc.length; i++) {
			if (state.iconSrc[i].checked) {
				money += state.iconSrc[i].itemNum*state.iconSrc[i].detailPrice;
			};
		};
		return money;
	},
	checkedAll(state){
		var cartGoods = state.iconSrc;
		var checked = true;
		for (var i = 0; i < cartGoods.length; i++) {
			var goods = cartGoods[i];
			if (!goods.checked) {
				checked = false;
				break;
			};
		};
		return checked;
	},
	userCartCount(state){
		var cartNum=0;
		for (var i = 0; i < state.iconSrc.length; i++) {
				cartNum += state.iconSrc[i].itemNum
		};
		return cartNum;
	},
	allWaitCount(state){
		var cartNum=0;
		for (var i = 0; i < state.userWaitPay.length; i++) {
				cartNum += state.userWaitPay[i].itemNum
		};
		return cartNum;
	},
	allPay(state){
		var money=0;
		for (var i = 0; i < state.userWaitPay.length; i++) {
				money += state.userWaitPay[i].itemNum*state.userWaitPay[i].detailPrice;
		};
		return money;
	},
	allWaitGoodsNum(state){
		var cartNum=0;
		for (var i = 0; i < state.userWaitGoods.length; i++) {
				cartNum += state.userWaitGoods[i].itemNum
		};
		return cartNum;
	}
}