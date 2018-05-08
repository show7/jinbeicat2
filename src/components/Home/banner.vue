<template>
	<div>
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    	<div class="swiper-slide" v-for ='url in imgarry' :style='{background:"url("+url.imagePath+")"}'>
		    		<a :href="url.linkUrl"></a>
		    	</div>
		  </div>
		  <div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
import Swiper from '../../../static/js/swiper.min.js'
import '../../../static/css/swiper.min.css'
	export default{
		data(){
			return{

			}
		},
		props:{
			imgarry:{
				type:Array,
				return:[]
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,//可选选项，自动滑动
				pagination: {
					el: '.swiper-pagination',
				},
				paginationClickable: true,
                autoplayDisableOnInteraction: false,
                speed: 600,
                autoplay: 2000,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
			})
		}
	}
</script>
<style scoped>
	.swiper-slide{
		width: 100%;
		height: 4rem;
		background-repeat:no-repeat !important;
		background-position: center !important;
		background-size: 100% 100% !important;
	}
	.swiper-pagination-bullet-active{
		opacity: 1;
		background:#fff ;
	}
	a{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}
</style>