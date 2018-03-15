<template>
	<div id="wrap">
		<div id="yj_list" v-for="item in list">
			<div class="left yj_l">
				<h3>{{item.dire}}</h3>
				<p>
					<img src="../../static/img/img07.jpeg"/>
					<span class="s1">一只疯子</span>
					<span class="s2">在</span>
					<span class="s3">西双版纳</span>
				</p>
				<p>
					<i></i>
					<span class="s4">44682</span>
					<i></i>
					<span class="s4">298</span>
				</p>
			</div>
			<div class="right y_r">
				<img :src="item.img" v-lazy="item.img"/>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:"yj_main",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios.get("http://localhost:3000/place")
			.then((res)=>{
				this.list=res.data;
			})
		}
	}
</script>

<style scoped>
	#yj_list{
		margin-top: .2rem;	
		overflow: hidden;	
	}
	.yj_l{
		width: 40%;
		margin-left:.15rem;
		border-bottom: .01rem solid #ccc;
		padding-bottom: .1rem;
	}
	.yj_l h3{
		font-weight: bold;
		width: 78%;
		font-size: .16rem;
		line-height: .25rem;
	}
	.yj_l p{
		margin-top: .1rem;
		overflow: hidden;
	}
	.yj_l p img{
		display: inline-block;
		width: .2rem;
		height: .2rem;
		border-radius: 50%;
		float: left;
		margin-right: .1rem;
	}
	.yj_l p span{
		display:block;
		float: left;
		font-size: .14rem;
	}
	.yj_l p .s1{		
		color: #666;
		width: .46rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-right: .03rem;
	}
	.yj_l p .s2{
		color: #666;
	}
	.yj_l p .s3{
		color: #ff9d00;
	}
	.yj_l p i{
		display: block;
		float: left;
		background: url(../../static/img/icon.png) no-repeat -.26rem 0;
		width: .2rem;
		height: .15rem;
		background-size: .6rem;
		margin-right: .05rem;
	}
	.yj_l p .s4{
		height: .15rem;
		line-height: .15rem;
		margin-right: .05rem;
	}
	.y_r{
		width: 50%;
	}
	.y_r{
		height: 1.3rem;
	}
	.y_r img{
		width: 100%;
		height: auto;
	}
</style>