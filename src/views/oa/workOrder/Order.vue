<template>
    <div class="app-container container">
        <span class="subtitle-1 font-weight-bold">我的工单</span>
        <v-chip-group column active-class="primary--text" mandatory>
            <v-chip  class="caption">已提交</v-chip>
            <v-chip class="caption">处理中</v-chip>
            <v-chip class="caption">已驳回</v-chip>
            <v-chip class="caption">草稿箱</v-chip>
        </v-chip-group>
    </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style scoped>

</style>
