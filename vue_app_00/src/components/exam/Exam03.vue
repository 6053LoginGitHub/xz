<template>
    <div>
        <h3>表单验证</h3>
        <mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="uname" @change="shou" :attr="{autofocus:true}"></mt-field>
        <span style="color:red; font-size:12px">{{unameMsg}}</span>

        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd" class="upd"></mt-field>
        <span style="color:red; font-size:12px">{{upwdMsg}}</span><br>
        <mt-button @click="login">登录</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"",
            upwd:"",
            unameMsg:"",
            upwdMsg:"",
        }
    },
    methods:{
        login(){
            if((/^\w{3,12}$/i.test(this.uname))==false){
                this.unameMsg="用户名应为3-12的数字或字母组成";
                this.$messagebox("提示",this.unameMsg);
                return;
            }else{
                this.unameMsg="";
            }
            if((/^\w{3,12}$/i.test(this.upwd))==false){
                this.upwdMsg="密码应为3-12的数字或字母组成";
                this.$messagebox("提示",this.upwdMsg);
                return;
            }else{
                this.upwdMsg="";
            }
        },
        shou(){
            console.log(111)
        }
    }
}
</script>
<style scope>
    span{
        display: inline-block;
        height: 12px;
        margin-left:0px;
    }
</style>