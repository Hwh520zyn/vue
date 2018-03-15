<template>

	<!--hunt-->
	<div class="hunt">
		<form>
			<div class="hout-O">
				<i></i>
			</div>
			<div class="hunt-T">
				<input type="text" />
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'ahunt',
	
}
</script>

<style>


/*hunt*/
.hunt{
	width:100%;
	height:0.51rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.hunt form{
	width:92%;
	height:0.31rem;
	display: flex;
	justify-content: space-between;
	background-color: #f0f0f0;
}

.hout-O{
	width: 0.37rem;
	height: 0.31rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size:0.18rem;
}
.hout-O i{
	width:0.18rem;
	height:0.18rem;
	background: url(../assets/ico5.png) 0 0 no-repeat;
	display: block;
	background-size: 18px;
}
.hunt-T{
	width:90.13%;
	height:100%;
}
.hunt-T input{
	width:100%;
	height:100%;
	border:none;
	background:none;
	color: #666;
	border-radius: 4px;
}
</style>