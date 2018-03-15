<template>
	<div>
	<swiper :options="swiperOption" ref="mySwiper" id="slide">
	<swiper-slide>
		<a href="javascript:;">
		<img src="../../../static/img/wKgBZ1lQ4xCAN_0GAAGB1uhlaoU51.jpeg"/>
		</a>
	</swiper-slide>
	<swiper-slide>
		<a href="javascript:;">
			<img src="../../../static/img/wKgBs1hOf_GAdpB3AAF3xV1Qk4829.jpeg"/>
		</a>
	</swiper-slide>
	
	<swiper-slide>
		<a href="javascript:;">
			<img src="../../../static/img/wKgBs1hXpweAMBTIAAPqcgR5mVY25.jpeg"/>
		</a>
	</swiper-slide>

	</swiper>	
	</div>
</template>

<script>
	import'../../../static/css/swiper.min.css';  //引入swiper.min.css
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'blu',
		components: {
	      swiper,
	      swiperSlide
	    },
	    data (){
			return {
				swiperOption: {
		        	loop:true,				//循环
		        
			        autoplay: {
					    delay: 4000,
					    disableOnInteraction: false  //默认是true， 触碰或其他操作停止播放
					},
			        direction : 'horizontal',    /*滑动方向，可设置水平(horizontal)或垂直(vertical)*/
			      
		        }
			}
		}

	}
</script>

<style scoped>
	.banner{
		width:100%;
		height:1.2rem;
		background:pink;
	}
	#slide img{
		width: 100%;
		height: 100%;
	}
	
	.swiper-pagination-bullet-active{
		background: #f5ad1e;
	}

</style>