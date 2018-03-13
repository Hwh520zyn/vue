import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
	state : {
		users : [
					{ username:"hwh", psw : "520zyn" },
		]
	},
	mutations : {
		getUserNameM : function(state, data){
			state.users.push(data);
		}
	},
	actions :{
		getUserNmaeA :  function({commit},data){
			commit("getUserNameM",data);
		}
	}
})
export default store;