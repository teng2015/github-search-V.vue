<template lang="jade">
	div
		.header
			.navbar
				router-link(to='/repo') repo
				router-link(to='/org') org
				a.pull-right(href='https://github.com/Fantasy15/github-search-1.0') built with vue.js
		.container-sm
			router-view
</template>
<style>
	body{
		margin: 0;
		font-size: 14px;
		font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
		background-color: #f5f5f5;
	}
	a{
		color:#337ab7;
		text-decoration: none;
	}
	a:focus,a:hover{
		color: #23527c;
		text-decoration: none;
	}
	.clearfix:before{
		display: table;
		content: "";
	}
	.clearfix:after{
		clear: both;
		display: table;
		content: "";
	}
	.header{
		background-color: #42b782;
		color: #fff;
		margin-bottom: 20px;
	}
	.navbar{
		max-width: 960px;
		margin: 0 auto;
	}
	.navbar a{
		display: inline-block;
		font-size: 16px;
		line-height: 20px;
		padding: 15px 15px;
		color: #fff;
	}
	.navbar .pull-right{
		float: right;
	}
	.container-sm{
		max-width: 960px;
		margin: 0 auto;
	}
	.clearfix:after{
		clear: both;
	}
	[v-cloak]{
		display: none
	}
</style>