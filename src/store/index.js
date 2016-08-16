import api from './api.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		total:1,
		repoList: [
		]
	},
	actions:{
		loadRepo: function({commit},params){
			return api.loadRepo(params).then(function(data){
				commit('set_repoList',data.items);
				commit('set_total',data.items.length);
			})
		},
		loadRepoByOrg: function({commit},params){
            return api.loadRepoByOrg(params).then(function(data){
                commit('set_repoList',data);
                commit('set_total',data.length);
            })
		}
	},
	mutations:{
		set_repoList: function(state,repoList){
			state.repoList = repoList
		},
		set_total:function(state,total){
			state.total = total;
		}
	},
	getters:{
		repoList: function(state){
			return state.repoList
		},
		total:function(state){
			return state.total
		}
	}
})

module.exports = store