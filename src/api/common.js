import *as rootApi from '@/utils/rootapi'
import api from './index'
    
    /*登录*/
    const login = (mobile,password) => api.fetch(`${rootApi.serviceAjax}api/member/login.do?`,'post',{mobile:mobile,password:password})
    /*轮播图*/
    const swiper = () => api.fetch(`${rootApi.queryAjax}qapi/webArticle/image/list.do`,'post',{imageType:'mbanner'})
    
    /*标的列表*/
    const markList = (size,pageNo) => api.fetch(`${rootApi.queryAjax}qapi/product/list.do`,'post',{size:size,pageNo:pageNo})

    /*标的详情页*/
    const getDetails = (pid) => api.fetch(`${rootApi.queryAjax}/qapi/product/detail.do?`,'post',{pid:pid})

export {
    login,
    markList,
    getDetails,
    swiper
}