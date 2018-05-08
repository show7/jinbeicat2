<template>
  <div id="app">
    <router-view/>
    <loading></loading>
  </div>
</template>

<script>
import loading from '@/components/common/loading/loading'
export default {
  	name: 'App',
	components:{
		loading
	}
}
</script>

