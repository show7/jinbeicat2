<template>
	<div>
		<headerNav :title='this.$route.meta.pageTitle'></headerNav>
		<div class='logo'>
			<img src="../../static/img/logoimg.png" alt="">
		</div>
		<div>
			<yd-cell-group class='loginBox'>
	            <yd-cell-item>
	       
	                <yd-input slot="right" v-model="phone" ref="phone" required regex="mobile" placeholder="请输入手机号码" :show-required-icon='false'></yd-input>
	            </yd-cell-item>
				<yd-cell-item>
		            <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码" ref='password'></yd-input>
		        </yd-cell-item>
		        <yd-button-group>
		            <yd-button class='login' size="large" @click.native="clickHander">登录</yd-button>
		        </yd-button-group>
	        </yd-cell-group>
		</div>
		<div>{{token}}</div>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import headerNav from '@/components/common/header.vue'
import 'vue-ydui/dist/ydui.rem.css';
import md5 from 'js-md5';
	export default{
		data(){
			return{
				phone: '',
                password: '',
                result:false,


			}
		},
		components:{
			headerNav
		},
		mounted(){
			
			// console.log(this.token)
		},
		computed:{
			...mapState({token:state=>state.login.token})
		},
		methods:{
			...mapActions(['toLogin']),
			clickHander() {

                const phone = this.$refs.phone;
                const password = this.$refs.password;
                this.result = phone.valid
                // eval(this.result)
                // console.log( this.result, phone.value.length)
              	
              	const Rurl=this.$route.query.Rurl
				console.log(Rurl)
               	if(this.checkPhone(phone) && this.checkpassword(password)){
               		console.log(phone.value,password.value)
               		const passw = md5(md5(`8txuGjgpHti6TANE6D${password.value}`))
               		this.toLogin({
                	 	mobile:phone.value,
                	 	password:`###${passw}`,
                	 })
               		.then(()=>{
               			this.$router.push({
 							path:Rurl !=undefined ? Rurl :'/'
 						})
               		})
               		.catch((res)=>{
               			this.$dialog.toast({
		                    mes: res,
		                    timeout: 1500
		                });
               		})
               	}
               	
               	
              
            },
            checkPhone(phoneNumber){//手机号码检测
            	if(phoneNumber.value.length==0){
            		this.$dialog.toast({
	                    mes: '手机号码不能为空',
	                    timeout: 1500
                	});
                	return false
            	}else{
            		if(!phoneNumber.valid){
	            		this.$dialog.toast({
		                    mes: '手机号码有误',
		                    timeout: 1500
	                	});
	                	return false
            		}
            	}
            	return true
            },
            checkpassword(passw){
            	if(passw.value.length==0){
            		this.$dialog.toast({
		                 mes: '密码不能为空',
		                 timeout: 1500

	                });
	                return false
            	}
            	return true
            }
		}
		
	}
</script>
<style scoped>
	.logo{
		width: 1.841rem;
	    height: 1.841rem;
	    margin: .507rem auto;
	}
	.left{
		width: 
	}
	.login{
		width: 6.443rem;
	    height: .821rem;
	    line-height: .821rem;
	    background: #ecc346;
	    color: #fff;
	    font-size: .314rem;
	    text-align: center;
	    border-radius: .8rem;
	    margin: .8rem auto 0;
	    font-family: \\5FAE\8F6F\96C5\9ED1;
	    border: none;
	}
	.loginBox{
		width: 90%;
    	margin: 0 auto;
	}

</style>