<template>
	<div class="orgContainer">
		<div  class="orgType">
	      	<div class="btn-toolbar">
	          	<button  :class="org=='vuejs'?'tab':'ninja'"   @click="orgQuery(0,$event)">vuejs</button>
	          	<button  :class="org=='angular'?'tab':'ninja'"   @click="orgQuery(1,$event)">angular</button>
	          	<button  :class="org=='facebook'?'tab':'ninja'"   @click="orgQuery(2,$event)">facebook</button>
	          	<button  :class="org=='webpack'?'tab':'ninja'"   @click="orgQuery(3,$event)">webpack</button>
	     	 </div>
	    </div>
	    <search  ref="search" @query="load"></search>
	    <repo-list :repo-list="repoList" :org-show="1"></repo-list>
	    <page-bar  ref="page" @query="load"></page-bar>
	</div>
</template>
<script>
	export default{
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
						this.show = 1
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
				const	params = {
					org: this.org,
	            	search: this.$refs.search.content,
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
	.tab{
		background-color: #42b782;
		color: #fff;
	}
	.ninja{
		background-color: #fff;
		color: #333;
	}
	.orgType button{
		display: inline-block;
		margin-left: 5px;
		padding: 6px 12px;
  		border-radius: 0;
	  	border: 0;
	  	font-size: 14px;
	  	line-height: 20px;
	  	cursor: pointer;
		outline: none;
	}
</style>