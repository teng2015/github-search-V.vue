<template>
	<div class="repoContainer">
		<search v-ref:search></search>
		<repo-list v-ref:list :repo-list="repoList", :per_page="per_page" :org-show="0"></repo-list>
		<page-bar v-ref:page></page-bar>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				per_page: 6,
				repoList:[
				],
				total:0
			}
		},
		methods:{
			load:function(page){
				var vm = this;
				var search = this.$refs.search.search;
				var	params = {
                	search: search,
                	page: page,
                	per_page: this.per_page
            	}
                loadRepo(params).then(function(data){
                    vm.$set('repoList',data.items);
                    vm.$set('total',data.items.length);
                })
			}
		},
		ready: function(){
			this.load(1);
		},
		components:{
			'search': require("../components/search.vue"),
			'repo-list': require("../components/repoList.vue"),
			'page-bar': require("../components/pageBar.vue")
		}
	}


	function loadRepo(params){
		var sendJSON = {q:(params.search.length>0?params.search+"\+":"")+"stars:>=0",sort:"stars",page:params.page,per_page:params.per_page};
		if(params.search.length>0){
			delete(sendJSON.sort);
		}
		return new Promise(function(resolve,reject){
			$.ajax({
	  			url: 'https://api.github.com/search/repositories',
	          	type: "GET",
	          	contentType: "application/json; charset=utf-8",
            	data: sendJSON,
	        })
	        .done(function(data) {
	          	resolve(data);
	        })
	        .fail(function(e) {
	          	alert(e)
	        })
		})
	}
</script>
<style scope>
	.repoContainer{
		background-color: #fff;
		padding:  15px 24px 60px;
	}
</style>