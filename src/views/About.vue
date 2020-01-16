<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
    </el-switch>
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
