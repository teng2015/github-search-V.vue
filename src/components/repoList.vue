<template lang="pug">
	ul.repoList
		li(v-for='repo in repoList')
			.star
				span {{repo.language}}&nbsp;&nbsp;&nbsp;&nbsp;{{repo.stargazers_count}}
			a(
				v-if='orgShow==0',
				href='repo.owner.html_url'
			) {{repo.owner.login}}
			a(
				:href='repo.html_url'
			) {{repo.name}} 
			br
			span {{repo.description}}
</template>
<script>
	export default{
		data () {
			return {
				repo:{
					stargazers_count: 0,
					name: "",
					html_url: "",
					description: ""
				}
			}
		},
		props: ['repoList','orgShow'],
	}
</script>

<style lang="sass" scoped>
	.repoList{
		margin: 0;
		min-height: 280px;
		margin-bottom: 10px;
		padding-left: 0;
		list-style: none;
		li{
			position: relative;
			padding: 16px 24px;
			border-bottom: 1px solid #f5f5f5;
			line-height: 20px;
			.star{
				position: absolute;
				top: 6px;
				right: 10px;
				color: #888;
				font-weight: bold;
			}
			a{
				font-size: 16px;
				line-height: 1.2;
				&:hover{
					color: #23527c;
				}
			}
		}
	}
</style>