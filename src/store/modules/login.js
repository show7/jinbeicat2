import {login} from '@/api/common'
import * as type from '../type.js'
export default{
	state:{
		token:'',//登陆信息
		userInfor:{
			mobile:'',
			nickImg:''
		}
	},
	mutations:{
		[type.SET_SUCCESS_STATE](state,prames){
			state.token = prames.accessToken
		} 
		,
		[type.SET_USERINFOR](state,prames){

			state.userInfor.mobile = prames.mobile,
			state.userInfor.nickImg = prames.nickImg
			console.log(prames)
		}
	},
	getters:{
		MaskPhone(state){
			return `${state.userInfor.mobile.substr(0,3)}****${state.userInfor.mobile.substr(7,4)}`
		}
	},
	actions:{
		toLogin({commit},prames){//登陆
			// console.log(prames)
				login(prames.mobile,prames.password)
				.then(res=>{
					if(res.data.head.code =='0000'){
						// console.log(res.data.body.user)
						commit(type.SET_SUCCESS_STATE,res.data.body.token)
						commit(type.SET_USERINFOR,res.data.body.user)
						resolve(res)
						
					}else{

						reject(res.data.head.memo)
					}

					// commit('toLogin','')
					
				})
			
		},
	}
}




// router.push({
// 							path:prames.path !=undefined ? prames.path :'/'
// 						})