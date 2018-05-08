import * as type from '../type.js'
import {markList} from '@/api/common'
const state = {
	markList:[]

}
const mutations = {
	[type.SET_MARKLIST](state,prames){
		state.markList = prames
	}
}
const actions = {//标的列表
	getmarkList({commit},prames){
			markList(prames.size,prames.pageNo)
			.then((res)=>{
				console.log(res)
				commit(type.SET_MARKLIST,res.data.body.list)
			})
		
	}
	
}
const getters = {
	homemarkList(state){
		return state.markList.slice(0,7) 
	}
}
export {
	state,
	mutations,
	actions,
	getters
}