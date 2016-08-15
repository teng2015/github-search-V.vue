<template>
	<div class="orgContainer">
		<div  class="orgType">
	      	<div class="btn-toolbar">
	          	<button @click="orgQuery(0,$event)">vuejs</button>
	          	<button @click="orgQuery(1,$event)">angular</button>
	          	<button @click="orgQuery(2,$event)">facebook</button>
	          	<button @click="orgQuery(3,$event)">webpack</button>
	     	 </div>
	    </div>
	    <search v-ref:search></search>
	    <repo-list v-ref:list :repo-list="repoList" :per_page="per_page" :org-show="1"></repo-list>
	    <page-bar v-ref:page></page-bar>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				per_page:5,
				org: 'vuejs',
				total: 0,
				repoList:[
				]
			}
		},
		methods:{
			orgQuery:function(name,event){
				switch(name){
					case 0:
						this.$set("org",'vuejs');
						break;
					case 1:
						this.$set("org",'angular');
						break;
					case 2:
						this.$set("org",'facebook');
						break;
					case 3:
						this.$set("org",'webpack');
				};
				this.load(1);
			},
			load:function(page){
				var vm = this;
				var search = this.$refs.search.search;
				var	params = {
					org: this.org,
                	search: search,
                	page: page,
                	per_page: this.per_page
            	}
                loadRepo(params).then(function(data){
                    vm.$set('repoList',data);
                    vm.$set('total',data.length);
                })
			}
		},
		ready: function(){
			this.load(1);
		},
		components:{
			'search': require('../components/search.vue'),
			'repo-list': require('../components/repoList.vue'),
			'page-bar': require('../components/pageBar.vue')
		}
	}
	function loadRepo(params){
		var sendJSON;
		if(params.page==1 && params.search.length>0){
			sendJSON = {query:params.search};
		}else{
			sendJSON = {query:params.search,page:params.page,per_page:params.per_page};
		}
		return new Promise(function(resolve,reject){
			$.ajax({
	  			url: 'https://api.github.com/orgs/'+params.org+'/repos',
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
<style scoped>
	.orgContainer{
		background-color: #fff;
		padding:  15px 24px 60px;
	}
	.orgType{
	  	margin-top: 8px;
	  	margin-bottom: 12px;
	  	padding-top: 10px;
	  	padding-left: 0.2em;
	  	background-color: #f5f5f5;
	  	color: #fff;
	}
	.orgType button{
		display: inline-block;
		margin-left: 5px;
		padding: 6px 12px;
  		border-radius: 0;
	  	border: 0;
	  	font-size: 14px;
	  	line-height: 20px;
	  	background-color: #fff;

	}
	.orgType button:hover{
		color: #333;
	}
</style>