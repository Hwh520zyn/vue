<template>
	<section>
		<a href="javescript:;" class="logo"></a>
		<ul class="nav-tab" >
			<li :class="{ active : show }" @click="showactive()">普通登录</li>
			<li >验证码登录</li>
		</ul>
		
		<form action="" method="post" class="frm">
			<input type="text" name="username" id="username" placeholder="您的邮箱/手机号"/>
			<input type="text" name="password" id="password"   placeholder="您的密码" />
		</form>
	</section>
	
</template>


<script>
	export default{
		name : "Login",
		data(){
			return {
				show : true
			}
		},
		methods : {
			showactive : function(){
				this.show=!show;
			}
		}
	}
</script>

<style scoped="scoped">
	section{
		clear: both;
		margin:0 0.09rem;
	}
	a.logo {
		display: block;
		width: 1rem;
		height: 0.3rem;
		background: url(../../static/img/logo2.png) no-repeat;
		background-size:1rem ;
		margin:0.2rem auto;
	}
	.nav-tab{
		display: table;
		width: 100%;
		height: 0.42rem;
		margin-bottom:0.3rem ;
	}
	.nav-tab li{
		width: 50%;
		display: table-cell;
		text-align: center;
		line-height: 0.42rem;
		font-size: 0.16rem;
		color: #999;
		border-top:2px solid #dadada;
		background: #fafafa;
	}
	.nav-tab .active{
		border-top: 2px solid #ffba33;
		color: #ffba33;
		background: #fff;
	}
	.frm input{
		width: 100%;
		height: 0.41rem;
		border:0;
		border:1px solid #dadada;
		text-indent: 0.1rem;
		font-size: 0.16rem;
		margin-top:-0.01rem;
		background:#fff;
		
	}
	.frm input:nth-child(1){
		border-radius:0.05rem 0.05rem 0 0 ;
	}
	.frm input:nth-child(2){
		border-radius:0 0 0.05rem 0.05rem ;
	}
</style>