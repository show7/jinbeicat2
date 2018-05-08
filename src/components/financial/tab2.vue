<template>
    <div>
        <tablist2   v-for = '(item,index) in markListArr'
                        :title = 'item.title'
                        :cycle = 'item.cycle'
                        :activitys ='item.activitys'
                        :actualRate = 'item.actualRate'
                        :awardRate ='item.awardRate'
                        :repayType = 'item.repayType'
                        :proType = 'item.proType'
                        :maxInvestAmount='item.maxInvestAmount'
                        @goDetails='goDetails(item.pid)'

            ></tablist2>
            <p></p>
            <loadingMore :haveMore='loading'></loadingMore>
            <footerNav></footerNav>
    </div>
</template>

<script>
import footerNav from '@/components/common/footer.vue'
import tablist2 from '@/components/financial/tablelist2/tabList2'
import loadingMore from '@/components/financial/loadingMore'
import {mapState,mapActions} from 'vuex'
    export default  {
        data(){
            return {
                size:10,
                pageNo:1,
                markListArr:[],
                loading:true,
                loadingMores:true
            }
        },
        components:{
            tablist2,
            footerNav,
            loadingMore
        },
        computed:{
            ...mapState({markList:state=>state.RegularMark.markList})//拿到vuex当前页码的标数组
        },
        mounted(){
            this.get(this.size,this.pageNo)
            console.log(this.markList)
            
            window.addEventListener('scroll',this.scroll,false)
        },
        methods:{
            ...mapActions(['getmarkList']),//获取标列表
            get(size,pageNo){
                this.getmarkList({
                    size:size,
                    pageNo:pageNo
                })
                if(this.markList.length>0){
                    this.markListArr.push(...this.markList)//将当前页码标数组添加到marklistarr中

                }else{
                    this.loading=false
                    this.loadingMores=false
                }
                    
            },
            goDetails(pid){//跳转到详情页面
                this.$router.push({
                    path:'/DetailsPage/'+pid
                    
                })
            },
            scroll(){
                const _this = this;
                var t = document.documentElement.scrollTop || document.body.scrollTop;  //离上方的距离
               var h =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //可见宽度
               if( t >= document.documentElement.scrollHeight -h ) {
                    // alert('66666666666666')
                    if(_this.loadingMores){
                        console.log(_this.loadingMores)
                        _this.loadingMores=false
                        _this.pageNo++
                        setTimeout(()=>{
                            _this.get(_this.size,_this.pageNo)
                            _this.loadingMores = true
                        },2000)
                        // alert('66666')
                    }                
               }
            }
        },
        destroyed(){
             window.removeEventListener('scroll',this.scroll,false)

        }
    }
</script>