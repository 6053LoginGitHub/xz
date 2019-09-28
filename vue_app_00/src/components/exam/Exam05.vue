<template>
    <div @click="changed" class="container">
        <h3>面板组件</h3>
        <mt-button data-value="tab1">美食</mt-button>
        <mt-button data-value="tab2">休闲</mt-button>
        <mt-button data-value="tab3">购物</mt-button>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1" class="tab1">
                美食面板
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2" class="tab2">
                休闲面板
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3" class="tab3">
                购物面板
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            active:"tab1"
        }
    },
    methods: {
        changed(e){
            if(e.target.nodeName=="BUTTON"){
                this.active=e.target.dataset.value;
            }
        }
    },
}
</script>
<style scoped>
    .tab1{
        color: aqua
    }
    .tab2{
        color:brown
    }
    .tab3{
        color:coral
    }
</style>