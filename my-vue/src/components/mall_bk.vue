<template>
	<div id="all">
		<p id="tit">爆款热卖</p>
		<div class="bk_img">
			<img src="../../static/img/img08.png"/>	
			<p class="p1">普吉岛</p>
			<p class="p2"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mall_bk"
		
	}
</script>

<style scoped>
	#all{
		overflow: hidden;
	}
	#tit{
		width: 100%;
		text-align: center;
		background: #f7f7f7;
		margin-top: .02rem;
		font-size: .16rem;
		padding: .1rem 0;
		color: #999;
	}
	.bk_img{
		position: relative;
	}
	.bk_img img{
		width: 100%;
		height: 1rem;
	}
	.bk_img .p1{
		width: 100%;
		text-align: center;
		position: absolute;
		left: 0;
		top: 40%;
		color: #FFFFFF;
		font-size: .24rem;
	}
	.bk_img .p2{
		width: 0rem;
		height: 0rem;
		border: .1rem solid #fff;
		border-top: 0;
		border-left-color: transparent;
		border-right-color: transparent;
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -.1rem;
	}
</style>