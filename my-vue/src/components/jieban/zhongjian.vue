<template>
<div>
	<div class="list">
		<ul class="list-o">
		<li v-for="item in list">
		<a href="#">
			<div class="cover">
				<img :src="item.img" alt="" />
				<div class="title">
                <h3>{{item.dir}}</h3>
                <span>{{item.ri}}</span>
            	</div>
            	<span class="departure-date">09月22日 出发</span>
			</div>
			<div class="info">
            <span class="avatar">
            <!--<img src="../../../static/img/wKgBZ1n9cXmAQENnABW1REx5-4859.jpeg">-->
            	<img :src="item.ava" alt="" />
            </span>
            <span class="gender female"></span>
            <span class="name">{{item.name}}</span>
            <span class="level">{{item.level}}</span>
            <span class="location">{{item.loca}}</span>
            <p class="txt">{{item.txt}}</p>
        </div>
		</a>
		</li>
		
		</ul>
	</div>
</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'zhongjian',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios.get("http://localhost:3000/zhongjian")
			.then((res)=>{
				console.log(res)
				this.list=res.data;
			})
		}
	}
</script>

<style scoped>
.list{
    padding: 0.1rem 0 0 0.1rem;
}
.list-o{
	display: flex;
	padding-right: 10px;
    flex-wrap: wrap;
	justify-content: space-between;
}
.list li{
	width:48.67%;
	height:2.17rem;
	background:#fff;
	margin-bottom: 10px;
    flex-wrap: wrap;
    border: 1px solid #e6e5e5;
	
}
.list .cover {
    position: relative;
    box-sizing: border-box;
    min-height: 0.3rem;
}
.list .cover img{
	width:100%;
}
.title {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    padding: 0.13rem 0.15rem 0;
    font-size: 0.17rem;
    color: #fff;
    text-shadow: 0 0.02rem 0.04rem rgba(0,0,0,0.5);
    line-height: 0.2rem;
}
.title h3 {
    width: 100%;
    height: 0.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    box-sizing: border-box;
}
.list .departure-date {
    position: absolute;
    right: 0;
    bottom: 0.1rem;
    background-color: #41c6ad;
    height: 0.24rem;
    line-height: 0.24rem;
    color: #fff;
    font-size: 0.13rem;
    padding: 0 0.09rem 0 0.1rem;
    border-radius: 0.24rem 0 0 0.24rem;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
}
.info {
    padding: 0.22rem 0.1rem 0.13rem 0.15rem;
    box-sizing: border-box;
    position: relative;
}
.list .avatar {
    position: absolute;
    left: 0.15rem;
    top:-0.16rem;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    border: 0.01rem solid rgba(255,255,255,0.7);
}
.avatar img{
    max-width: 100%;
    border-radius: 50%;
}
.gender {
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    background: url(../../../static/img/sprites4.png) no-repeat 0 0;
    background-size: 100px;
    overflow: hidden;
    vertical-align: -0.02rem;
    position: absolute;
    left: 0.55rem;
    top: -0.06rem;
}
.name {
    display: block;
    height: 14px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 14px;
    color: #696969;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.level {
    font-size: 12px;
    color: #fa9f00;
}
.location {
    padding-left: 6px;
    font-size: 11px;
    color: #696969;
}
.txt {
    margin-top: 5px;
    font-size: 10px;
    color: #a4a4a4;
    line-height: 12px;
    height: 24px;
    overflow: hidden;
}

</style>