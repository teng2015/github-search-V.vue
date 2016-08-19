<template lang="pug">
	.clearfix
		.form-search
			input(
				type='text',
				v-model='content',
				placeholder='find a repo',
				@keyup.enter='search',
			)
</template>
<script>
	export default{
		data () { return { content: "" } },
		methods: {
			//vue2.0 just can't automatic trigger action in  parent component
			//have to hand it
			search () { this.$emit('query') },
		}
	}
</script>
<style lang="sass" scoped>
	.form-search{
		position: relative;
		float: right;
		input{
			display: inline-block;
			width: 120px;
			line-height: 1.4;
			padding: 5px 10px;
			border-radius: 0;
			border: 1px solid #ccc;
			outline: none;
			transition: width .3s ease;
			&:focus{
				width: 150px;
			}
		}
	}
</style>