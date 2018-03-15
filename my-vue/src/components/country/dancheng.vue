<template>

		<div class="form">
			<div class="tab">
			<a v-for="(item,index) in list" @click="show(index)" :style="{'color':activeindex===index?'#ff9d00':'','border-bottom':activeindex===index?'.02rem solid #ff9d00':''}">
			{{item.name}}
			
			</a>
			<!--<span>|</span>-->
			
			
	</div>
	<div class="tab-o">
	<div class="rowcity">
	        <a class="cell" href="#">
            <label>出发城市</label>
            <div class="city">北京</div>
	        </a>
	        <a class="cell"  id="a2" href="#">
            <label>到达城市</label>

            <div class="city">上海</div>
	        </a>
	        <a class="btn-o" href="#"></a>
        </div>
        <div class="row-date">
        	<a class="cell" href="#" id="cell-o">
            <label>去程日期</label>

            <div class="date">
            	03月14日
            	<span>周三</span>
            	
            </div>
            </a>
           
           </div>
               <a class="btn-search">搜索</a>
               </div>
               <cfanc class="tab-o" style="display: none;"></cfanc>
           </div>
</template>

<script>
	import cfanc from '../country/cfanc'
	export default {
		name: 'dancheng',
		components:{
			cfanc
		},
		data(){
			return{
				activeindex:"",
				list:[
					{name:"单程"},
					{name:"返程"}
					
				]
			}
		},
		methods:{
			show:function(n){
				this.activeindex=n;
				var oTab=document.getElementsByClassName("tab-o");
				for(var i=0;i<oTab.length;i++){
					oTab[i].style.display="none";
				}
				oTab[n].style.display="block";
			}
		}
			}
</script>

<style scoped>
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

.tab span{
	font-size: 17px;
    margin-top: 4%;
    color: #ccc;
}

.form{
    width: 100%;
    height: 2.8rem;
    margin: 0 auto;	
    background:#fff;
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
.cell{
	display: block;
	width: 15%;
	height:0.61rem;
	cursor: pointer;
	color:#333;
}
#cell-o{
	text-align: left;
	width:50%;
	border:0;
}
.cell:last-child{
	text-align: right;
	width:50%;
	border:0;
	
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
}
</style>