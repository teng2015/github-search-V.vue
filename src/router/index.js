Vue.use(VueRouter)

export default new VueRouter({
	// mode: 'history',
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
