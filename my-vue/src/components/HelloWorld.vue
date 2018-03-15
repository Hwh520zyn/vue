<template>
  <div class="hello">
  				 <!--头部-->
    		<HornetHead></HornetHead> 
    			 <!--轮播-->
    		<HornetSlider></HornetSlider>
    		   <!--nav-->
    		<HornetNav></HornetNav>   
    			 <!--内容-->
    		<IndexMain></IndexMain>
    		<div id="backTop" @click="backTop()"></div>
  </div>
</template>

<script>
		import HornetHead from './HornetHead';  //引入头部
		import HornetSlider from './HornetSlider'; //引入轮播
		import HornetNav from './HornetNav'; //引入nav
		import IndexMain from './IndexMain'; //引入首页内容
		export default {
		  name: 'HelloWorld',
		  components: {
		  	HornetHead, //注册头部
		  	HornetSlider,
		  	HornetNav,
		  	IndexMain
		  },
		  data () {
		    return {
		    	scroll:""
		    }
		  },
		  methods:{
		  	backTop:function(){
		  		$("html,body").animate({ "scrollTop":0 },100);
		  	},
		  	menu (){
		  		this.scroll=document.body.scrollTop || document.documentElement.scrollTop;
		  		if( this.scroll>200 ){
		  			$("#backTop").css({ "display":"block" });
		  		}else{
		  			$("#backTop").css({ "display":"none" });
		  		}
		  	}
		  },
		  mounted(){
		  	window.addEventListener("scroll",this.menu)
		  }
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		#backTop{
			width: 0.4rem;
			height: 0.4rem;
			background: url(../../static/img/backtop.png) no-repeat;
			background-size:0.35rem ;
			position: fixed;
			right: 0;
			bottom: 0.6rem;
			display: none;
		}
</style>
