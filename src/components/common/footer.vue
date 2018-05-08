<template>
	<div>
		<ul>
			<router-link tag = 'li' :to='{name:"home"}' exact>
				<i class='home'></i>
				<p>首页</p>
			</router-link>
			<router-link tag = 'li' :to='{name:"financial"}'>
					<i class='financial'></i>		
				<p>理财</p>
			</router-link>
			<router-link tag = 'li' :to='{name:"account"}'>	
					<i class='account'></i>		
				<p>我的</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height:  0.3019;
		text-align:center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #e5e5e5;
		background: #fff;
		height: .89rem;
	}
	i{
		display: inline-block;
		width:  0.4227rem;
		height:  0.4227rem;

	}
	ul p{
		font-size: .193rem;
	}
	.router-link-active{
		color: #e71a19;
	}
	.home{
		background: url('../../../static/img/footerNav/home.png') no-repeat center;
		background-size: 100%;
	}
	.financial{
		background: url('../../../static/img/footerNav/money.png') no-repeat center;
		background-size: 100%;
	}
	.account{
		background: url('../../../static/img/footerNav/account.png') no-repeat center;
		background-size: 100%;
	}
	.router-link-active .home{
		background: url('../../../static/img/footerNav/home-active.png') no-repeat center;
		background-size: 100%;
	}
	.router-link-active .financial{
		background: url('../../../static/img/footerNav/money-active.png') no-repeat center;
		background-size: 100%;
	}
	.router-link-active .account{
		background: url('../../../static/img/footerNav/account-active.png') no-repeat center;
		background-size: 100%;
	}

</style>