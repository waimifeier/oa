<template>
    <v-app id="app">
       <router-view />
       <vue-progress-bar></vue-progress-bar>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
};
</script>

<style>
    html,body{
        width: 100%;
        height: 100%;
    }
    #app{
        height: 100%;
        width: 100%;
    }
</style>
