<template>
	<div class='content'>
		<div class='box'>
			<router-link :to='{name:"tab1"}' tag='div' exact replace>
				<div>金贝零钱</div>
			</router-link >
			<router-link :to='{name:"tab2"}' tag='div'  replace>
				<div>金贝定期</div>
			</router-link >
		</div>
		<router-view></router-view>
		<footerNav></footerNav>
	</div>
</template>
<script>
import footerNav from '@/components/common/footer.vue'

import { mapState,mapActions } from 'vuex'

	export default{
		data(){
			return{
				showpage:0,
				size:10,
				pageNo:1,
				markListArr:[],
				loadingMores:true,
				
			}
		},
		components:{
			footerNav,
			// loadingMore,
			// tabList1
		},
		mounted(){
			// this.tab2(this.size,this.pageNo)
			console.log(this.markListArr)
			
		},
		methods:{
			...mapActions(['getmarkList']),
			
			
		},
		computed:{
			...mapState({
				token:state=>state.login.token
			})//拿到vuex中的登陆状态
		}




	}
</script>
<style scoped>
	.content{
		margin-bottom: 0.4227rem;
	}
	.box{
		display: flex;
		justify-content: space-around;
	}
	.box>div{
		display: flex;
		align-items: center;
		justify-content: center;
		flex:1;
		color: #333;
    	font-size: .332rem;
    	background:#fff;
    	border-bottom:2px solid transparent;
		/*border-bottom: 2px solid red;*/
	}
	.box>div:first-child>:first-child{
		border-right: 1px solid red;
	}
	.box>div>div{
		display: flex;
		align-items: center;
		justify-content: center;
		flex:1;
		margin: .302rem 0;
	}
	/*.page{
		background-color: rgb(228,228,228);
		padding:0.02rem 0 0.05rem 0;
	}*/
	.box .router-link-exact-active{
		color: red;
		border-bottom:2px solid red;
	}
</style>
