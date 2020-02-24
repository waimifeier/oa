<template>
    <div class="container">


        <div style="width: 160px;" class="mr-4">
            下拉框：
            <v-select
                    class="elevation-0"
                    :items="items"
                    label="请选择工单状态"
                    solo
                    dense
                    rounded
                    hide-details
                    full-width="100"
            ></v-select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test.vue",
        data:()=>({
            items: ['所有', '已提交', '处理中', '已驳回']
        })
    }
</script>

<style scoped>

</style>
