<template>
    <div id="app">
        <el-scrollbar style="height:100%">
            <router-view />
        </el-scrollbar>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  })
};
</script>
