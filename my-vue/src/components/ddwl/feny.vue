<template>
	<div>
	<div class="mddnav">
	<div class="maincats">
        <a href="javascript:void(0);" class="cur">
        	<i class="i1"></i>
        	<p>热门</p>
        </a>
        <a href="javascript:void(0);" class="">
        	<i class="i2"></i>
        	<p>东南亚</p>
        </a>
        <a href="javascript:void(0);" class="">
        	<i class="i3"></i>
        	<p>欧美澳</p>
        </a>
        <a href="javascript:void(0);" class="">
        	<i class="i4"></i>
        	<p>国内</p>
        </a>
    </div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'feny',
	}
</script>

<style scoped>
.mddnav{
	width:100%;
	height:2.13rem;
	background:pink;

}
.maincats{
	width:100%;
	height:0.59rem;
	background:papayawhip;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
</style>