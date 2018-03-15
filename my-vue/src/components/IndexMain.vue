<template>
	<div class="main-box"  >
		<div class="main_hd">
			<h3>推荐攻略</h3>
		</div>

		<router-link to="/HornetDetail" class="link">
			<a   v-for="(item,index) in list" :key="item.id"     @click="aaa(index)"  :style="{'background' : activeindex === index ? '#ff990047' : '' }">
				<div class="title"> <span >{{item.title}}</span>
					<div class="tag"> <img :src="item.tag" alt="" /></div>
				</div>
				<dl class="clearfix">
					<dt ><img :src="item.img" v-lazy="item.img"/></dt>
					<dd class="clearfix">
						<div class="summary">
							{{item.content}}
						</div>
							<div class="info">
								<em class="watch">{{item.watch}}</em>浏览
								
								<div class="author" >
									<em class="author-name fl">{{item.author_name}}</em>
									<i class="author-img fl">
										<img :src="item.author_img" alt="" />
									</i>
									
									<div class="strategy-btn"  ><img :src="item.strategy_btn" alt=""/></div>
									<div class="question_btn" ><img :src="item.question_btn" alt=""/></div>
									<div class="tourist_btn"  ><img :src="item.tourist_btn" alt=""/></div>
								</div>
							</div>
						
						
					</dd>
				</dl>
			</a>
			
		</router-link>

	</div>
</template>

<script>
	import { Lazyload } from 'mint-ui';
	import axios from "axios";
	export default {
		name: "IndexMain",
		data() {
			return {
				activeindex:"", 
				list : []
			}
		},
		methods : {
			aaa:function(n){
           		 this.activeindex = n;
     		}
		},
		mounted() {
			axios.get("http://localhost:3000/indexMain")
			.then((res)=>{
				this.list=res.data;
			})
		}
	}
</script>

<style scoped="scoped">
	.main-box {
		width: 100%;
		min-height: 2rem;
	}
	
	.main_hd {
		width: 100%;
		height: 0.35rem;
		background: #f8f8f8;
	}
	
	.main_hd h3 {
		height: 0.35rem;
		font-weight: normal;
		text-align: center;
		line-height: 0.35rem;
		color: #999;
		font-size: 0.15rem;
	}
	
	.main_hd h3:before,
	.main_hd h3:after {
		width: 0.2rem;
		height: 0.16rem;
		display: inline-block;
		content: "";
		background: url(../../static/img/i_guidet.png) no-repeat;
		background-size: 0.1rem;
		vertical-align: middle;
	}
	
	.main_hd h3:before {
		background-position: 0 0.03rem;
	}
	
	.main_hd h3:after {
		background-position: 0.1rem -0.1rem;
	}
	
	.main-box .link {
		display: block;
		min-height: 1rem;
		padding-left: 0.2rem;
		background: url(../../static/img/line3.png) repeat-x bottom;
		background-size: 0.1rem;
	}
	
	.title {
		font-size: 0.18rem;
		color: #111;
		position: relative;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.title span{
		height: 0.4rem;
		line-height: 0.2rem;
		padding: 0.1rem 0 0.1rem 0;
		display: block;
		width: 80%;
		height: auto;
		word-wrap: break-word;
	}
	.tag {
		position: absolute;
		right: 0;
		top: 0.1rem
	}
	
	.tag img {
		width: 0.4rem;
		height: 0.2rem;
	}
	
	dl {
		padding-bottom: 0.13rem;
	}
	dt{
		float: left;
	}
	dl dt img {
		width: 1.3rem;
		height: 0.9rem;
	}
	dd{
		position: relative;
		font-size: 0.14rem;
		color: #999;
		
	}
	dd .summary{
		padding:0.03rem 0.1rem 0 0.1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;   
		-webkit-box-orient: vertical;
		line-height: 0.2rem;
		height:0.58rem;
	}
	.info{
		width: 1.9rem;
		height: 0.2rem;
		position: absolute;
		right: 0;
		bottom: 0;
		margin-right: 0.2rem;
		line-height: 0.2rem;
		font-size: 0.12rem;
	}
	.author{
		position: absolute;
		right: 0;
		top:0;
		vertical-align: middle;
	}
	.author-img img{
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		margin-left: 0.1rem;
		vertical-align: top;
	}
	
	.strategy-btn img{
		height: 0.21rem;
		padding-bottom:-0.1rem;
		position: absolute;
	}
	
	.question_btn img{
		height: 0.21rem;
		padding-bottom:-0.1rem;
		position: absolute;
	}
	
	.tourist_btn img{
		height: 0.21rem;
		line-height: 0.15rem;
		padding:0 0.02rem ;
	}
</style>