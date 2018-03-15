<template>
	<div id="all">
		<h1 id="tit">酒店攻略</h1>
		<div id="jdgl">		
			<ol>
				<li v-for="item in imglist">
					<img :src="item.src"/>
					<h1>{{item.text}}</h1>
					<p>
						<span>日本</span>
						<span>24 评论</span>
						<span>26586 阅读</span>
					</p>
				</li>
			</ol>			
		</div>
		<p id="border"></p>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:"hotel_hotel",
		data(){
			return{
				imglist:[]
			}
		},
		mounted(){
			axios.get("http://localhost:3000/hotel")
			.then((res)=>{
				console.log(res)
				this.imglist=res.data;
			})
		}
	}
</script>

<style scoped>
	#all{
		overflow: hidden;
		padding-left: .2rem;
	}
	#tit{
		font-weight: normal;
		color: #474747;
		font-size: .24rem;
		line-height: .6rem;
	}
	li{
		float: left;
		margin-right: .15rem;		
	}
	li a{
		color: #474747;
	}
	ol{
		overflow: hidden;
	}
	#jdgl{
		width: 100%;
		overflow-y: hidden;
		overflow-x: auto;
	}
	ol{
		width: 600%;
		padding-bottom: .4rem;		
	}
	ol li img{
		display: inline-block;
		width: 2.8rem;
		height: 1.8rem;
		margin-bottom: .1rem;
	}
	li h1{
		width: 2.4rem;
		font-weight: bold;
		font-size: .2rem;
		line-height: .3rem;
		color: #474747;
	}
	li p{
		margin-top: .15rem;
		font-size: .14rem;
		color: #474747;
		font-weight: bold;
	}
	#border{
		width: 94%;
		height: .01rem;
		background: #ccc;
		margin-bottom: .2rem;
	}
</style>