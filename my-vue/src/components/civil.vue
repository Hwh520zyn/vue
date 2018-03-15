<template>
<div class="civil">
	<!--Ctop-->
	<Ctop></Ctop>
	<!--轮播-->
	<cban></cban>
	<!--cpanel-->
	<cpanel></cpanel>
	<!--footer-->
	<cfoot></cfoot>
</div>	
</template>

<script>
import Ctop from './Ctop';
import cban from './cban';
import cfoot from './cfoot';
import cpanel from './cpanel';

export default{
	name:"civil",
	components:{
		Ctop,
		cban,
		cfoot,
		cpanel
	},
	data(){
		return{
			
		}
	}
}
	
	
</script>

<style>
body{
	background:#edf1f3;
}
</style>