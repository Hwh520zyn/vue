<template>
	<div id="box">
		<DetailMain></DetailMain>
	</div>
</template>

<script>
	import DetailMain from './DetailMain'; 
	export default{
		name : "Detail",
		components:{
			DetailMain
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	#box{
		width: 100%;
		height: 100%;
		background:#fafbfd url(../../static/img/yline.png) repeat-y right 0;
		background-size:0.05rem ;
		overflow: hidden;
		font-size: 0.12rem;
	}
</style>