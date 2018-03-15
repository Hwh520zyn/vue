<template>
	<div id="all">
		<p class="p1">目的地</p>
		<p class="p2">
			<span class="s1">目的地/城市</span>
			<span class="s2">
				<i></i>
				<b>我的位置</b>
			</span>
		</p>
		<div class="h_tit">
			<p>
				<span>
					<i>入住</i>
					<b>4月22日</b>
				</span>
				<span>
					<i>离店</i>
					<b>4月22日</b>
				</span>
				<span>
					<i>每间</i>
					<b>2成人，0儿童</b>
				</span>
			</p>
			<a href="javascript:;">查找酒店</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:"hotel_sear"
	}
</script>

<style scoped>
	#all{
		padding: .1rem .2rem;
	}
	#all .p1{
		font-size: .14rem;
	}
	#all .p2 span{
		display: inline-block;
	}
	#all .p2 span.s1{
		font-size: .18rem;
		font-weight: bold;
		color: #c1c1c1;
		width: 80%;
	}
	#all .p2 span.s2 i{
		display: block;
		background: url(../../static/img/sprite_prod.png) no-repeat .12rem -3.06rem;
		background-size: 3.5rem;
		height: .2rem;		
	}
	.h_tit{
		margin-top: .2rem;
		padding-bottom: .2rem;
	}
	.h_tit p{
		overflow: hidden;
	}
	.h_tit span{
		display: block;
		float: left;
		margin-right: .18rem;
	}
	.h_tit span i{
		display: block;
		font-style: normal;
		margin-bottom: .15rem;
	}
	.h_tit span b{
		font-size: .2rem;
		font-weight: bold;
		color: #474747;
	}
	.h_tit a{
		display: block;
		width: 100%;
		margin: 0 auto;
		height: .5rem;
		background: #ffe24c;
		margin-top: .3rem;
		line-height: .5rem;
		text-align: center;
		color: #635f47;
		font-size: .18rem;
	}
</style>