<template>
		<head class="head-box">
			<!--logo标志-->
			<div class=""><img src="../../static/img/logo2.png" alt="出错了" class="logo-top"  /></div>
			<!--搜索框-->
			<div class="search-box ">
				<form action="" class="frm">
					<input type="text" class="sear-txt" placeholder="搜索目的地/攻略/游记"/>
					<button class="sear-sub"></button>
				</form>
			</div>
			<!--登录按钮-->
			<div class="login-box">
				
					<router-link to="/Login" id="login" class="login">登录</router-link>	

					<!--登录成功的默认头像-->
					<span class="login-ok-default"><a href="javascript:;"><img src="../../static/img/login-ok-default.jpeg" alt="" /></a></span>
			</div>	
		</head>
</template>


<script>
	export default {
		name: "HornetHead",
		data : function(){
			return {
				
			}
		}
	}
</script>
<style scoped="scoped" >

	/* head */
	.head-box{
		display: flex;
		padding:  0.1rem 0 0 0.1rem;
	}
	/*head-logo*/
	.logo-top{
		width: 0.81rem;
		height: 0.21rem;
		margin-right: 0.1rem;
		margin-top:0.03rem
	}
	/*head-search*/
	.search-box input,button{
		border:0;
		line-height: 0.25rem;
		background:#f3f3f3 ;
		outline: 0;
		overflow: hidden;
	}
	.frm{
		display: flex;
	}
	.sear-txt{
		width:1.8rem;
		border-radius: 0.3rem 0 0 0.3rem;
		padding-left: 0.1rem;
		font-size: 0.12rem;
	}
	.sear-sub{
		width: 0.3rem;
		border-radius:0 0.3rem 0.3rem 0 ;
		background:#f3f3f3  url(../../static/img/btn_search2.png) no-repeat 0 0.05rem;
		background-size: .15rem;
		margin-left: -1px;
	}
	/*loginbox*/
	.login-box{
		font-size: 0.13rem;
		padding-left: 0.2rem;
		position: relative;
		padding-top: 0.02rem;
	}
	.login {
		color: #f90;
	}
	.login-ok-default{
		position: absolute;
		top:0;
		right:0.03rem;
		display: none;
	}
	.login-ok-default img{
		border-radius: 50%;
		
	}

</style>