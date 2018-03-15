<template>
	<div id="com_top">
		<p id="s_p">
			<input type="text" id="sear" placeholder="搜索目的地" />
			<img src="../../static/img/i_search.png" id="s_f"/>
		</p>
		<div id="banner">
			<p>
				杏花春雨不只在江南，2018新疆杏花旅游攻略
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"g_main"
	}
</script>

<style scoped>
	#s_p{
		padding: 0 .15rem;
		position: relative;
	}
	#sear{
		background: #f2f2f2;
		border: 0;
		width: 100%;
		margin: .1rem 0;
		text-align: center;
		height: .25rem;
		line-height: .25rem;
		font-size: .12rem;
		color: #333;
	}
	#s_f{
		position: absolute;
		width: .15rem;
		height: .15rem;
		left: 37%;
		top: 0.16rem;
	}
	#banner{
		width: 100%;
		height: 1.5rem;
		background: url(../../static/img/banner.jpeg) no-repeat center;
		background-size: cover;
	}
	#banner p{
		/*width: 100%;*/
		height: .08rem;
		font-size: .18rem;
		color: #fff;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 0rem .4rem .35rem .1rem;
		background: rgba(0,0,0,0.15);
		position: relative;
		top: 1.08rem;
	}
	#banner p:after{
		content: "";
		display: block;
		width: .15rem;
		height: .2rem;
		background:url(../../static/img/i_index.png) no-repeat;
		background-size: .8rem;
		position: relative;
		top: -.22rem;
		left: 100%;				
	}
</style>