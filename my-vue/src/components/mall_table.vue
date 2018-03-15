<template>
	<div id="all">
		<div class="one">
			<p class="s1">旅游度假</p>
			<p class="s2">机酒套餐</p>
			<p class="s3">
				<span>国内机票</span>
				<span>跟团游</span>
			</p>
			<p class="s4">
				<span>订酒店</span>
				<span>邮轮</span>
			</p>
		</div>
		<div class="one two">
			<p class="s1">当地玩乐</p>
			<p class="s2">一日游</p>
			<p class="s3">
				<span>多日游</span>
				<span>酒店套餐</span>
			</p>
			<p class="s4">
				<span>景点门票</span>
				<span>当地体验</span>
			</p>
		</div>
		<div class="one thr">
			<p class="s1">出行必备</p>
			<p>
				<span class="s5">签证</span>
				<span>定制</span>
			</p>
			<p class="s3">
				<span>WiFi</span>
				<span>接送机</span>
			</p>
			<p class="s4">
				<span>电话卡</span>
				<span>交通卡</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mall_table"
		
	}
</script>

<style scoped>
	#all{
		padding-top: .1rem;
	}
	.one{
		margin-top: .01rem;
		overflow: hidden;
	}
	.one p{
		float: left;
		font-size: .14rem;
		color: #fff;
		margin-right: .02rem;
		box-sizing: border-box;
		text-align: center;
	}
	.s1{		
		width: .22rem;
		height: 1.06rem;
		padding-top: .12rem;
		background: url(../../static/img/catbg.png) no-repeat;
	}
	.s2{
		height: 1.06rem;
		line-height: 1.06rem;
		width: 1.14rem;
		background: url(../../static/img/catbg.png) no-repeat -0.3rem 0rem;
		background-size: 1.5rem;
	}
	p span{
		text-align: center;
		background: #ff9911;
		display: block;
		width: 1.15rem;
		height: .52rem;
		line-height: .59rem;
		margin-bottom: .02rem;
	}
	.two span{
		background: #12cc90;
	}
	.two .s1{
		background-position: 0 -1.92rem;
	}
	.two .s2{
		background-position: -.3rem -1.08rem;
	}
	.thr span{
		background: #1fb1e0;
	}
	.thr .s1{
		background-position: 0 -5.8rem;
	}
	.thr .s5{
		background: url(../../static/img/catbg.png) no-repeat -0.36rem -3.22rem;
		background-size: 1.5rem;
	}
</style>