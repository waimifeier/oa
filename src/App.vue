<template>
    <div id="app">
        <router-view />
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  mounted() {
      this.$Message({
          title: 'I\'m a title',
          message: 'I\'m a message',
          type: 'success',
          showCancelButton: true
      }).then(function(action) {
          console.log('callback:', action);
          this.$Message('Clicked: ' + action);
      });
  }
};
</script>
