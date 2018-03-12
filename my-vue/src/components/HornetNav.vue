<template>
	<div class="nav-box">
		<ul class="nav-ul">
			<li class="nav-li1"><a href="javascript:;"><i></i> <br /> 找攻略 </a></li>
			<li class="nav-li2"><a href="javascript:;"><i></i> <br /> 看游记 </a></li>
			<li class="nav-li3"><a href="javascript:;"><i></i> <br /> 问达人 </a></li>
			<li class="nav-li4"><a href="javascript:;"><i></i> <br /> 结伴 </a></li>
			<li class="nav-li5"><a href="javascript:;"><i></i> <br /> 酒店 </a></li>
			<li class="nav-li6"><a href="javascript:;"><i></i> <br /> 旅行商城 </a></li>
			<li class="nav-li7"><a href="javascript:;"><i></i> <br /> 机票 </a></li>
			<li class="nav-li8"><a href="javascript:;"><i></i> <br /> 当地玩乐 </a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: "HornetNav",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.nav-box{
		padding: 0.05rem 0 .3rem;
		text-align: center;
		min-height: 1.5rem;
		width: 100%;
		display: flex;

	}
	.nav-ul{
		padding:0 0.05rem 0 0.07rem;
		float: left;
	}
	.nav-ul li{
		width: 0.9rem;
		height: 0.9rem;
		float: left;
	}
	.nav-ul li a{
		display: inline-block;
		padding-top:0.2rem ;
		font-size: 0.15rem;
	}
	.nav-ul i{
		display: inline-block;
		margin-left:0.05rem;
		width:0.48rem ;
		height: 0.48rem;
		background:url(../../static/img/nav-icon.png) no-repeat  ;
		background-size:2rem;
		margin-bottom: 0.05rem;
	}
	.nav-li2 i{
		background-position:0 -0.5rem ;			
	}
	.nav-li3 i{
		background-position:-1rem -0.5rem ;			
	}
	.nav-li4 i{
		background-position:-0.5rem -0.5rem ;			
	}
	.nav-li5 i{
		background-position:-0.5rem 0 ;			
	}
	.nav-li6 i{
		background-position:-1rem 0 ;			
	}
	.nav-li7 i{
		background-position:-1.5rem 0 ;			
	}
	.nav-li8 i{
		background-position:-1.5rem -0.5rem ;			
	}
	
	.nav-li1 a{
		color: #ff9d00;			
	}
	.nav-li2 a{
		color:#feca2b;			
	}
	.nav-li3 a{
		color: #42d6ba;			
	}
	.nav-li4 a{
		color: #f94a87;			
	}
	.nav-li5 a{
		color: #32a2f1;			
	}
	.nav-li6 a{
		color: #fd4e4e;			
	}
	.nav-li7 a{
		color: #acce0e;			
	}
	.nav-li8 a{
		color: #b160df;			
	}
</style>