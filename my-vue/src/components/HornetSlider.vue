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
					      type:'custom',
					         renderCustom: function (swiper, current, total) {
					            var customHtml = "";  
				                for(var i = 0; i <total; i++) {  
				                    //判断哪个分页器此刻应该被激活  
				                    if(i ==( current-1 )) {  
				                        customHtml += `<span class="swiper-pagination-customs  swiper-pagination-customs-active"></span>`;  
				                    } else {  
				                        customHtml += `<span class="swiper-pagination-customs"></span>`;  
				                    }  
				                }  
				                return customHtml;  
				                mySwiper.pagination.render()
						      }
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

	
	/*#slider-img img{
		width:4rem;
	}*/
	.swiper-pagination-custom{
		display: inline-block;
        width: 100%;  
        height: 0.05rem;
        background: #f90;
	}
	.swiper-pagination-customs{
		display: inline-block;  
		width: 0.6rem;  
        height: 0.2rem;  
        background:#f90;  
	}
	.swiper-pagination-customs-active{
		 opacity: 1;  
         background-color: #F78E00;  
	}
</style>
