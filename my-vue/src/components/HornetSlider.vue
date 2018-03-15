<template>
	<div>	
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in list"><img :src="item.src" alt="" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>


<script>
	export default{
		name : "HornetSlider",
		data (){
			return {
				list:[
					{ "src": "../../static/img/slider2.jpeg" },
					{  "src":"../../static/img/slider1.jpeg" },
					{  "src":"../../static/img/slider3.jpeg" }
				],
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
		},
		mounted () {
				this.$nextTick(function(){
					var mySwiper = new Swiper ('.swiper-container', {
					    loop: true,
					    // 如果需要分页器
					    pagination: {
					      el: '.swiper-pagination',
					    },
				        autoplay: {
						    delay: 3000,
						    disableOnInteraction: false  //默认是true， 触碰或其他操作停止播放
						},
				        direction : 'horizontal',    /*滑动方向，可设置水平(horizontal)或垂直(vertical)*/
				        pagination: {
						      el: '.swiper-pagination',
						      clickable: true,		//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
						  },
					})       
				})
  	    },
		
	}
</script>

<style scoped="scoped">
	.swiper-slide img{
		width: 100%;
		height: 2rem;
		margin-top: 0.1rem;
	}
</style>
