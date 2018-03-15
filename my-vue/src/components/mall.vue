<template>
	<div id="all">
		<top></top>
		<mall_nav></mall_nav>
		<mall_table></mall_table>
		<mall_chzh></mall_chzh>
		<mall_bk></mall_bk>
	</div>
</template>

<script>
	import top from './top'
	import mall_nav from './mall_nav'
	import mall_table from './mall_table'
	import mall_chzh from './mall_chzh'
	import mall_bk from './mall_bk'
	
	export default {
		name:"mall",
		components:{
			top,
			mall_nav,
			mall_table,
			mall_chzh,
			mall_bk
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	
</style>