Vue.use(VueRouter);

// var router = new VueRouter({hashbang: false, history: true});
var router = new VueRouter();

router.map({
	'/repo': {
		component: require('../views/repo.vue')
	},
	'/org': {
		component: require('../views/org/org.vue')
	}
	// '/user': {
	// 	component: require('../views/user.vue')
	// },
	// '/ranking': {
	// 	component: require('../views/ranking.vue')
	// }
})

router.redirect({
  '*': '/org'
})

module.exports = router;
