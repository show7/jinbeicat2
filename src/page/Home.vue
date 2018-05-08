<template>
	<div>
		<banner :imgarry='bannerArr'></banner>
		<div class='links'>
			<router-link tag='div' :to="{name:'Home'}">
				<div class='icon'>
					<img src="../../static/img/home_link.png" alt="">
				</div>
				<p>邀请好友</p>
			</router-link >
			<router-link tag='div' :to="{name:'Coupon'}">
				<div class='icon'>
					<img src="../../static/img/home_link1.png" alt="">
				</div>
				<p>签到拿钱</p>
			</router-link>
			<router-link tag='div' :to="{name:'Cart'}">
				<div class='icon'>
					<img src="../../static/img/home_link2.png" alt="">
				</div>
				<p>信息披露</p>
			</router-link>
			<router-link tag='div' :to="{name:'My'}" >
				<div class='icon'>
					<img src="../../static/img/home_link3.png" alt="">
				</div>
				<p>风险评测</p>
			</router-link>
		</div>
		<div>
			<marklist 	v-for = 'item in homemarkList'
						:title = 'item.title'
						:cycle = 'item.cycle'
						:activitys ='item.activitys'
						:actualRate = 'item.actualRate'
						:awardRate ='item.awardRate'
						:repayType = 'item.repayType'
						:proType = 'item.proType'
						:maxInvestAmount='item.maxInvestAmount'
						@goDetails='goDetails(item.pid)'

			></marklist>
		</div>
		<footerNav></footerNav>
	</div>
</template>
<script>
import banner from '@/components/Home/banner.vue'
import footerNav from '@/components/common/footer.vue'
import marklist from '@/components/Home/marklist'//首页列表
import { mapState,mapActions,mapGetters } from 'vuex'
	export default{
		data(){
			return{
				bannerArr:[]
			}
		},
		mounted(){
			this.banner()
			console.log(this.homemarkList)
			
		},
		computed:{
			...mapState({
				isLogin:state=>state.login.isLogin,
				
			}),//拿到vuex中的登陆状态
			...mapGetters(['homemarkList'])

		},
		methods:{
			...mapActions(['toLogin']),
			banner(){
				this.$api.swiper()
				.then(res=>{
					console.log(res.data.body.banners)
					this.bannerArr=res.data.body.banners
				})
			},
			goDetails(pid){
				this.$router.push({
					path:'/DetailsPage/'+pid
					
				})
			}
			
		},
		components:{
			footerNav,
			banner,
			marklist
		}

	}
</script>
<style scoped>
	.links{
		display: flex;
		justify-content: space-around;
		border:1px solid red;
	}
	.icon{
		display: flex;
		justify-content: center;
		align-items: center;
		width: .712rem;
    	height: .906rem;
    	margin:auto;
	}
	.links p{
		color: #666;
    	font-size: .277rem;
	}
</style>


