<template>
	<div class="top">
		<!--头部-->
		<atopo></atopo> 
		<!--hunt--> 	
		<ahunt></ahunt>
		<!--oul-->
		<aoul></aoul>
		<!--/footer-->
		<afoote></afoote>
	</div>
</template>
<script>
	import atopo from './atopo';  //引入头部
	import ahunt from './ahunt'; 
	import aoul from './aoul';
	import afoote from './afoote'; 
	export default {
		name: 'answer',
		components: {
			atopo,
			ahunt,
			aoul,
			afoote
		},
		data () {
			return {
				
			}
		}
	}
	
	</script>
	<style>

	</style>