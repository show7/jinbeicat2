import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import login from './modules/login'//登陆模块
import *as loading from './modules/loading'//登陆模块
import *as RegularMark from './modules/RegularMark'//登陆模块
import *as DetailsPage from './modules/DetailsPage'
import createPersistedState from 'vuex-persistedstate'//vuex持久化
// const debug = process.env.NODE_ENV !== 'production' 
export default new Vuex.Store({
	modules:{
		login,
		loading,
		RegularMark,
        DetailsPage
	},
	 plugins: [createPersistedState()] 
})