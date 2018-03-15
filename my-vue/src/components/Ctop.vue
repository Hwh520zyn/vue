<template>
	<div>
	<header>
			<div class="btn">
				<a class="a1"href="http://localhost:8080/#/"></a>
			</div>

			<div class="cbtn">
				<h1>国内机票</h1>
			</div>
		</header>
	
	</div>
</template>

<script>
	export default{
		name:'Ctop',
	}
</script>

<style>
	/*header*/
header{
	width:3.75rem;
	height:0.51rem;
	display: flex;
	background:#fff;
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