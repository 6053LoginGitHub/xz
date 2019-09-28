<template>
    <div class="container">
        <mt-switch v-model="val1" :class="{show:val1==true?false:true}">是否继续</mt-switch>
        <!-- 单选框列表 -->
        <mt-radio title="单选框" v-model="val2" :options="['吃饭','睡觉','吃东西']" ></mt-radio>
        <mt-button @click="getVal2">{{val3}}</mt-button>
        <!-- 复选框 -->
        <mt-checklist title="多选框" v-model="val4" :options="['吃饭','睡觉','吃东西']" ></mt-checklist>
        <mt-button @click="getVal4">获取多选框的值</mt-button>
        <span>{{msgs}}</span>

    </div>
</template>
<script>
export default {
    data(){
        return {
            val1:true,
            val2:"",
            val3:"获取",
            val4:[],
            msgs:""
        }
    },
    methods: {
        getVal2(){
            this.val3=this.val2;
        },
        getVal4(){
            this.msgs=this.val4.join(",");
            
        }
    },
}
</script>
<style scoped>
    .container >>> .show{
        opacity: 0.5;
    }
</style>