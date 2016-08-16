<template>
	<ul class="pageBar">
	    <li @click="refresh(0)">
	      <a><span>&laquo;</span></a>
	    </li>
	    <li>
	    	<a>{{page}}</a>
	    </li>
	    <li @click="refresh(1)">
	      <a><span>&raquo;</span></a>
	    </li>
	</ul>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				page: 1
			}
		},
		computed: Vuex.mapGetters(['total']),
		methods:{
			refresh:function(type){
				switch(type){
					case 0:
						if(this.page!=1){
							this.page-=1;
						}
						break;
					case 1:
						if(this.total!=0){
							this.page+=1;
						}
						break;
				}
				this.$emit('query');
			}
		}
	}
</script>
<style>
	.pageBar{
		display: block;
		max-width: 200px;
		margin: 20px auto;
	}
	.pageBar li{
		display: inline;
	}
	.pageBar a{
		position: relative;
	    float: left;
	    padding: 6px 12px;
	    margin-left: -1px;
	    line-height: 1.42857143;
	    color: #337ab7;
	    text-decoration: none;
	    border: 1px solid #eee;
	}
	.pageBar a:first-child{
		border-top-left-radius : 2px;
		border-bottom-left-radius : 2px;
	}
	.pageBar a:last-child{
		border-top-left-radius : 2px;
		border-bottom-left-radius : 2px;
	}
</style>