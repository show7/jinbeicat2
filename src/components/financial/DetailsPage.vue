<template>
    <div class='page'>
        <div class='topWindow'>
            <div class='top'>
                <div>协议年回报率</div>
                <div>
                    <span>6666</span>
                    <span>6666</span>
                </div>
            </div>
            <div class='num'>8.56%</div>
            <div class=''></div>
            <div class='line'>
                <div></div>
                <div :style='{width:"30%"}'></div>
            </div>
            <div class='binfor'>
                  <div>产品期限</div>
                  <div>借款总额</div>
                  <div>起投金额</div>
                  <div class='border'>60</div>
                  <div class='border'>200.000</div>
                  <div>100</div>  
            </div>
        </div>
        <div class='infor'>
            这个文字显示内容为：活动的说明广告文字放在这里，这里的文字点击后会跳转至此活动的H5页面>>
        </div>
        <div class='tab'>
            <router-link :to = '{path:"ProjectDescription"}' tag = 'div' replace>项目说明</router-link>
            <router-link :to = '{path:"information"}' tag = 'div' replace>信息披露</router-link>
            <router-link :to = '{path:"Investment"}' tag = 'div' replace>投机记录</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
    export default{
        data(){
            return{
                pid:''
            }
        },
        mounted(){
            this.pid=this.$route.params.pid
            this.getInfor()
            console.log(this.Details)
        },
        computed:{
             ...mapState({Details:state=>state.DetailsPage.Details}),
        },
        methods:{
            ...mapActions(['getDetails']),
            getInfor(){
                this.getDetails({
                    pid:this.pid
                })
                .then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>
<style>
    .page{
        background:rgb(215,215,215);
        padding-bottom:0.5rem;
    }
    .topWindow{
        width: 100%;
        background: rgba(54, 54, 54, 1);
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;

    }
    .topWindow .top{
        display: flex;
        flex-direction: row;
        align-items: center;
        /*border:1px solid red;*/
    }
    .topWindow .top >div:first-child{
        width: 50%;
        padding-left: 0.5rem;
        font-size: 0.3rem;
        color: #fff;
    }
    .topWindow .top >div:last-child{
        flex:1;
        display: flex;
        justify-content: flex-end;
        /*border:1px solid green;*/
    }
    .topWindow .top span{
        border:1px solid #C7AB6F;
        color: #C7AB6F;
        font-size: 0.24rem;
        margin-right: 0.1rem;
        padding:0.02rem 0.1rem;
    }
    .topWindow .num{
        font-size: 0.56rem;
        color: #C7AB6F;
        padding-left: 0.5rem;
        margin-top: 0.2rem;

    }
    .topWindow .line{
        position: relative;
        width: 85%;
        margin: auto;
        margin-top: 0.2rem;
        
    }
    .line>div:first-child{
        position: absolute;
        border-top:3px solid #fff;
        width: 100%;
        
        
    }
    .line>div:last-child{
        position: absolute;
        border-top:3px solid #C7AB6F;
        margin: auto;
    }
    .Surplus{
        position: absolute;
        display: inline-block;
        top: -20px;
        right: -10px;
        color: #fff;
        width: 3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        background:red;
        font-size: 0.1rem;
    }
    .binfor{
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.5rem;

    }
    .binfor .border{
        border-right:1px solid #fff;
        height: 0.4rem;
    }
    .binfor div{
        width: 33.3%;
        color: #fff;
        font-size: 0.246rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .infor{
        width: 100%;
        padding:0.2rem 0.5rem;
        background: #fff;

    }
    .tab{
        display: flex;
        justify-content: space-around;
        border:1px solid red;
        height: 1rem;
        align-items: center;
    }
</style>