<template>
   <div id="app">
       <scroll><router-view /></scroll>

       <vue-progress-bar></vue-progress-bar>
   </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
export default {
  name: 'App',
  data: () => ({
  }),
    mounted(){
        this.$message({
            dark:true
        })
    },
    components:{scroll}
};
</script>