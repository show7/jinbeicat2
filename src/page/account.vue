<template>
	<div>
		<!-- <headerNav :title='this.$route.meta.pageTitle'></headerNav> -->
		<!-- <div>{{token}}</div> -->
		<div class='top'>
			<div class='left'>
				<div class='portrait'>
					<img :src="nickImg" alt="">
				</div>
				<p>{{MaskPhone}}</p>
			</div>
			<div class='right'>
				<img src="../../static/img/account/message.png" alt="">
			</div>
			
		</div>
		<div class='userinfor'>
			<div>
				<p class='title'>总资产(元)</p>
				<p>0.00</p>
			</div>
			<div>
				<p class='title'>累计收益(元)</p>
				<p>0.00</p>
			</div>
		</div>
		<div class='operationBox'>
			<div class="available">
				<p>可用余额(元)</p>
				<p>0.00</p>
			</div>
			<div class='operation'>
				<span>充值</span>
				<span>提现</span>
			</div>
		</div>
		<div class='list'>
			<ul>
				<router-link :to='{path:"/"}' tag='li'>我的卡卷<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>我的交易<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>汇款日历<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>资金记录<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>我的银行卡<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>推荐好友<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>我的积分<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
				<router-link :to='{path:"/"}' tag='li'>设置<span class='icon'></span></router-link :to='{path:"/"}' tag='li'>
			</ul>
		</div>
		<footerNav></footerNav>
	</div>
</template>
<script>
import headerNav from '@/components/common/header.vue'
import footerNav from '@/components/common/footer.vue'
import { mapState,mapActions,mapGetters} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			footerNav,
			headerNav
		},
		computed:{
			...mapState({
				token:state=>state.login.token,
				mobile:state=>state.login.userInfor.mobile,
				nickImg:state=>state.login.userInfor.nickImg
			}),//拿到vuex中的登陆状态
			...mapGetters(['MaskPhone'])

		},
		mounted(){
			// if(!this.token){
			// 	this.$router.push({
			// 		path:'/login'
			// 	})
			// }
		},
		fifters:{
			Mask(val){
			}
		}
		

		

	}
</script>
<style scoped>
	.top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/*border:1px solid red;*/
		background: #323232;
		height: 1rem;
		align-items: center; 
		padding:0rem 0.3rem;
		font-size: .362rem;

	}
	.portrait{
		/*background: #fff;*/
	    background-size: 100%;
	    width: 0.6rem;
	    height: 0.6rem;
	    border: 1px solid #fff;
	    border-radius: 50%;
	    -webkit-border-radius: 50%;

	}
	.portrait img{
		display: block;
		width: 100%;

	}
	.left{
		display: flex;
		justify-content: flex-start;
	
	}
	.left p{
		color:#fff;
		line-height: 0.6rem;
	}
	.right{
		display: flex;
		justify-content: flex-end;
		
		
	}
	.userinfor{
		display: flex;
		justify-content: space-around;
		background: #323232;
		color: #fff;
		text-align: center;
		padding:0.3rem 0;
	}
	.userinfor div {
		width: 50%;
		
	}
	.userinfor>:first-child{
		border-right: 1px solid #fff;
	}
	.userinfor .title{
		 font-size: .314rem;
	}
	.userinfor p{
		font-size: .724rem;
	}
	.operationBox{
		display: flex;
		font-size: .314rem;
		background:rgba(81, 81, 81, 1);
		padding:0.2rem 0;
		color: #fff;
	}
	.available{
		text-align: center;
		flex:1; 
		/*border:1px solid red;*/

	}
	.available>p:first-child{
		color:#BCBCBC;
	}
	.operation{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex: 1;
		
	}
	
	.operation span{
		text-align: center;
		line-height: 20px;
		padding:0.1rem 0.2rem;
		 
	}
	.operation>span:first-child{
		color: #fff;
		background:rgba(26, 188, 156, 1);
	}
	.operation>span:last-child{
		color: #333333;
		background:#fff;
	}
	.list ul li{
		width: 100%;
		font-size: .314rem;
		position: relative;
		padding:0.2rem 0;
		border-top: 1px solid rgb(228,228,228);
		padding-left: 0.5rem;
	}
	.list .icon{
		position: absolute;
		/*top:0;*/
		right: 0.5rem;
		/*bottom:0;*/
		background: url('../../static/img/account/right.png') no-repeat center center;
		background-size: 100% 100%;
		width: .205rem;
   	 	height: .338rem;
   	 	line-height: 0.338rem;
   	 	/*border:1px solid red;*/
   	 	/*background: blue;*/
	}
</style>