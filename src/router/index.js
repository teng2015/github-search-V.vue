Vue.use(VueRouter)

export default new VueRouter({
	//if you use history mode, remember to config history-api fallback to index.html on server,nginx or whatever
	//and if you use webpack-dev-server,add a html-loader to parse may be better
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			path:"/repo",
			component:require('../views/repo.vue')
		},
		{	
			path:"/org",
			component:require('../views/org.vue')
		},
		{
			path:"*", 
			redirect:"/repo"
		}
	]
})
