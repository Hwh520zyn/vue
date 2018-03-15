<template>
	<index-dancheng></index-dancheng>
</template>

<script>
	import IndexDancheng from './country/dancheng.vue'
	export default{
		name:'cpanel',
		components:{
			IndexDancheng
		},

		}

	
</script>

<style>
.panel{
	width:100%;
	height:2.81rem;
	background: #fff;
}
.tab{
	width:100%;
	height:0.5rem;
	background:#fff;
	display: flex;
	justify-content: space-evenly;
}
.tab a{
	display: block;
	width: 15%;
	height:98%;
	display: flex;
	justify-content: center;
	align-items: center;
	color:#111;
	font-size:0.17rem;
	cursor: pointer;
    
}
.tab a:first-child{
	border-bottom: 1px solid #ff9d00;
}
.tab span{
	font-size: 17px;
    margin-top: 4%;
    color: #ccc;
}

.form{
    width: 92%;
    height: 2.2rem;
    margin: 0 auto;	
}
.rowcity{
	width:92%;
	height:0.62rem;
	margin:0 auto;
	margin-top:0.1rem;
	border-bottom: 1px solid #e5e5e5;
	margin-bottom:0.1rem;
	display: flex;
	justify-content: space-between;
	position: relative;
}
/*.cell{
	display: block;
	width:50%;
	height:0.61rem;
	cursor: pointer;
	color:#333;
}
.cell:first-child{
	width:15%;
	border-bottom:1px solid red;
}
.cell:last-child{
	text-align: right;
	width:30%;
}
#a2{
	text-align: right;
}

.city{
	font-size: 0.21rem;	
    color: #111;

}
.rowcity label{
	color:#999;
	font-size:0.12rem;
}
.btn-o{
	width: 0.32rem;
	height:0.32rem;
	position: absolute;
	top: 19%;
    left: 43%;
    background-size:0.24rem;
    background: url(../../static/img/flight-sprites3.png) no-repeat 0 0;
	background-size:1rem;
}
.row-date{
	display: flex;
	width:92%;
	height:0.6rem;
	margin:0 auto;
	border-bottom: 1px solid #e5e5e5;
    margin-bottom: 17px;
}
.date{
	font-size:0.18rem;
	margin-top:0.1rem;
}
.date span{
	font-size:0.12rem;
}
.btn-search{
    display: block;
    width:75.4%;
    height:0.45rem;
    line-height:0.45rem;
    background-color: #ff9d00;
    text-align: center;
    color: #fff;
    font-size: 18px;
    border-radius: 3px;	
	margin:0 auto;
}*/


</style>