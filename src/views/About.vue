<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-switch v-model="value"></v-switch>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    value:false,
  })
};
</script>
