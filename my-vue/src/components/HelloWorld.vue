<template>
  <div class="hello">
    		<HornetHead></HornetHead>
    		<HornetSlider></HornetSlider>
  </div>
</template>

<script>
	import HornetHead from './HornetHead';
		import HornetSlider from './HornetSlider';
export default {
  name: 'HelloWorld',
  components: {
  	HornetHead,
  	HornetSlider
  },
  data () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
