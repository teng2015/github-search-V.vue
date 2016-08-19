import api from './api.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		total:1,
		repoList: [
		]
	},
	actions:{
		loadRepo ({commit},params) {
			return api.loadRepo(params).then( ({items}) => {
				commit('set_repoList',items)
				commit('set_total',items.length)
			})
		},
		loadRepoByOrg ({commit},params) {
			return api.loadRepoByOrg(params).then( data => {
				commit('set_repoList',data)
				commit('set_total',data.length)
			})
		}
	},
	mutations:{
		set_repoList (state,repoList) {state.repoList = repoList },
		set_total (state,total) { state.total = total }
	},
	getters:{
		repoList: (state) => state.repoList,
		total: (state) => state.total
	}
})
