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
		    	
		    }
		  }
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
