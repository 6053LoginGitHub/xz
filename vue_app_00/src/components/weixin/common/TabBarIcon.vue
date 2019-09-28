<!--TabBarIcon.vue-->
<template>
  <div>
   <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
  },
    created() {
        console.log(this.selectedImage)
    },
}
</script>
<style scoped>
 .imgstyle{
   width:30px;
   height:30px;
 }
</style>
