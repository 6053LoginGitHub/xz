<template>
    <div>
        <h3>这是交互提示框的示例</h3>
        <button @click="open">简写的提示框</button><br>
        <a href="javascript:;" @click="alert">alert</a><br>
        <a href="javascript:;" @click="confirm">confirm</a><br>
        <a href="javascript:;" @click="prompt">prompt</a>
        <h4>表单的输入框</h4>
        <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:""
        }
    },
    methods:{
        open(){
            this.$messagebox("提示","点击的是button按钮");
        },
        alert(){
            this.$messagebox.alert("点击的是alert框");
        },
        confirm(){
            this.$messagebox.confirm("是否删除此消息")
            .then(action=>{
                console.log("确认")
            })
            .catch(err=>{
                console.log("取消")
            });
        },
        prompt(){
            this.$messagebox.prompt("点击的是prompt框")
            .then((value)=>{
                console.log(value)
            })
            .catch(err=>{
                console.log(err)
            });
        },
    },
    watch:{
        uname(){
            console.log(this.uname.trim())
        }
    }
}
</script>