<template lang="jade">
	svg.box( :class="{show:show}" width='44px',height="44px",viewBox="0 0 44 44")
		circle.inner(cx="22",cy="22",r="20",fill="none",stroke-width="4",stroke-linecap="round")
</template>

<script>
	export default{
		props: ['show']
	}	
</script>

<style lang="sass" scoped>
	$offset: 126;
	$duration: 1.4s;
	.box{
		position: fixed;
		z-index: 999;
		right: 15px;
		bottom: 15px;
		opacity: 0;
		transition: opacity .15s ease;
		animation: rotator $duration linear infinite;
		animation-play-state: paused;
		.inner{
			stroke: #42b782;
			stroke-dasharray: $offset;
			stroke-dashoffset:0;
			transform-origin: center ;
			animation:dash $duration ease-in-out infinite;
		}
	}
	.box.show{
		opacity: 1;
		animation-play-state: running;
	}
	@keyframes rotator{
		0%{
			transform: scale(0.5) rotate(0deg)
		}
		100%{
			transform: scale(0.5) rotate(270deg)
		}
	}
	@keyframes dash{
		0%{
			stroke-dashoffset:$offset;
		}
		50%{
			stroke-dashoffset:($offset/2);
			transform: rotate(135deg)
		}
		100%{
			stroke-dashoffset: $offset;
			transform: rotate(450deg);
		}
	}
</style>