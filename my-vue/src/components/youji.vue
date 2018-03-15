<template>
  <div>
    <top></top>
    <yj_banner></yj_banner>
    <yj_main></yj_main>
  </div>
</template>

<script>
	import top from './top'
	import yj_banner from './yj_banner'
	import yj_main from './yj_main'

export default {
  name: 'youji',
  components:{
  	top,
  	yj_banner,
  	yj_main
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
