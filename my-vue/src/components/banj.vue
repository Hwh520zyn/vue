<template>
	<div>
		<!--头部-->
		<top></top>
		<!--选项卡-->
		<bfilter></bfilter>
		<!--vam-->
		<vam></vam>
		<!--content-->
		<zhongjian></zhongjian>
		<!--toe-->
		<toe></toe>
	</div>
</template>

<script>
	import top from './top';
	import bfilter from './jieban/bfilter';
	import vam from './jieban/vam';
	import zhongjian from './jieban/zhongjian';
	import toe from './jieban/toe';

	
	export default{
		name:'banj',
		components:{
			top,
			bfilter,
			vam,
			zhongjian,
			toe,

		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>

</style>