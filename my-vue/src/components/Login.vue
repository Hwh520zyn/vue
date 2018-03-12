<template>
	<section>
		<a href="javescript:;" class="logo"></a>
		
	</section>
	
</template>


<script>
	export default{
		name : "Login",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped="scoped">
	section{
		clear: both;
		margin:0 9px;
	}
	a.logo {
		display: block;
		width: 100px;
		height: 30px;
		background: url(../../static/img/logo2.png) no-repeat;
		background-size:100px ;
		margin:20px auto;
	}
</style>