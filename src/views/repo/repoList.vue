<template>
	<ul class="repoList">
		<li v-for="repo in repoList" v-cloak>
			<div class="star">
				<span>{{repo.language}}</span>&nbsp;&nbsp;&nbsp;
				<span class="glyphicon glyphicon-star"></span>&nbsp;
				{{repo.stargazers_count}}
			</div>
			<a :href="repo.html_url">{{repo.name}}</a>
			<br/>
			<span>{{repo.description}}</span>
		</li>
	</ul>
</template>

<script>
	export default{
		data: function(){
			return {
				per_page:6,
				repo:{
					stargazers_count: 0,
					name: "",
					html_url: "",
					description: ""
				},
				repoList:[
				],
				total:0
			}
		},
		methods:{
			refresh:function(page){
				var vm = this;
				var search = this.$parent.$refs.search.search;
				var	params = {
                	search: search,
                	page: page,
                	per_page: this.per_page
            	}
                loadRepo(params).then(function(data){
                    vm.$set('repoList',data.items);
                    vm.$set('total',data.items.length);
                })
			}
		},
		ready:function(){
			this.refresh(1);
		}
	}

	function loadRepo(params){
		var sendJSON = {q:(params.search.length>0?params.search+"\+":"")+"stars:>=0",sort:"stars",page:params.page,per_page:params.per_page};
		return new Promise(function(resolve,reject){
			$.ajax({
	  			url: 'https://api.github.com/search/repositories',
	          	type: "GET",
	          	contentType: "application/json; charset=utf-8",
            	data: sendJSON,
	        })
	        .done(function(data) {
	          	resolve(data);
	        })
	        .fail(function(e) {
	          	alert(e)
	        })
		})
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
		top: 10px;
		right: 6px;
		color: #888;
		font-weight: bold;
	}
</style>