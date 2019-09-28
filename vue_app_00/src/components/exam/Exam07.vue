<template>
    <div>
        <!-- 面板 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="cood">
                美食面板
            </mt-tab-container-item>
            <mt-tab-container-item id="relax">
                休闲面板
            </mt-tab-container-item>
            <mt-tab-container-item id="shop">
                购物面板
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航条 -->
        <mt-tabbar v-model="active" @click="changed">
            <mt-tab-item id="cood" data-id="cood">
                <img slot="icon" src="../../assets/cood.png" alt="">
            </mt-tab-item>
            <mt-tab-item id="relax" data-id="relax">
                <img slot="icon" src="../../assets/relax.png" alt="">  
            </mt-tab-item>
            <mt-tab-item id="shop" data-id="shop">
                <img slot="icon" src="../../assets/shop.png" alt="">  
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:"cood"
        }
        
    },
    methods:{
        changed(e){
            if(e.target.nodeName=="A"){
                this.active=e.target.dataset.id;
            }
        }
    }
}
</script>