<template>
	<div class="clearfix">
    	<div class="form-inline">
          <div class="form-group">
          	<span class="glyphicon glyphicon-search search" @click="query"></span>
            <label for="repoName"></label>
            <input type="text" class="form-control input-sm"  v-model="search" placeholder="find a repo" @keyup.enter="query">
          </div>
        </div>
    </div>
</template>
<script>
	export default{
		data: function(){
			return {
				search: ""
			}
		},
		methods:{
			query: function(){
				this.$parent.$refs.page.refresh(1);
			}
		}
	}
</script>
<style scoped>
	.form-inline{
		position: relative;
		float: right;
	}
	.form-inline .input-sm{
		border-radius: 0;
	}
	.search{
		position: absolute;
		top: 8px;
		right: 8px;
		color: #888;
	}
</style>