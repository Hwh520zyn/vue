<template>
	<div id="all">
		<h1>主题推荐</h1>
		<ul>
			<li v-for="item in list">
				<a href="">{{item}}</a>
			</li>			
		</ul>
		<div id="imgc">		
			<ol>
				<li v-for="item in imglist">
					<img :src="item"/>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	export default {
		name:"hotel_topic",
		data(){
			return{
				list:[
					"私人海滩",
					"周末好去处",
					"设计酒店",
					"超值酒店",
					"朝拜历史",
					"血拼购物"
				],
				imglist:[
					"../../static/img/img01.png",
					"../../static/img/img02.png",
					"../../static/img/img03.png",
					"../../static/img/img04.png",
					"../../static/img/img05.png",
					"../../static/img/img06.png"
				]
			}
		}
	}
</script>

<style scoped>
	#all{
		overflow: hidden;
		padding-left: .2rem;
		padding-bottom: .2rem;
	}
	h1{
		font-weight: normal;
		color: #474747;
		font-size: .24rem;
		line-height: .6rem;
	}
	li{
		float: left;
	}
	li a{
		color: #474747;
	}
	ul,ol{
		overflow: hidden;
	}
	ul li{
		width: 1rem;
		padding: .05rem 0;
		text-align: center;
		background: #f8f8f8;
		margin-right: .15rem;
		margin-bottom: .1rem;
		font-size: .16rem;
	}
	#imgc{
		width: 100%;
		overflow-y: hidden;
		overflow-x: auto;
	}
	ol{
		width: 300%;		
	}
	ol li img{
		display: inline-block;
		width: 1.5rem;
		height: 1rem;
		margin-right: .1rem;
	}
</style>