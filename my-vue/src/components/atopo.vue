<template>
	<div>
		<header>
			<div class="btn">
				<router-link to="/" class="a1"></router-link>
			</div>
			<div class="cbtn">
				<h1>马蜂窝问答</h1>
			</div>
		</header>
		<!--banner-->
		<div class="banner">
			<a href="#">
				<img src="../../static/img/h5_banner.jpg" alt="" style="width: 100%"/>
			</a>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "atopo"
	
}
</script>


<style>
/*header*/
header{
	width:3.75rem;
	height:0.51rem;
	display: flex;
}
.btn{
	background: url(../assets/i_head5.png) no-repeat;
	background-size: 1rem 3.3rem;
	display: inline-block;
	height: 0.5rem;
	width: 13.3%;
}
.a1{
	display: block;
	width:100%;
	height:100%;
}
.cbtn{
	width:86.66%;
	height:100%;
}
.cbtn h1{
	line-height:0.51rem ;
	font-weight: normal;
	color: #666;
	font-size: 0.16rem;
	margin-left: 29%;
}
</style>