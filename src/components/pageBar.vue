<template lang="pug">
	ul.pageBar
		li(@click='refresh(0)')
			a: span &laquo;
		li
			a {{page}}
		li(@click='refresh(1)')
			a: span &raquo;
</template>
<script>
	export default{
		data () {
			return {
				page: 1
			}
		},
		computed: Vuex.mapGetters(['total']),
		methods:{
			refresh (type) {
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
<style lang="sass" scoped>
	.pageBar{
		display: block;
		max-width: 200px;
		margin: 20px auto;
	 	li{
			display: inline;
		}
	  	a{
			position: relative;
			float: left;
			padding: 6px 12px;
			margin-left: -1px;
			line-height: 1.42857143;
			color: #337ab7;
			text-decoration: none;
			border: 1px solid #eee;
			&:first-child{
				border-top-left-radius : 2px;
				border-bottom-left-radius : 2px;
				cursor: pointer;
			}
			&:last-child{
				border-top-left-radius : 2px;
				border-bottom-left-radius : 2px;
				cursor: pointer;
			}
		}
	}
</style>