<template lang="pug">
	div
		loading( :show="loading")
		search(ref='search',@query='load')
		transition( :name='transition')
			repo-list.list( :repo-list='repoList', :org-show='0')
		page-bar(ref='page',@query='load')
</template>

<script>
	export default {
		name: 'repo',
		data () {
			return {
				transition: 'slide-left',
				loading: false,
				per_page:6
			}
		},
		computed: Vuex.mapGetters(['repoList','total']),
		methods:{
			load () {
				this.loading = true
				const params = {
					query: this.$refs.search.content,
					page: this.$refs.page.page,
					per_page: this.per_page
				}
				this.$store.dispatch('loadRepo',params).then(() => {
					this.transition = 'slide-right'
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
<style lang="sass" scoped>
	.slide-right-leave-active,.slide-left-enter{
		opacity:0;
		transform: translate(140px 0);
	}
	.slide-left-leave-active, .slide-right-enter{
		opacity:0;
		transform: translate(-140px, 0);
	}
</style>
