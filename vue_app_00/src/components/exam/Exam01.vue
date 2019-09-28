<!--模板-->
<template>
    <div>
        <h3>mint-ui组件库-toast</h3>
    </div>
</template>
<!--业务js-->
<script>
export default {
    created(){
        this.$toast({
            message:"操作成功",
            duration:5000,
            position:"top",
            iconClass:"iconfont icon-shouye"
        })
    }
}
</script>
<!--样式-->
<style scoped>

</style>