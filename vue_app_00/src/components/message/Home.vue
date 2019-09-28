<template>
    <div>
        <title-bar msg="微信(1)" 
        :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')">
        </title-bar>
        <!-- 面板 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab">
                <message-list></message-list>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航条 start -->
        <mt-tabbar v-model="active" fixed>
            <!-- 第一个按钮 微信 -->
            <mt-tab-item id="tab" @click.native="changed(0)">
                <tabbar-icon 
                :normalImage="require('../../assets/ic_weixin_normal.png')"
                :selectedImage="require('../../assets/ic_weixin_selected.png')" 
                :focused="selectIndex[0].isSelect"
                ></tabbar-icon>   
                微信
            </mt-tab-item>
            <mt-tab-item id="tab1" @click.native="changed(1)">
                <tabbar-icon 
                :normalImage="require('../../assets/ic_contacts_normal.png')"
                :selectedImage="require('../../assets/ic_contacts_selected.png')"  
                :focused="selectIndex[1].isSelect"
                ></tabbar-icon>   
                通讯录
            </mt-tab-item>
            <mt-tab-item id="tab2" @click.native="changed(2)">
                <tabbar-icon 
                :normalImage="require('../../assets/ic_find_normal.png')" :selectedImage="require('../../assets/ic_find_selected.png')"  
                :focused="selectIndex[2].isSelect"
                ></tabbar-icon>   
                发现
            </mt-tab-item>
            <mt-tab-item id="tab3" @click.native="changed(3)">
                <tabbar-icon :normalImage="require('../../assets/ic_me_normal.png')" :selectedImage="require('../../assets/ic_me_selected.png')"  
                :focused="selectIndex[3].isSelect"
                ></tabbar-icon>   
                我
            </mt-tab-item>
        </mt-tabbar>
        <!-- 底部导航条 end -->
    </div>
</template>
<script>
// 1、引入子组件TitleBar.vue
import TitleBar from "./common/TitleBar.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import MessageList from "./common/MessageList.vue"
export default {
    data(){
        return {
            active:"tab",
            selectIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }
    },
    methods:{
        changed(n){
            for(var i=0;i<this.selectIndex.length;i++){
                if(n==i){
                    this.selectIndex[i].isSelect=true;
                }else{
                    this.selectIndex[i].isSelect=false;                    
                }
            }
            console.log(this.selectIndex[n].isSelect)
        }
    },
    // 2、注册子组件  
    components:{
        "title-bar":TitleBar,
        "tabbar-icon":TabBarIcon,
        "message-list":MessageList
    }
}
</script>
<style scoped>
    /* 修改tabbar中默认和选中文字 */
    .page-tabbar{
        overflow: hidden;/*溢出隐藏*/
    }
    /* 默认文字颜色 */
    .mint-tabbar>.mint-tab-item{
        color:#999;
    }
    /* 选中文字颜色 */
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color: transparent;
        color:#45c018;
    }
</style>