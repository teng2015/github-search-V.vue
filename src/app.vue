<template lang="pug">
	div
		.header
			.navbar
				router-link(to='/repo') repo
				router-link(to='/org') org
				a.pull-right(href='https://github.com/Fantasy15/github-search-1.0') built with vue.js
		transition(name='fade',mode='out-in')
			router-view.container-sm
</template>
<style lang="sass">
	body{
		margin: 0;
		font-size: 14px;
		font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
		background-color: #f5f5f5;
	}
	*{
		box-sizing: border-box;
	}
	a{
		color:#337ab7;
		text-decoration: none;
	}
	.clearfix:after{
		clear: both;
		display: table;
		content: "";
		overflow:hidden;
	}
	.header{
		position:fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		background-color: #42b782;
		color: #fff;
		.navbar{
			max-width: 960px;
			margin: 0 auto;
			a{
				display: inline-block;
				padding: 15px 15px;
				font-size: 16px;
				line-height: 20px;
				color: rgba(255,255,255,.8);
				transition: color .2s ease ;
				&:hover,&.router-link-active{
					color:#fff;
				}
			}
			.pull-right{
				float: right;
			}
		}
	}
	.container-sm{
		max-width: 960px;
		margin: 80px auto 0;
		padding:  15px 24px 60px;
		background-color: #fff;
	}
	.fade-enter-active{
	  transition: opacity .3s
	}
	.fade-leave-active{
	  transition: opacity .5s
	}
	.fade-leave-active,.fade-enter{
	  opacity: 0
	}
</style>