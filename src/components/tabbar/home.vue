<!DOCTYPE html>
<template>
    <div>
        <mt-swipe :auto="4000">

            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
// export default{
//     data(){
//         return{
//             lunbotuList:[]
//         }
//     },
//     created(){
//         this.getLunbotu();
//     },
//     methods: {
//         getLunbotu(){
//             this.$http.get("http://taobao.com").then(result => {
//                 // console.log(result.body)
//                 if(result.body.status === 0){
//                     this.lunbotuList = result.body.message;
//                 }else{
//                     Toast('failed in adding photos')
//                 }
//             })
//         }
//     },
// }
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
    .mint-swipe-item:nth-child(3)
    {
        background-color: red;
    }
    img{
        width: 100%;
        height: 100%;
    } 
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color: #fff;
    border: none;

}

</style>