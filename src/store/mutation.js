export default {
	add(state,params){
		var isTrue = false;
		var goodItems = state.iconSrc
		for (var i = 0; i < goodItems.length; i++) {
			if (goodItems[i].iconSrc == params.iconSrc) {
				isTrue = true;
				goodItems[i].itemNum += params.itemNum;
				break;
			};
		};
		if (!isTrue) {
			goodItems.push(params);
		};
	},
	countAdd(state){
		state.itemNum ++;
	},
	countDel(state){
		if(state.itemNum > 1)
			state.itemNum --;
	},
	changeCount(state,params){
		var goodItems = state.iconSrc;
			goodItems[params.index].itemNum += params.tag;
	},
	isHaveChecked(state,params){
		var checked = params.isHasChecked;
		var index = params.index;
		state.iconSrc[index].checked = checked;
	},
	changeAllChecked(state,params){
		var ischecked = params.checked;
		var goodItems = state.iconSrc;
		for(var i=0;i < goodItems.length; i++){
			goodItems[i].checked = ischecked;
		}
	},
	addWaitPay(state){
		var goodItems = state.iconSrc;
		for(var i=0;i < goodItems.length; i++){
			var good=goodItems[i];
			if (good.checked) {
				state.userWaitPay.push(good);
				goodItems.splice(i, 1);
				i--;
			};
		}
	},
	affirmPay(state){
		var goodItems = state.userWaitPay;
		for(var i=0;i < goodItems.length; i++){
			var good=goodItems[i];
			state.userWaitGoods.push(good);
			goodItems.splice(i, 1);
			i--;
		}
	},
	immediatelyPay(state,params){
		var isTrue = false;
		var goodItems = state.userWaitPay
		for (var i = 0; i < goodItems.length; i++) {
			if (goodItems[i].iconSrc == params.iconSrc) {
				isTrue = true;
				goodItems[i].itemNum += params.itemNum;
				break;
			};
		};
		if (!isTrue) {
			goodItems.push(params);
		};
	},
	changeLogin(state){
		state.isLogin = true
	},
	quitlogin(state){
		state.isLogin = false
	},
}