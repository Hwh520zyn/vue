<template>
	<div>
			<section>
				<a href="javescript:;" class="logo"></a>
				<ul class="nav-tab" >
					<li :class="{ active : show }" @click="show = !show">普通登录</li>
					<li >短信验证码登录</li>
				</ul>
				
				<form action="/" method="post" class="frm">
					<!--文本框-->
					<div class="border-inp">
						<p  ><input type="text" name="username" id="username" placeholder="用户名"/></p>
						<p><input type="password" name="password" id="password"   placeholder="密码" /></p>
					</div>
					<!--忘记密码-->
					<div class="fotgetPsw"><a href="javascript:;">忘记密码 ?</a></div>
					</form>
					<!--按钮-->
					<div class="btn_box">
						<button class="login_btns" @click="login()">登录</button>
						<router-link to="/Regist"><button class="regist_btns">快速注册</button></router-link>
					</div>
				
		</section>
		<!--其他方式登录-->
				<div class="othLogin-Box">
					<div class="othLogin_tit"><p class="othLogin_tit_txt">使用第三方账号登录</p></div>
					<ul class="way">
						<li class="xl"><a href="javascript:;"><i></i><br/>新浪微博</a></li>
						<li class="qq"><a href="javascript:;"><i></i><br/>QQ登录</a></li>
					</ul>
					
				</div>
		
		
	</div>
	
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
			login : function(){
				var username=$("#username").val();
				var psw = $("#password").val();
				for( var i=0; i<this.$store.state.users.length; i++ ){
						var um=this.$store.state.users[i].username;
						var pw=this.$store.state.users[i].psw;
						if( username=="" || psw=="" ){
							alert("请输入账号或密码");
							break;
						}
						if( username==um  &&  psw==pw ){
							alert("登录成功");
							location.href="/";
							$(".login").innerText="um"
						}
						
				}
			}
		}
		
	}
</script>

<style scoped="scoped">
	html,body{
		width: 100%;
	}
	section{
		clear: both;
		margin:0 0.09rem;
	}
	/*logo*/
	a.logo {
		display: block;
		width: 1rem;
		height: 0.3rem;
		background: url(../../static/img/logo2.png) no-repeat;
		background-size:1rem ;
		margin:0.2rem auto;
	}
	/*登录框*/
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
	.border-inp{
		border:1px solid #dadada;
		border-radius: 0.03rem;
	}
	.border-inp p{
		border-bottom: 1px solid #dadada;
		background: #f90;
	}
	.border-inp p:nth-child(2){
		border-bottom: 0;
	}
	.frm p input{
		width: 100%;
		height: 0.41rem;
		border:0;
		text-indent: 0.1rem;
		font-size: 0.16rem;
		color:#ccc;
	}
	input::-webkit-input-placeholder{
   		 color: #ccc;
   		 opacity:1;
	}
	.fotgetPsw{
		text-align: right;
	}
	.fotgetPsw a{
		font-size: 0.12rem;
		color: #999;
	}
	
	.btn_box button{
		margin-top: 0.1rem;
		height: 0.34rem;
		width: 100%;
		border:0;
		font-size:0.15rem ;
		border-radius: 0.03rem;
	}
	.login_btns{
		margin-top:0.1rem ;
		background: #ffba33;
		border:1px solid #d8b165;
		color: #fff;
	}
	.btn_box .regist_btns{
		border:1px solid #ffba33;
		color: #ffba33;
		background-color:#fff ;
	}
	
	/*其他方式登录*/
	.othLogin-Box{
		width: 100%;
		margin-top:0.4rem;
	}
	.othLogin_tit{
		height: 0.25rem;
		border-top: 0.01rem solid #ccc;
		position: relative;
	}
	.othLogin_tit_txt{
		display: inline-block;
		position: absolute;
		top:-0.1rem;
		left: 50%;
		transform: translateX(-50%);
		color: #ccc;
		background: #fff;
	}
	/*方式*/
	.way{
		width: 100%;
		display: table;
	}
	.way li{
		display: table-cell;
		width:50% ;
		text-align: center;
		
	}
	.way li a{
		display: block;
		font-size: 0.14rem;
		color: #666;
		border-radius: 0.05rem;
		margin:0 0.15rem;
		background: #f3f3f3;
		border:1px solid #e6e5e5;
		padding: 0.1rem 0;
		
	}
	.way li i{
		display: inline-block;
		margin: 0 auto;
		width: 0.4rem;
		height: 0.3rem;
		background: url(../../static/img/connect_ico.png) no-repeat 0.05rem 0; 
		background-size:1.5rem ;
	}
	.way .qq i{
		background-position: -0.52rem 0;
	}
</style>