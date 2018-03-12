<template>
	<swiper :options="swiperOption" ref="mySwiper" id="slide">
				<swiper-slide  ><a href="javascript:;"><img src="../../static/img/slider2.jpeg"/></a></swiper-slide>
				<swiper-slide  ><a href="javascript:;"><img src="../../static/img/slider1.jpeg"/></a></swiper-slide>
				<swiper-slide  ><a href="javascript:;"><img src="../../static/img/slider3.jpeg"/></a></swiper-slide>
		<!--分页器-->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>


<script>
	import'../../static/css/swiper.min.css';  //引入swiper.min.css
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name : "HornetSlider",
		components: {
	      swiper,
	      swiperSlide
	    },
		data (){
			return {
				swiperOption: {
		        	loop:true,				//循环
		        
			        autoplay: {
					    delay: 3000,
					    disableOnInteraction: false  //默认是true， 触碰或其他操作停止播放
					},
			        direction : 'horizontal',    /*滑动方向，可设置水平(horizontal)或垂直(vertical)*/
			        pagination: {
					      el: '.swiper-pagination',
					      clickable: true,		//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
					  },
		          
		        }
			}
		}
		
	}
</script>

<style scoped="scoped">
	#slide img{
		width: 100%;
		height: 2rem;
		margin-top: 0.1rem;
	}
	
	.swiper-pagination-bullet-active{
		background: #f5ad1e;
	}
	/*#slider-img img{
		width:4rem;
	}*/
	
</style>
