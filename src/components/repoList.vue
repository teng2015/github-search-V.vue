<template>
	<ul class="repoList">
		<li v-for="repo in repoList" v-cloak>
			<div class="star">
				<span>{{repo.language}}</span>&nbsp;&nbsp;&nbsp;
				<span class="glyphicon glyphicon-star"></span>&nbsp;
				{{repo.stargazers_count}}
			</div>
			<a v-if="orgShow==0" :href="repo.owner.html_url">{{repo.owner.login}}/</a>
			<a :href="repo.html_url">{{repo.name}}</a>
			<br/>
			<span>{{repo.description}}</span>
		</li>
	</ul>
</template>

<script>
	module.exports = {
		data: function(){
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

<style scoped>
	.repoList{
		margin: 0;
		margin-bottom: 10px;
		padding-left: 0;
		list-style: none;
	}
	.repoList li{
		position: relative;
		padding: 16px 24px;
		border-bottom: 1px solid #f5f5f5;
		line-height: 20px;
	}
	.repoList li a{
		font-size: 16px;
		line-height: 1.2;
	}
	.star{
		position: absolute;
		top: 6px;
		right: 10px;
		color: #888;
		font-weight: bold;
	}
</style>