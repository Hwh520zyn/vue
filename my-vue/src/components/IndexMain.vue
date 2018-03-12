<template>
	<div class="main-box">
		<div class="main_hd">
			<h3>推荐攻略</h3>
		</div>

		<a href="javascript:;" v-for="(item,index) in list" :key="item.id" >
			<div class="title"> <span >{{item.title}}</span>
				<div class="tag"> <img :src="item.tag" alt="" /></div>
			</div>
			<dl class="clearfix">
				<dt ><img :src="item.img"/></dt>
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

	</div>
</template>

<script>
	export default {
		name: "IndexMain",
		data() {
			return {
				list : [
							{ 
								title:" 三亚的正确打开方式——吃泡三亚" ,
								tag:"../../static/img/tag.png", 
								img:  "../../static/img/m1.jpeg", 
								content : "Hi~大家好，我是爱拉 去 三亚 ！仿佛动物迁徙一样，一到冬天北方人民都会不约而同的做出几乎同样的选择，那就是，挺近 三亚 ！", 
								watch:"24234", 
								author_name: "艾拉", 
								author_img : "../../static/img/author_img.jpeg" ,
								strategy_btn : "",
								question_btn: "",
								tourist_btn :""
							},
					
							{ 
								title:" 注意！花期提前！2018日本樱花最新预测" ,
								tag:"", 
								img:  "../../static/img/m2.jpeg", 
								content : "再过1周樱花就要开了，你能赶上花期吗？", 
								watch:"158745", 
								author_name: "", 
								author_img : "",
								strategy_btn : "../../static/img/gl.png",
								question_btn: "",
								tourist_btn :""
							},
							
							{ 
								title:"在最美的时光遇见你——青海甘肃6日自驾游" ,
								tag:"", 
								img:  "../../static/img/m3.jpeg", 
								content : "2016年6月，我18年的学生生涯正式结束，一想到以后苦逼的工作节奏，就想着必须抓紧最后的时间出去浪一浪。一开始我俩打算在川内自驾，想去色达，但苏苏说路很难走把我们给吓回来了。七八月恰逢青海最美的时候，而且很适合自驾，于是果断把目的地定在了青海。我太懒，这是我的第一篇游记，也是因为有朋友问我们要攻略，就索性写一篇，纪念学生时代最后的疯狂。", 
								watch:"103238", 
								author_name: "", 
								author_img : "",
								strategy_btn : "",
								question_btn: "../../static/img/wd.png",
								tourist_btn :""
							}
							
				]
			}
		},
		methods : {
			
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
	
	.main-box a {
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