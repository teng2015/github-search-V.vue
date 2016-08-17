require('es6-promise').polyfill()
import app from './app.vue'
import router from './router/index.js'
import store from './store/index.js'

new Vue({
	el: '#app',
	router,
	store,
	...app, //spread from app.vue
})



