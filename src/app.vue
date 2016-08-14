<template>
	<div>
		<nav class="navbar navbar-default">
		    <div class="container">
		        <ul class="nav navbar-nav">
		            <li  v-link="{path: '/repo'}">
		              <a href="#">repo</a>
		            </li>
		            <li v-link="{path: '/org'}">
		              <a href="#">org</a>
		            </li>
		            <li v-link = "{path: '/user'}">
		              <a href="#">user</a>
		            </li>
		            <li v-link = "{path: '/ranking'}">
		              <a href="#">ranking</a>
		            </li>
		        </ul>
		        <ul class="nav navbar-nav navbar-right">
		            <li>
		              <a href="#">built with vue.js</a>
		            </li>
		        </ul>
		    </div>
	  	</nav>
		<div class="container-sm">
	      	<router-view></router-view>
  		</div>
	</div>
</template>
<style>
	body{
		background-color: #f5f5f5;
	}
	.navbar-default{
		background-color: #fff;
	}
	.container-sm{
		max-width: 960px;
		margin: 0 auto;
	}
	[v-cloak]{
		display: none
	}
</style>