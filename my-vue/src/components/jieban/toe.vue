<template>
	<div>
		<div class="fixe">
			<div class="btng">
				<a class="btn-sort">排序</a>
				<a class="btn-add">发起结伴</a>
			</div>
		</div>
		
		<div class="hu">
		<a href="#" class="huangx"></a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'toe',
	}
</script>

<style>
.fixe{
	position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 6;
    width: 100%;
    height: 0.5rem;
    background-color: rgba(255,255,255,0.95);
    border-top: 1px solid rgba(0,0,0,0.1);
    box-sizing: border-box;
    padding: 0.1rem 0.15rem;
    text-align: center;
}
.btng{
	display: table;
    width: 100%;
}
.btn-sort{
	display: table-cell;
    width: 0.65rem;
    font-size: 0.12rem;
    color: #a4a4a4;
    box-sizing: border-box;
    height: 0.3rem;
    padding: 0.04rem 0;
    line-height: 0.22rem;
    text-align: left;
}
.btn-add{
	display: table-cell;
    box-sizing: border-box;
    height: 0.3rem;
    background-color: #f39c11;
    border-radius: 0.3rem;
    line-height: 0.3rem;
    color: #fff;
    font-size: 0.14rem;
}
.btn-sort:before {
    content: '';
    float: left;
    margin: 0.03rem 0.06rem 0 0;
    display: inline-block;
    width: 0.16rem;
    height:  0.16rem;
    background: url(../../../static/img/sprites4.png) no-repeat 0 -15px;
    background-size: 1rem;
 }
.btn-sort:after {
    content: '';
    float: right;
    margin-right: 0.07rem;
    height: 0.23rem;
    width: 0.01rem;
    background-color: #e5e5e5;
    overflow: hidden;
 }	
 .hu{
 	display: flex;
    margin-bottom: 10px;
    justify-content: center;
 	position: fixed;
    left: 0;
    bottom: 0.5rem;
    width: 100%;
    z-index: 89;
    text-align: center;
    padding-left: 0.1rem;
 }
 .huangx{
 	display:block;
    width: 1.5rem;
    height: 0.63rem;
    background: url(../../../static/img/wKgBEFqYuFCAL7WIAABuDX0wqmk924.png)no-repeat;
    background-size: 1.5rem;
 }   
	
	
</style>