<template>
    <div>
        <!-- 消息列表MessageList.vue -->
        
        <!-- 1、一条消息 -->
        <div class="rootstyle" v-for="(list,i) of lists" :key="i">
            <!-- 1.1左侧一组[标题/标题] -->
            <div class="leftimgtxt">
                <!-- 左侧图片 -->
                <img :src="require('../../../assets/tblogo.png')" class="imgstyle">
                <!-- 左侧标题 -->
                <div class="titlestyle">
                    <span class="title">
                        {{list.title}}
                    </span>
                    <span class="subtitle">
                        {{list.subtitle}}
                    </span>
                </div>
            </div>
            <!-- 1.2右侧时间 -->
            <div>
                <span class="sendtime">
                    {{list.time}}
                </span>
            </div>
        </div>
        
        <!-- 2、读取数据json文件 -->
        <!-- 3、创建循环遍历所有消息 -->
    </div>
</template>
<script>
import mlist from "../json/messagelist.json"
export default {
    data(){
        return {
            lists:mlist.data
            
        }
    }
}
</script>
<style scoped>
/* 一条消息 */
    .rootstyle:first-child{
        padding-top:50px;
    }
    .rootstyle{
        height:50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid rgb(236, 234, 234)
    }
/* 左侧图片和文字样式 */
    .leftimgtxt{
        display: flex;
        /* align-items: center; */
    }
    /* 图片 */
    .imgstyle{
        width:40px;
        height:40px;
        padding: 5px 5px;
    }
    /* 文字 */
    .titlestyle{
        height:50px;
        margin-left: 7px;
        display: flex;
        flex-direction:column;
        justify-content:space-around;
    }
    .title,.subtitle{
        display: inline-block;
        height:20px;
    }
    .title{
        font-size: 17px;
    }
    .subtitle{
        font-size: 12px;
        color:rgb(128,128,128);
    }
    .sendtime{
        font-size: 12px;
        color:rgb(128,128,128);
        margin-right: 10px;
    }
</style>