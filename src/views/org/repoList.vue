<template>
	<ul class="repoList list-unstyled">
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
				per_page:5,
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
		props: ['org'],
		methods:{
			refresh:function(page){
				var vm = this;
				var search = this.$parent.$refs.search.search;
				var	params = {
                	org: this.org,
                	search: search,
                	page: page,
                	per_page: this.per_page
            	}
                loadRepo(params).then(function(data){
                    vm.$set('repoList',data);
                    vm.$set('total',data.length);
                })
			}
		},
		watch:{
			'org':function(val,oldVal){
				this.$parent.$refs.page.refresh(1);
			}
		},
		ready:function(){
			this.refresh(1);
		}
			
	}

	function loadRepo(params){
		var sendJSON;
		if(params.page==1 && params.search.length>0){
			sendJSON = {"query":params.search};
		}else{
			sendJSON = {"query":params.search,"page":params.page,"per_page":params.per_page};
		}
		console.log(sendJSON);
		return new Promise(function(resolve,reject){
			$.ajax({
	  			url: 'https://api.github.com/orgs/'+params.org+'/repos',
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
	.repoList li{
		padding: 16px 24px;
		border-bottom: 1px solid #f5f5f5;
	}
	.star{
		float: right;
		margin-top: 6px;
		color: #888;
		font-weight: bold;
	}
</style>