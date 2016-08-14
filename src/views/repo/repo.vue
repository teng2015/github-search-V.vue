<template>
	<div class="repoContainer">
		<search v-ref:search></search>
		<repo-list v-ref:list></repo-list>
		<page-bar v-ref:page></page-bar>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{

			}
		},
		components:{
			'search': require("../../components/search.vue"),
			'repo-list': require("./repoList.vue"),
			'page-bar': require("../../components/pageBar.vue")
		}
	}
</script>
<style scope>
	.repoContainer{
		background-color: #fff;
		padding:  15px 24px 60px;
	}
</style>