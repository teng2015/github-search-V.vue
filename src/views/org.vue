<template lang="pug">
	div
		loading( :show="loading")
		.orgType
			button( :class="org=='vuejs'?'tab':'ninja'", @click='orgQuery(0)') vuejs
			button( :class="org=='angular'?'tab':'ninja'", @click='orgQuery(1)') angular
			button( :class="org=='facebook'?'tab':'ninja'", @click='orgQuery(2)') facebook
			button( :class="org=='webpack'?'tab':'ninja'", @click='orgQuery(3)') webpack
		search(ref='search',@query='load')
		repo-list( :show="!loading", :repo-list='repoList', :org-show='1')
		page-bar(ref='page',@query='load')
</template>
<script>
	export default{
		name: 'org',
		data () {
			return {
				loading: false,
				per_page:5,
				org: 'vuejs',
			}
		},
		computed: Vuex.mapGetters(['repoList']),
		methods:{
			orgQuery (name,event) {
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
						break;
				};
				this.load();
			},
			load () {
				this.loading = true
				const params = {
					org: this.org,
					query: this.$refs.search.content,
					page: this.$refs.page.page,
					per_page: this.per_page
	 			}
				this.$store.dispatch("loadRepoByOrg",params).then( () => {
					this.loading = false
				})
			}
		},
		mounted () {
			this.load();
		},
		components:{
			loading: require("../components/loading.vue"),
			search: require('../components/search.vue'),
			repoList: require('../components/repoList.vue'),
			pageBar: require('../components/pageBar.vue')
		}
	}
</script>
<style lang="sass" scoped>
	.orgType{
		margin-top: 8px;
		margin-bottom: 12px;
		padding-top: 10px;
		padding-left: 0.2em;
		background-color: #f5f5f5;
		.tab{
			background-color: #42b782;
			color: #fff;
		}
		.ninja{
			background-color: #fff;
			color: #333;
		}
		button{
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
	}
</style>