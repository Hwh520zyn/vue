<template>
	<div>
		<p id="s_p">
			<input type="text" id="sear" placeholder="搜索产品名称/目的地" />
			<img src="../../../static/img/i_search.png" id="s_f"/>
		</p>
	</div>
</template>

<script>
	export default{
		name:'sos',
		
	}
</script>

<style scoped>
	#s_p{
		padding: 0 .15rem;
		position: relative;
	}
	#sear{
		background: #f2f2f2;
		border: 0;
		width: 100%;
		margin: .1rem 0;
		text-align: center;
		height: .25rem;
		line-height: .25rem;
		font-size: .12rem;
		color: #333;
		outline: none;
	}
	#s_f{
		position: absolute;
		width: .15rem;
		height: .15rem;
		left: 24%;
		top: 0.16rem;
	}
</style>