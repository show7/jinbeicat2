<template>
	<div>
		<div class='header'>
			<a href="#" onClick="javascript:window.history.back();return false;"><img src="../../../static/img/return.png" alt=""></a>
			<p>{{title}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:['title']
	}
</script>
<style scoped>
	.header{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: .863rem;
		background: #e71a19;
		color: #fff;
    	font-size: .38rem;
	}
	a{
		width: .253rem;
	    height: .4227rem;
	    float: left;
	    position: absolute;
	    left: .302rem;
	    top: 25%;
	}
</style>