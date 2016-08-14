<template>
	<ul class="pagination">
	    <li @click="pre">
	      <a>
	        <span>&laquo;</span>
	      </a>
	    </li>
	    <li><a>{{page}}</a></li>
	    <li @click="next">
	      <a>
	        <span>&raquo;</span>
	      </a>
	    </li>
	</ul>
</template>
<script>
	export default{
		data: function(){
			return {
				page: 1,
			}
		},
		methods:{
			refresh:function(page){
				this.$set("page",page);
	          	this.$parent.$refs.list.refresh(this.page);
	      	},
	      	pre:function(){
	      		if(this.page==1){
	      			return
	      		}else{
	      			this.refresh(this.page-=1);
	      		}
	      	},
	      	next:function(){
	          	if(this.$parent.$refs.list.total!==0){
	      			this.refresh(this.page+=1);
	      		}
	      	}
		}
	}
</script>
<style>
	.pagination{
		display: block;
		max-width: 200px;
		margin: 20px auto;
	}
</style>