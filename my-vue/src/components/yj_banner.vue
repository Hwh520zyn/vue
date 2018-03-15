<template>
	<div id="yjbanner_wrap">
		<div id="wrap">
			<p id="p_tit">
				<span>12</span>
				<span>
					<i>2018</i> 
					<i>MAR</i>
				</span>
				<span>蜂首纪念</span>
				<span>
					<b>历历在目</b>
				</span>
			</p>
			<div id="y_swiper">
				<swiper :options="swiperOption" ref="mySwiper" id="slide">
					<swiper-slide class="slide">
						<a href="javascript:;">
							<img src="../../static/img/slider2.jpeg"/>
						</a>
						<h1>这场奇幻的梦境里，遇见一颗孤独的心</h1>
						<p>我是xxx,我在xxx</p>
					</swiper-slide>
					<swiper-slide class="slide">
						<a href="javascript:;">
							<img src="../../static/img/slider1.jpeg"/>
						</a>
						<h1>这场奇幻的梦境里，遇见一颗孤独的心</h1>
						<p>我是xxx,我在xxx</p>
					</swiper-slide>
					<swiper-slide class="slide">
						<a href="javascript:;">
							<img src="../../static/img/slider3.jpeg"/>
						</a>
						<h1>这场奇幻的梦境里，遇见一颗孤独的心</h1>
						<p>我是xxx,我在xxx</p>
					</swiper-slide>		
				</swiper>
			</div>
			<div id="small">
				<img src="../../static/img/img05.jpeg"/>
				<img src="../../static/img/img05.jpeg"/>
				<img src="../../static/img/img05.jpeg"/>
			</div>
		</div>
	</div>
</template>

<script>
	
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:'yj_banner',
		components: {
	      swiper,
	      swiperSlide
	    },
		data (){
			return {
				swiperOption: {
		        	loop:true,						        
			        autoplay: {
					    delay: 5000,
					    disableOnInteraction: false 
					},
			        direction : 'horizontal', 
			        pagination: {
					      el: '.swiper-pagination',
					      clickable: true,	
					  },		          
		        }
			}
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	#wrap{
		width: 100%;
		height: 4.2rem;
		background: url(../../static/img/fs-bg.png) no-repeat center top;
		background-size: cover;
		padding: .2rem .1rem 0;
	}
	#p_tit{
		margin-bottom: .15rem;
	}
	#p_tit span{
		display: inline-block;
		color: #fff;
		font-size:.2rem;
		border-left: .01rem solid #fff;
		padding: 0 .05rem;
	}
	#p_tit span:last-child{
		padding-left: 1rem;
	}
	#p_tit span b{
		width: .6rem;
		height: .2rem;
		line-height: .2rem;
		text-align: center;
		font-size: .12rem;
		display: block;
		background: #000;
		border-radius: .5rem;
	}
	#p_tit span i{
		display: block;
		font-size: .12rem;
		line-height: .1rem;
	}
	.slide{
		width: 100%;
		height: 2.8rem;
		background: #fff;
		border-radius: .05rem;
		margin-top: .1rem;		
	}
	#slide img{
		width: 100%;
		height: 2rem;
		border-top-left-radius: .05rem;
		border-top-right-radius: .05rem;
	}
	.swiper-pagination-bullet-active{
		background: #f5ad1e;
	}
	.slide h1{
		width: 80%;
		margin: .15rem auto .1rem;
		font-size: .2rem;
		font-weight: normal;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.slide p{
		width: 100%;
		font-size: .14rem;
		text-align: center;
	}
	#small{
		text-align: center;
		margin-top: .1rem;
	}
	#small img{
		display: inline-block;
		width: .5rem;
		height: .5rem;
		border-radius: .1rem;
	}
</style>