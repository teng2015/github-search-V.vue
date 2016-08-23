<template lang="pug">
	div
		loading( :show="loading")
		search(ref='search',@query='load')
		repo-list( :show='!loading', :repo-list='repoList', :org-show='0')
		page-bar(ref='page',@query='load')
</template>

<script>
	export default {
		name: 'repo',
		data () {
			return {
				loading: false,
				per_page:6
			}
		},
		computed: Vuex.mapGetters(['repoList']),
		methods:{
			load () {
				this.loading = true
				const params = {
					query: this.$refs.search.content,
					page: this.$refs.page.page,
					per_page: this.per_page
				}
				this.$store.dispatch('loadRepo',params).then(() => {
					this.loading = false
				})
			}
		},
		mounted () {
			this.load();
		},
		components:{
			loading: require("../components/loading.vue"),
			search: require("../components/search.vue"),
			repoList: require("../components/repoList.vue"),
			pageBar: require("../components/pageBar.vue")
		}
	}
</script>
