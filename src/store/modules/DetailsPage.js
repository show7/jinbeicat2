import * as type from '../type.js'
import {getDetails} from '@/api/common'
const state = {
    Details:{

    }
}
const mutations = {
    [type.GET_DETAILS](state,prames){
        state.Details = prames
    }
}
const actions = {
    getDetails({commit},pid){
       
            getDetails(pid)
            .then((res=>{
                if(res.data.head.code=="0000"){
                    commit(type.GET_DETAILS,res.data.body)
                    resolve(res.data.body)
                }
                
                
                
            }))
        
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
