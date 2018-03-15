<template>
	<div class="app">
		<!--头部-->
		<top></top>
		<!--sos`-->	
		<sos></sos>
		<!--blu-->
		<blu></blu>
		<!--itemcats-->
		<itemcats></itemcats>
		<!--feny-->
		<feny></feny>
	</div>
</template>

<script>
	import top from './top';
	import sos from './ddwl/sos'
	import blu from './ddwl/blu'
	import itemcats from './ddwl/itemcats'
	import feny from './ddwl/feny'
	

	export default{
		name:'Local',
		components:{
			top,
			sos,
			blu,
			itemcats,
			feny
			

		},
	}
</script>

<style scoped>
.app{
	background:#fff
}
</style>