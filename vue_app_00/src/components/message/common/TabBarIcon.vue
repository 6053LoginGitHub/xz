<template>
    <div>
        <img :src="focused?selectedImage:normalImage" class="imgStyle">
    </div>
</template>
<script>
export default {
    props:{
        "focused":{default:false},
        "selectedImage":{default:""},
        "normalImage":{default:""}
    },
    created() {
        console.log(this.focused)
    },
    // props:["focused","selectedImage","normalImage"]
}
</script>
<style scoped>
    .imgStyle{
        width:30px;
        height: 30px;
    }
</style>