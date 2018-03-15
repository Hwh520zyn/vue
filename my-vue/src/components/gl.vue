<template>
  <div>
    <top></top>
    <g_main></g_main>
    <goto></goto>
  </div>
</template>

<script>
	import top from './top'
	import g_main from './g_main'
	import goto from './goto'

export default {
  name: 'gl',
  components:{
  	top,
  	g_main,
  	goto
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
