<template>
	<div id="all">
		<p id="tit">常驻运营区</p>
		<div class="cz">
			<div class="cz_l">
				<img src="../../static/img/img14.jpeg"/>
				<p class="p1">
					<span>芽庄</span>
					<span>半自助游</span>
				</p>
				<p class="p2">
					天津直飞芽庄5-7天半自助游（ 保证2-3天整天自由活动+赠送泥浆浴或蚕岛游+京津大巴接送+500多人出游）
				</p>
				<p class="p3">
					<span>1699</span>
					<span>去抢购</span>
				</p>
			</div>
			<div class="cz_r">
				<p>
					<a href="">新人领包</a>
					<a href="">首次下单可领</a>
				</p>
				<p>
					<a href="">限时特价</a>
					<a href="">每日尾货抢不完</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mall_chzh"
		
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
	.cz_l{
		float: left;
		padding: .12rem;
		position: relative;
		width: 38%;
	}
	.cz_l img{
		width: 100%;
		height: .9rem;
	}
	.cz_l .p1{
		background:#9b59b6;
		position: absolute;
		left: .12rem;
		top: .12rem;
		font-size: .14rem;
		padding: 0.01rem .05rem;
		color: #fff;
	}
	.cz_l .p1 span:last-child{
		background: #fff;
		color: #9b59b6;
		padding: 0 .02rem;
	}
	.cz_l .p2{
		width: 100%;
		color: #111;
		font-size: .14rem;
		line-height: .2rem;
		padding-right: .3rem;
		margin-top: .1rem;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.cz_l .p3{
		margin-top: .08rem;		
	}
	.cz_l .p3 span{
		font-size: .16rem;
	}
	.cz_r{
		float: right;
		width: 55%;
		border-left: .01rem solid #f1f1f1;
	}
	.cz_r p{
		padding: .2rem .1rem;
		border-bottom: .01rem solid #f1f1f1;
		font-size: .16rem;
		background: url(../../static/img/img07.png) no-repeat 1.3rem .05rem;
		background-size: .8rem;
	}
	.cz_r p a{
		display: block;
		color: #999;
		margin-bottom: .05rem;
	}
	.cz_r p a:first-child{
		font-size: .18rem;
		color: #111;
	}
</style>