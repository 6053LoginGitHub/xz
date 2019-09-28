<template>
    <div>
        <sub09 msg="够不够1" :tasks="tasks" :imgurl="require('../../assets/shop.png')"></sub09>
    </div>
</template>
<script>
import Sub09 from "./Sub09"
export default {
    data(){
        return {
            tasks:[1,2,3]
        }
    },
    components:{
        "sub09":Sub09
    }
}
</script>