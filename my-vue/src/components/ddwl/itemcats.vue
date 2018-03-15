<template>
		
		<div class="swiper-container">
		
		    <div class="swiper-wrapper">
		  
		     <div class="swiper-slide">
		     <a href="#" v-for="item in list">
		     <img :src="item.img" class="i1">
		     <p>{{item.name}}</p>
		     </a>
		     </div>
       		 <div class="swiper-slide">
       		 <a href="#" v-for="item in list">
		     <img :src="item.img" class="i1">
		     <p>{{item.name}}</p>
		     </a>
       		 </div>
		  

		    </div>
		    
		    
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    
		 
		</div>

</template>
<script>
import axios from 'axios';
	export default {
		name: "itemcats",
		data() {
			return {
				list:[]
			}
		},
		mounted() {
			axios.get("http://localhost:3000/itemcats")
			.then((res)=>{
				console.log(res);
				this.list = res.data;
//				console.log(this.list)
				// 在下次 DOM 更新循环结束之后执行延迟回调
	   			this.$nextTick(function(){
					var mySwiper = new Swiper ('.swiper-container', {
						pagination:{
								el:'.swiper-pagination'
						},
					}) 
	   			})
			})
		},
		
}
</script>
<style scoped>
.swiper-slide{
	width:100%;
	height:2.23rem;
	background:#fff;
}
.swiper-slide a {
    display: block;
    float: left;
   	width:0.88rem;
   	height:0.89rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    color:#474747;
   	
}
.swiper-slide a img{
	width:0.44rem;
	height:0.44rem;
}
.swiper-pagination-bullet-active  {
    opacity: 1;
    background: #ff9d00;

}
</style>