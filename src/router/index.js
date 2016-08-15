Vue.use(VueRouter);

// var router = new VueRouter({hashbang: false, history: true});
var router = new VueRouter();

router.map({
	'/repo': {
		component: require('../views/repo.vue')
	},
	'/org': {
		component: require('../views/org.vue')
	}
})

router.redirect({
  '*': '/repo'
})

module.exports = router;
