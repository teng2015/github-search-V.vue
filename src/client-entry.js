require('es6-promise').polyfill()
import app from './app.vue'
// var app = require('./app.vue')
import router from './router/index.js'
import store from './store/index.js'

new Vue({
	el: '#app',
	router:router,
	store: store,
	render: function(h){
		return h(app)
	}
})



