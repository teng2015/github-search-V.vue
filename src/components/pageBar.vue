<template>
	<ul class="pageBar">
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
	          	this.$parent.load(this.page);
	      	},
	      	pre:function(){
	      		if(this.page==1){
	      			return
	      		}else{
	      			this.refresh(this.page-=1);
	      		}
	      	},
	      	next:function(){
	          	if(this.$parent.total!==0){
	      			this.refresh(this.page+=1);
	      		}
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