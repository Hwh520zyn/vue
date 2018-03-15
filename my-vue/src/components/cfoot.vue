<template>
	<div class="foot">
		<div class="discounts">
		<a href="#">
		<i class="iconfont icon-dingdan"></i>
		<span>我的优惠券</span>
		</a>
		</div>
		<div>
		<a href="#">	
		<i class="iconfont icon-dingdan"></i>
		<span>我的订单</span>
		</a>	
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'cfoot',
	}
</script>

<style>
.foot{
	width:100%;
	height:0.61rem;
	background:#fff;
	position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
}
.foot div{
	width:50%;
	height:100%;

}
.foot div a{
	display: block;
	display: flex;
	width:100%;
	height:100%;
	color:#333;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.foot div i{
	color:#ff9d00;
	font-size: 0.22rem!important;
}
</style>