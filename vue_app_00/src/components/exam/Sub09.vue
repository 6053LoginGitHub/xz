<template>
    <div>
       <h4>{{msg}}</h4> 
       <img :src="imgurl" alt="">
       <ul>
           <li v-for="(task,i) of tasks" :key="i">{{task}}</li>
       </ul>
    </div>
</template>
<script>
export default {
    
    // props:["msg","imgurl","tasks"]
    props:{
        msg:{default:""},
        imgurl:{default:""},
        tasks:{default:""},
    }
}
</script>