<!DOCTYPE html>
<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <h3>home</h3>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return{
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
                // console.log(result.body)
                if(result.body.status === 0){
                    this.lunbotuList = result.body.message;
                }else{
                    Toast('failed in adding photos')
                }
            })
        }
    },
}
</script>

<style >
.mint-swipe{
    height: 200px;
}

.mint-swipe-item:nth-child(1)
{
    background-color: blue;
} 
.mint-swipe-item:nth-child(2)
{
    background-color: pink;
}
.mint-swipe-item:nth-child(13)
{
    background-color: red;
} 

</style>