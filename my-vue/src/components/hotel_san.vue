<template>
	<div id="all">
		<ul>
			<li>
				<a href="">
					<i></i>
					<b>优惠券</b>
				</a>
			</li>
			<li>
				<a href="">
					<i></i>
					<b>酒店收藏</b>
				</a>
			</li>
			<li>
				<a href="">
					<i></i>
					<b>我的订单</b>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"hotel_san"
	}
</script>

<style scoped>
	#all{
		overflow: hidden;
	}
	ul li{
		float: left;
		height: .8rem;
		width: 33%;
		border-right: .01rem solid #eee;
		text-align: center;
	}
	ul li a{
		color: #474747;
	}
	ul li a i{
		display: block;
		width: .4rem;
		height: .3rem;
		margin: 0 auto;
		background: url(../../static/img/sprite_prod.png) no-repeat .08rem -2.42rem;
		background-size: 4rem;
		margin-top: .1rem;
	}
</style>