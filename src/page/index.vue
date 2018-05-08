<template>
    <div>
        <div>
            <p>价格{{totalPrice}}</p>
            <label for="all" @click='all'>全选</label>
            <input type='checkbox' id='all' v-model='checkedAll' @click='all'>
            <div v-for='(good,index) in goodlist' :key ='good.productId'>
                <label :for="good.productId">{{good.productName}}</label>
                <input type='checkbox' :id='good.productId' :value='good' v-model='cartlist'>
                <button @click='add(index)'>+</button><span>{{good.productQuentity}}</span><button @click='prev()'>-</button>
            </div>
        </div>
        <p>{{cartlist}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                goodlist:[
                    { 
                        "productId":"600100002111",
                        "productName":"黄鹤楼香烟",
                        "productPrice":20,
                        "productQuentity":1,
                        "productImage":"img/goods-1.jpg",
                        "parts":[ 
                        { 
                            "partsId":"10001",
                            "partsName":"打火机",
                            "img":"img/part-1.jpg"
                        }] 
                    },{ 
                        "productId":"600100002112",
                        "productName":"煊赫门香烟",
                        "productPrice":15,
                        "productQuentity":1,
                        "productImage":"img/goods-1.jpg",
                        "parts":[ 
                        { 
                            "partsId":"10001",
                            "partsName":"打火机",
                            "img":"img/part-1.jpg"
                        }] 
                    },{ 
                        "productId":"600100002113",
                        "productName":"红塔山香烟",
                        "productPrice":10,
                        "productQuentity":1,
                        "productImage":"img/goods-1.jpg",
                        "parts":[ 
                        { 
                            "partsId":"10001",
                            "partsName":"打火机",
                            "img":"img/part-1.jpg"
                        }] 
                    }
                ],
                cartlist:[],
                checkedAll:false,
                totalPrice:0


            }
        },
        created(){

        },
        methods:{
                all(){
                    this.$nextTick(()=>{
                        if(this.checkedAll){
                            this.goodlist.forEach((item,i)=>{
                                // this.cartlist[i]=item
                                this.$set(this.cartlist,i,item)
                            })
                        }else{
                            this.cartlist=[]
                        }
                    })
                            
                    
                },
                add(i){
                    console.log(i)
                }
            },
            computed:{
                
            },
            watch:{
                'cartlist':{
                  handler:function(val){
                    console.log(val)
                    if(val.length==this.goodlist.length){
                        this.checkedAll=true
                    }else{
                        this.checkedAll=false
                    }  
                    this.totalPrice = 0;//当选中商品数组发生变化后，自动
                    this.cartlist.map((item,i)=>{
                        this.totalPrice+=item.productPrice
                    })

                            // console.log(sum)  

                        },
                        deep:true
                    }
                // 
            }
    }
</script>
<style scoped>
    *{
        font-size: 0.4rem;
    }
    button{
        border:1px solid red;
        width: 0.4rem;
        height: 0.4rem;
        font-size: 0.2rem;
    }
</style>