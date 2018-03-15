<template>
		<div class="go">
		<div class="destination">
		<span class="s1" v-for="(item,index) in list" @click="show(index)" :style="{'color':activeindex===index?'#ff9d00':''}">
			{{item.name}}
		<mdi></mdi>
		</span>
		</div>
		<div class="destination-o">
		<span v-for="(item,index) in list1" @click="show(index)" :style="{'color':activeindex===index?'#ff9d00':''}">
			{{item.name}}
		</span>
		</div>

		
	</div>
</template>

<script>
	import mdi from '../jieban/mdi'	
	export default{
		name:'mdd',
		components:{
			mdi
		},
		data(){
			return{
				activeindex:"",
				list:[
					{name:"目的地"},
				],
				list1:[
					{name:"全部出发时间"}
				]
			}
		},
		methods:{
			show:function(n){
				this.activeindex=n;
				var oTab=document.getElementsByClassName("destination");
				for(var i=0;i<oTab.length;i++){
					oTab[i].style.display="none";
				}
				oTab[n].style.display="block";
			}
		}
	}
</script>

<style>
	.go{
	width:100%;
	height:0.44rem;
	border-bottom: 1px solid #e2e2e2;
    background-color: #fcfcfc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.destination{
	width:50%;
	height:0.29rem;
	text-align: center;
	line-height:0.44rem;
	font-size: 0.15rem;
    color: #a4a4a4;
    cursor: pointer;
    line-height: 0.3rem;
    border-right: 1px solid #ccc;
}
.destination:last-child{
    border-right:none;
	
}
.destination:after{
	content: '';
    position: absolute;
    left: 42%;
    top: 45%;
    margin-top: -9px;
    border-left: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    width: 9px;
    height: 9px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
}
.destination-o{
	width:50%;
	height:0.29rem;
	text-align: center;
	line-height:0.44rem;
	font-size: 0.15rem;
    color: #a4a4a4;
    cursor: pointer;
    line-height: 0.3rem;
    border-right: 1px solid #ccc;
}
.destination-o:after{
	content: '';
    position: absolute;
    right: 5%;
    top: 45%;
    margin-top: -9px;
    border-left: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    width: 9px;
    height: 9px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
}
	
</style>