<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold">我的工单</span>
            <div style="width: 300px;">
                <v-menu
                        v-model="modal"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-model="date"
                                label="按时间搜索..."
                                prepend-inner-icon="mdi-calendar-outline"
                                readonly
                                single-line
                                filled
                                rounded
                                dense
                                clearable
                                hide-details
                                clear-icon="mdi-close-circle-outline"
                                color="grey darken-1"
                                v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" locale="zh-en" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">取消</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">确定</v-btn>
                    </v-date-picker>
                </v-menu>
            </div>
        </div>

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
        name: "Order",
        data:()=>({
            modal:false,
            date:'',
        })
    }
</script>

<style scoped>

</style>
