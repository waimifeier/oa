<template>
    <div class="app-container container">
        <div class="d-flex justify-space-between">
            <span class="subtitle-1 font-weight-bold">代办事项</span>
            <div style="width: 200px;">
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
        <v-chip-group color="primary" mandatory >
            <v-chip pill class="caption">工单审核</v-chip>
            <v-chip pill class="caption">工作提醒</v-chip>
            <v-chip pill class="caption"></v-chip>
        </v-chip-group>

        <button id="button" aria-describedby="tooltip">My button</button>
        <div id="tooltip" role="tooltip">My tooltip</div>
    </div>
</template>

<script>

export default {
    name: "Todo",
    mounted(){
    },
    data:() => ({
        date:"",
    }),

    methods:{

    }
}
</script>

<style>

</style>
