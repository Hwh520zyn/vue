<template>
	<ul class="oul">
		<li v-for="item in list">
			<a href="#">
				<h2>{{item.name}}</h2>
				
				<div CLASS="clearfix">
					<div class="oul-img">
						<p>
							<img src="../assets/wKgBm031mYT48UnlAAA459674pQ62.jpeg" alt="" />
							
						</p>
						<span>小贝</span>
						
					</div>
					
					<div class="ans-nr">
						<div class="clearfix-I">
							<div class="pic">
								<!--			<img v-lazy="item">-->
								<img src="../assets/wKgBZ1mbnf2AOnOPAATyC9z1Q1E49.jpeg"/>
							</div>
							<p>
								{{item.imageUrl}}
							<!--先说一个最近很火的摩洛哥吧：
								【摩洛哥】免签中国驻摩洛哥大使馆5月31日向新华社证实，自2016年6月...-->
							</p>
						</div>
					</div>
					
					<div class="clearfix-T">
						<span class="fl-l">中国</span>
						<span class="fl-r">
							<b>912705</b>浏览
							<b>42</b>回答
							<b><em>497</em></b>
							<em>顶</em>
						</span>
					</div>
					
				</div>
			</a>
		</li>

	</ul>
</template>

<script>
import axios from 'axios'
export default{
	name:"aoul",
	data(){
		return{
			list:[]
		}
	},
	mounted(){
		axios.get('../../static/json/index.json')
		.then((res)=>{
			this.list=res.data.restaurant.billboards;
//     				 console.log(res.data.restaurant.billboards);//开发阶段
})
	}
	
}
</script>

<style>
/*oul*/
.oul{
	width:100%;
	background: #f1f1f1;
}
.oul li{
	margin-bottom: 10px;
	background: #FFF;
	padding: 14px 4% 18px 4%;
}
.oul h2{
	width:100%;
	height:0.42rem;
	font-size: 19px;
	font-weight: normal;
}
.oul a{
	color: #474747;
}
.oul-img{
	float: none;
	height:0.2rem;
	margin: 10px 0;
}
.oul-img p {
	float:left;
	width:0.2rem;
	height:0.2rem;

}
.oul-img p img{
	border-radius: 50%;
	width:0.2rem;
	height:0.2rem;
	
}
.oul-img span{
	float: left;
	font-size: 0.14rem;
	color: #666;
	display: block;
	line-height: 0.2rem;
	margin-left: 0.1rem;
}
.ans-nr{
	display: flex;
	justify-content: space-between;
}
.pic{
	width:37.34%;
	
}

.pic img{
	width:100%;
	height:100%;
}
.clearfix-I{
	display: flex;
	justify-content: space-between;
}
.clearfix-I p{
	width:58.66%;
	height:0.99rem;
	font-size: 0.16rem;
	line-height: 26px;
	overflow: hidden;

	
}

.clearfix-T{
	width:100%;
	height:0.15rem;
	line-height:0.15rem;
	color:#999;
	font-size:0.15rem;
	margin-top: 0.1rem;
	display: flex;
	justify-content: space-between;
}
.fl-r em{
	color:#ff9d00;
}

</style>