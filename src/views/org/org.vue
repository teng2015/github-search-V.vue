<template>
	<div class="orgContainer">
		<div  class="orgType">
	      <div class="btn-toolbar">
	        <div class="btn-group" >
	          <button class="btn btn-default" @click="orgQuery(0,$event)">vuejs</button>
	        </div>
	        <div class="btn-group" >
	          <button class="btn btn-default" @click="orgQuery(1,$event)">angular</button>
	        </div>
	        <div class="btn-group" >
	          <button class="btn btn-default" @click="orgQuery(2,$event)">facebook</button>
	        </div>
	        <div class="btn-group" >
	          <button class="btn btn-default" @click="orgQuery(3,$event)">webpack</button>
	        </div>
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
					// this.$refs.list.refresh(1,org)
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
	  	padding-left: 0.5em;
	  	background-color: #f5f5f5;
	  	color: #fff;
	}
	.orgType button{
  		border-radius: 0;
	  	border: 0;
	}
</style>