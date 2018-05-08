import * as type from '../type.js'
const state = {
	isshow:false
}
const mutations = {
	[type.LOADING_STATIC](state,flag){
		state.isshow = flag
	}
}
const actions = {
	setLoading({commit},prames){
		commit(type.LOADING_STATIC,prames)
	}
}
const getters = {
	
}
export {
	state,
	mutations,
	actions,
	getters
}