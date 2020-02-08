<template>
    <v-container>
        <span class="title">工作计划</span>
        <v-sheet class="d-flex" color="transparent" >
        <v-card flat class="mr-6 hidden-sm-and-down" width="300">
            <v-sheet class="pa-5">
                <v-img
                        :aspect-ratio="16/9"
                        contain
                        src="../../assets/svg/undraw_events_2p66.svg"
                >
                </v-img>
            </v-sheet>

            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="body-2">我的工作计划</v-list-item-title>
                        <v-list-item-subtitle class="overline">创建属于我的工作计划</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-card-actions>
                <v-btn
                        text
                        block
                        color="primary"
                >
                    开始使用
                </v-btn>

            </v-card-actions>
        </v-card>

        <v-card flat style="flex: 3" color="transparent" >
            <FullCalendar></FullCalendar>
        </v-card>




    </v-sheet>
    </v-container>
</template>


<script>
    import FullCalendar from '@/components/FullCalendar/FullCalendar.vue'
    export default {
        data: () => ({
            types:'month',
            typeOptions: [
                { text: 'Day', value: 'day' },
                { text: '4 Day', value: '4day' },
                { text: 'Week', value: 'week' },
                { text: 'Month', value: 'month' },
                { text: 'Custom Daily', value: 'custom-daily' },
                { text: 'Custom Weekly', value: 'custom-weekly' },
            ],
        }),
        methods: {
            touchmove(val){
                console.log(val)
            }
        },
        components:{ FullCalendar }
    }
</script>

<style rel="stylesheet/scss" lang="scss">


</style>
