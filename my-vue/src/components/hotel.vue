<template>
  <div class="all">
    <top class="chil"></top>
    <hotel_sear class="chil"></hotel_sear>
    <hotel_san class="chil san"></hotel_san>
    <hotel_topic class="chil"></hotel_topic>
    <hotel_hotel class="chil hotel"></hotel_hotel>
  </div>
</template>

<script>
	import top from './top'
	import hotel_sear from './hotel_sear'
	import hotel_san from './hotel_san'
	import hotel_topic from './hotel_topic'
	import hotel_hotel from './hotel_hotel'
	
	
export default {
  name: 'hotel',
  components:{
  	top,
  	hotel_sear,
  	hotel_san,
  	hotel_topic,
  	hotel_hotel
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.all{
		background: #f8f8f8;
		width: 100%;
		height: 100%;
	}
	.chil{
		background: #fff;
	}
	.san{
		margin: .1rem 0;
	}
	.hotel{
		margin-top: .1rem;
	}
</style>
