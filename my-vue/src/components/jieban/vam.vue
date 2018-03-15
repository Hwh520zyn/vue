<template>
	<div>
	<ul class="oul">
	    <li>
	        <span><em>357152</em><br>个旅行计划</span>
	        <span><em>562616</em><br>人参与</span>
	        <span><em>11034</em><br>个目的地</span>
	    </li>
    </ul>
	</div>
</template>

<script>
	export default{
		name:'vam'
	}
</script>

<style scoped>
.oul{
	width:100%;
	height:1.1rem;
	text-align: center;
    color: #fff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background:url(../../../static/img/topNum-bg.jpg) no-repeat;
	background-size:100%;
}
.oul li{
	display: flex;
	width: 100%;
	justify-content: space-around;
}
.oul li span{
	height:0.52rem;
}
.oul span em {
    display: inline-block;
    margin-bottom: 10px;
    line-height: 0.3rem;
    font-style: normal;
    font-size: 0.3rem;
    font-family: Georgia;
    vertical-align: top;
    }
</style>