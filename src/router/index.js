import Vue from 'vue'
import Router from 'vue-router'
import home from 'page/Home'
import financial from 'page/financial'
import account from 'page/account'
import login from 'page/login'
import index from 'page/index'
import demo from 'page/demo'
import store from '@/store'
import links from '@/components/Home/links'
import DetailsPage from '@/components/financial/DetailsPage'
import tab1 from '@/components/financial/tab1'
import tab2 from '@/components/financial/tab2'
import ProjectDescription from '@/components/financial/tablelist2/ProjectDescription'
import information from '@/components/financial/tablelist2/information'
import Investment from '@/components/financial/tablelist2/Investment'
Vue.use(Router)


const router = new Router({
  mode: 'history', 
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
            pageTitle: '主页',
            isLogin:false
       	  }
    },{
      path: '/financial',
      name: 'financial',
      redirect: '/financial/tab1',
      component: financial,
      meta: {
            pageTitle: '理财',
            isLogin:false
       	},
      children:[
          {
            path:'tab1',
            name:'tab1',
            component: tab1,
          },
          {
            path:'tab2',
            name:'tab2',
            component: tab2
          }
      ]
    },{
      path: '/account',
      name: 'account',
      component: account,
      meta: {
            pageTitle: '个人中心',
            isLogin:true
       	  }
    },{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
            pageTitle: '登录',
            isLogin:false
       }
    },{
      path: '/DetailsPage/:pid',
      name: 'DetailsPage',
      component: DetailsPage,
      redirect: '/DetailsPage/:pid/ProjectDescription',
      meta: {
            pageTitle: '详情页',
            isLogin:false
       },
       children:[
              {
                path:'ProjectDescription',
                name:'ProjectDescription',
                component: ProjectDescription,

              },
              {
                path:'information',
                name:'information',
                component: information,

              },
              {
                path:'Investment',
                name:'Investment',
                component: Investment,

              }
      ]
    }
  ]
})

router.beforeEach( (to, from, next) => { 
	console.log(store.state.login.token)
  if(to.meta.pageTitle){
      document.title = to.meta.pageTitle
  }
	if(to.meta.isLogin){
		if(!store.state.login.token){
			next({path:'/login',query:{ Rurl: to.fullPath} })
		}else{
			next()
		}
	}else{
		next()
	}


})
export default router