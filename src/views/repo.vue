<template>
	<div class="repoContainer">
		<search ref="search" @query="load"></search>
		<repo-list  :repo-list="repoList" :org-show="0"></repo-list>
		<page-bar ref="page" @query="load"></page-bar>
	</div>
</template>
<script>
	export default {
		name: 'repo',
		data () {
			return {
				per_page:6
			}
		},
		computed: Vuex.mapGetters(['repoList']),
		methods:{
			load () {
				const params = {
	            	query: this.$refs.search.content,
	            	page: this.$refs.page.page,
	            	per_page: this.per_page
	        	}
				return this.$store.dispatch('loadRepo',params)
			}
		},
		mounted () {
			this.load();
		},
		components:{
			search: require("../components/search.vue"),
			repoList: require("../components/repoList.vue"),
			pageBar: require("../components/pageBar.vue")
		}
	}

</script>
<style scope>
	.repoContainer{
		background-color: #fff;
		padding:  15px 24px 60px;
	}
</style>