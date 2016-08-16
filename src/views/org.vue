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
	    <search  ref="search" @query="load"></search>
	    <repo-list :repo-list="repoList" :org-show="1"></repo-list>
	    <page-bar  ref="page" @query="load"></page-bar>
	</div>
</template>
<script>
	module.exports = {
		name: 'org',
		data:function(){
			return{
				per_page:5,
				org: 'vuejs',
			}
		},
		computed: Vuex.mapGetters(['repoList']),
		methods:{
			orgQuery:function(name,event){
				switch(name){
					case 0:
						this.org = 'vuejs';
						break;
					case 1:
						this.org = 'angular';
						break;
					case 2:
						this.org = 'facebook';
						break;
					case 3:
						this.org = 'webpack';
				};
				this.load();
			},
			load:function(){
				var	params = {
					org: this.org,
	            	search: this.$refs.search.search,
	            	page: this.$refs.page.page,
	            	per_page: this.per_page
	        	}
				return this.$store.dispatch("loadRepoByOrg",params)
			}
		},
		mounted :function(){
			this.load();
		},
		components:{
			search: require('../components/search.vue'),
			repoList: require('../components/repoList.vue'),
			pageBar: require('../components/pageBar.vue')
		}
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