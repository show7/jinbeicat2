<template>
    <div class='box'>
        <div class='loadingMore' v-show='haveMore'></div>
        <div class='NoMore' v-show ='!haveMore'>Sorry暂无更多数据</div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                
            }

        },
        props:{
                haveMore:{
                    type:Boolean,
                    default:function(){
                        return true
                    }
                }
            }
    }
</script>
<style scoped>
    .box{
        margin-bottom: .89rem;
    }
    .loadingMore{
        background:url(../../../static/img/loading.gif) no-repeat center;
        background-size: 100% 100%;
        width:0.856rem;
        height:1.206rem;
        margin: auto;
    }
    .NoMore{
        text-align: center;
        height:1.206rem;
        line-height: 1.206rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: #999999;
        /*border:1px solid red;*/
    }
</style>