<template>
    <div>
        <div class='box' @click='goDetails'>
            <div class='top'>
                <span class='type' v-show='proType=="NEW_INVESTOR"'>新手</span><span class='type' v-show='proType!=="NEW_INVESTOR"'>定期</span><span class="title">{{title}}</span><span class='sign' v-if='active!==""' v-for='active in activitys'>{{active}}</span>
                <span class='chart'></span>
            </div>
            <div class="middle">
                    <div class="">
                        <p class='percent'>{{actualRate}}%+{{awardRate}}%</p>
                        <p>历史年化收益率</p>
                    </div>
                    <div>
                        <p>{{cycle}}</p>
                        <p>投资期限</p>
                    </div>
                    <div class="">
                        <p><span></span><span class='num'>{{maxInvestAmount | rmb}}万</span></p>
                        <p>剩余可投金额<span class='num'></span></p>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            title:{
                type:String,
                default:function(){
                    return ''
                }
            },
            cycle:{
                type:Number,
                default:function(){
                    return 0
                }
            },
            activitys:{
                type:Array,
                default:function(){
                    return []
                }
            },
            actualRate:{
                type:Number,
                default:function(){
                    return 0
                }
            },
            awardRate:{
                type:Number,
                default:function(){
                    return 0
                }
            },
            repayType:{
                type:String,
                default:function(){
                    return ''
                }
            },
            proType:{
                type:String,
                default:function(){
                    return ''
                }
            },
            maxInvestAmount:{
                type:Number,
                default:function(){
                    return 0
                }
            }
        },
        filters:{
            rmb(val){
                return val/1000000
            }
        },
        methods:{
            goDetails(){
                this.$emit('goDetails')
            }
        }

    }

</script>

<style scoped>

.box{
    padding:0.05rem 0 0.1rem 0;
    margin-top:0.05rem;
    background: #fff;
    /* border:1px solid red; */
}
.top{
    display: flex;
    align-items: center;
}
.title{
        font-size: 0.278rem;
    text-align: left;
}
.type{
    display:flex;
    padding:0.01rem 0.05rem;
    vertical-align: middle;
    height: 80%;
    border:1px solid red;
    background-color: rgb(199,171,111);
    font-size: 0.2rem;
    /*align-items: center;*/
    color: #fff;
    margin-right: 0.2rem;
}
.sign{
        border: 1px solid red;
        font-size: 0.2rem;
        color: #f23648;
        border-radius: 0.03rem;
        margin-left: 0.15rem;
        display: inline-block;
        padding: 0.02rem 0.03rem;
        /* box-sizing: border-box; */
}
.middle{
    display: flex;
    justify-content: space-around;
    /* border:1px solid red; */
    align-items: center;
}
.middle div:first-child{
    text-align: center;
}
.middle div:first-child p:last-child{
    color: #444;
    font-size: 0.217rem;
}
.middle div:last-child{
    color: #444;
    font-size: 0.217rem;
    text-align: center;
}
.num{
    font-size: 0.3rem;
    font-weight: bold;
    color: #333333;
}
.percent{
     font-size: 0.5rem;
     color: #e71a19;
}
.chart{
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 100%;
    background: red;
}

</style>
