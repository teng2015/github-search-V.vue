<template>
	<div class="clearfix">
      	<div class="form-search">
	      	<!-- <span class="glyphicon glyphicon-search search" @click="search"></span> -->
	        <input type="text" v-model="content" placeholder="find a repo" @keyup.enter="search">
      	</div>
    </div>
</template>
<script>
	export default{
		data () { return { content: "" } },
		methods: {
			//just can't automatic trigger action in  parent component
			//have to hand it
			search () { this.$emit('query') },
		}
	}
</script>
<style scoped>
	.form-search{
		position: relative;
		float: right;
	}
	.form-search input{
		display: inline-block;
		line-height: 1.4;
		padding: 5px 10px;
		border-radius: 0;
		border: 1px solid #ccc;
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	}
	.search{
		position: absolute;
		top: 8px;
		right: 8px;
		color: #888;
	}
</style>