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
	    <repo-list v-ref:list :org="org"></repo-list>
	    <page-bar v-ref:page></page-bar>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				org: 'vuejs'
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
				}
			}
		},
		components:{
			'search': require('../../components/search.vue'),
			'repo-list': require('./repoList.vue'),
			'page-bar': require('../../components/pageBar.vue')
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