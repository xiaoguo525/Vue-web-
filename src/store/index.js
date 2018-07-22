import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import state from './state.js';
import actions from './action.js';
import mutations from './mutation.js';
import getters from './getter.js';
var store = new Vuex.Store({
	state:state,
	actions:actions,
	mutations:mutations,
	getters:getters
});
export default store;