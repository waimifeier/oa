<template>
    <v-row>
        <v-col cols="12" md="8">
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
            >

            </v-calendar>
        </v-col>
    </v-row>
</template>


<script>
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

        },
    }
</script>

<style rel="stylesheet/scss" lang="scss">


</style>