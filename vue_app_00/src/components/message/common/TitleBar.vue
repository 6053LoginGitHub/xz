<template>
    <div class="container">
        <!-- 微信信息头部 -->
        <div class="page-head">
            <!-- 左边微信 -->
            <span>{{msg}}</span>
            <!-- 右边搜索和加号 -->
            <div class="right-head">
                <div>
                    <img :src="rightFirstImg" alt="">
                </div>
                <div>
                    <img :src="rightSecondImg" alt="">
                </div>
            </div>
        </div>    
            
    </div>
</template>
<script>
export default {
    // props:["msg","rightFirstImg","RightSecondImg"]
    props:{
        msg:{default:""},
        // 接收父元素两张图片
        rightFirstImg:{default:""},
        rightSecondImg:{default:""},
    }
}
</script>
<style scoped>
    *{
        margin:0;padding: 0;
    }
/* 微信头部的样式 */
    .container{
        width:100%;
        background-color: #333;
        color: #fff;
        position: fixed;
        font-size: 18px;
        z-index: 100;
    }
    .page-head{
       /* width:90%; */
       height:50px;
       padding: 0 7px;
       display: flex;
       justify-content: space-between;
       line-height: 50px;
       position: relative;
    }
   
   
/* 微信头部右边的图片的样式 */
    .right-head{
        padding-top: 5px;
        display: flex;
        align-items: center;
        position: absolute;
        right:10px;
    }
    .right-head>div{
        width:21px; 
        margin-right: 10px;

    }
    .right-head>div:first-child{
        margin-right: 20px;
    }
   .right-head img{
       width:21px;
   }
</style>