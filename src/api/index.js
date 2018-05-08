import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '@/store'//vuex存储
axios.interceptors.request.use(

    config => {
        // alert('false')
        store.dispatch('setLoading',true)
        // if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的headers都加上token，不用每次请求都手动添加了
        //     config.headerss.Authorization = token;
        // }
        // config.headers = 
        // if(config.methdos=='post'){
        //     config.data = qs.stringify(Object.assign(Public,config.data))
        // }else{
        //     config.params=Object.assign(Public,config.data)
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
     store.dispatch('setLoading',false)
     // alert('true')
        return response;
    },
    error => {
        if (error.response!=200) {
            // switch (error.response.status) {
            //     case 401:
            //         // 这里写清除token的代码                   
            // }
            // alert(error.response.status)
        }
        return Promise.reject(error.response.data) 
    });

export default {
    fetch(url,method,data){
        let httpDefaultOpts ={
            url:url,
            method:method,
            params:Object.assign(data),
            data: qs.stringify(Object.assign(data)),
            headers:{'tnapikey': 'ff5ad7b4-90c0-47b0-8469-cdebf635f6a5', 'channel': 'h5'}
        }
        if(method=='get'){  
          delete httpDefaultOpts.data  
        }else{  
          delete httpDefaultOpts.params  
        }  
        return new Promise((resolve,reject)=>{
            axios(httpDefaultOpts)
            .then(res=>{
                if(res.data.code='0000'){
                    resolve(res)
                }else{
                    reject(res)
                }
            })
            .catch(error=>{
                alert('网络错误')
                reject(error)
            })
        })
    }
}