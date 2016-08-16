var app = require('./app.vue');
var router = require('./router/index.js');
var store = require('./store/index.js');


new Vue({
	el: '#app',
	router:router,
	store: store,
	render: function(h){
		return h(app)
	}
})



