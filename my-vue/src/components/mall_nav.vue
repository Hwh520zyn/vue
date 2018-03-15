<template>
	<div id="all">
		<ul>
			<li><a href="">首页</a></li>
			<li><a href="">目的地</a></li>
			<li><a href="">游记</a></li>
			<li><a href="">酒店</a></li>
		</ul>
		<p>
			<span class="s1"></span>
			<span class="s2">上海直飞曼谷7天往返含税机票（泼水节提前预售+含...</span>
			<span class="s3">更多</span>
		</p>
	</div>
</template>

<script>
	export default {
		name:"mall_nav"
		
	}
</script>

<style scoped>
	ul{
		width: 100%;
		height: .4rem;
		background: #ff9d00;
		overflow: hidden;
	}
	ul li{
		float: left;
		line-height: .4rem;
	}
	ul li a{
		color: #fff;
		font-size: .16rem;
		padding: 0 .28rem;
	}
	ul li a:after{
		content: "";
		display: block;
		width: .01rem;
		height: .1rem;
		background: #ccc;
		position: relative;
		top: -.24rem;
	}
	p{
		padding: .1rem 0 0.06rem .1rem;
		overflow: hidden;
		border-bottom: .01rem solid #f1f1f1;
	}
	p span{
		display: block;
		float: left;
		line-height: ;
	}
	.s1{
		width: .6rem;
		height: .4rem;
		background: url(../../static/img/i_index5.png) no-repeat 0 .04rem;
		background-size: .8rem;
	}
	.s2{
		width: 65%;
		margin-right: .2rem;
	}
	.s3{
		font-size: .16rem;
	}
</style>