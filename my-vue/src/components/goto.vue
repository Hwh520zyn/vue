<template>
	<div id="com_top">
		<div class="tit">
			<h1>热门目的地</h1>
			<p>最受大家喜欢的目的地推荐</p>
		</div>
		<div class="state">
			<div class="s_wrap">
				<p class="s_list">
					<a v-for="(item,index) in list" @click="show(index)" :style="{'color':activeindex===index?'#ff9d00':'','border-bottom':activeindex===index?'.02rem solid #ff9d00':''}">
						{{item.name}}
						<i></i>
					</a>
				</p>
			</div>
			<div class="list">
				<guonei class="tab" style="display: block;"></guonei>
				<gat class="tab"></gat>
				<rihan class="tab"></rihan>
				<guonei class="tab" style="display: block;"></guonei>
				<gat class="tab"></gat>
				<rihan class="tab"></rihan>
				<gat class="tab"></gat>
			</div>			
			<p class="pp">
				<a href="">更多目的地</a>
			</p>
		</div>
	</div>
</template>

<script>
	import guonei from './country/guonei'
	import gat from './country/gat'
	import rihan from './country/rihan'
	export default {
		name:"goto",
		components:{
			guonei,
			gat,
			rihan
		},
		data(){
			return{
				activeindex:"",
				list:[
					{name:"国内"},
					{name:"港澳台"},
					{name:"日韩"},
					{name:"东南亚"},
					{name:"南亚 西亚"},
					{name:"欧洲 美洲"},
					{name:"澳洲 非洲"}
				]
			}
		},
		methods:{
			show:function(n){
				this.activeindex=n;
				var oTab=document.getElementsByClassName("tab");
				for(var i=0;i<oTab.length;i++){
					oTab[i].style.display="none";
				}
				oTab[n].style.display="block";
			}
		}
	}
</script>

<style scoped>
	#com_top{
		/*padding: 0 .15rem;*/
	}
	.tit{
		text-align: center;
		padding: .3rem 0 .15rem;
		border-bottom: .01rem dotted #E3E3E3;
		position: relative;
		margin: 0 .15rem;
	}
	.tit h1{
		font-size: .2rem;
	}
	.tit p{
		color: #999;
		line-height: .3rem;
	}
	.tit h1:after{
		content: "";
		display: block;
		width: .2rem;
		height: .22rem;
		background:url(../../static/img/i_index.png) no-repeat 0 -.2rem;
		background-size: .8rem;
		position: absolute;
		left: 67%;
		top:.33rem;
	}
	.s_wrap{
		width: 100%;
		overflow: hidden;
		overflow-x: auto;
	}
	.s_list{
		width: 200%;
	}
	.s_list a{
		display: inline-block;
		color: #696969;
		font-size: .16rem;
		padding: .15rem 0;
		margin-right: .35rem;
	}
	.s_list a i{
		display: inline-block;
		width: 0;
		height: .1rem;
		border: .01rem solid #ddd;
		position: relative;
		left: .2rem;
	}
	.s_list a.active{
		border-bottom: .02rem solid #ff9d00;
		color: #ff9d00;
	}
	
	.state .pp{
		margin: 0 auto;
		width: 1.8rem;
		height: .4rem;
		border: .01rem solid #ff9d00;
		text-align: center;
		line-height: .4rem;
		margin-bottom: .2rem;
	}
	.state .pp a{
		color: #ff9d00;
	}
	.state{
		padding: 0 .15rem;
		border-bottom: .01rem solid #E3E3E3;
	}
	.list{
		height: 2.7rem;
		overflow: hidden;
	}
	
</style>