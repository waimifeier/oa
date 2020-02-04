<template>
    <div class="d-flex">
        <v-card flat class="mr-6">
            <v-sheet class="pa-4 card-image-bg">
                <v-img
                        :aspect-ratio="16/9"
                        contain
                        src="../../assets/svg/undraw_events_2p66.svg"
                >
                </v-img>
            </v-sheet>

            <v-list min-width="220" >

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>我的工作计划</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>

        <v-card flat>
            <FullCalendar></FullCalendar>
        </v-card>

    </div>

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
