<template>

     <!--   <v-col cols="12" md="8">
            type:
            <v-chip-group v-model="types">
                <v-chip v-for="tag in typeOptions" :key="tag">
                    {{ tag.text }}
                </v-chip>
            </v-chip-group>


            <v-calendar
                locale="zh-cn"
                :weekdays="[1, 2, 3, 4, 5, 6, 0]"
                color="primary"
                :type="types"
                @touchmove:day="touchmove"
            >

            </v-calendar>
        </v-col>-->
        <div style="width: 100%;">
            <FullCalendar></FullCalendar>
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
