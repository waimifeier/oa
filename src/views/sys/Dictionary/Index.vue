<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold">字典管理</span>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                新建字典
            </v-btn>
        </div>

        <v-card flat class="mt-8 mx-auto">
            <v-sheet class="v-sheet--offset mx-auto" color="primary" elevation="0" dark>
                <div class="d-flex align-center">
                     <span class="ml-2">
                         <v-img aspect-ratio="1" contain src="../../../assets/svg/undraw_Bibliophile_hwqc.svg" width="80" height="80"></v-img>
                    </span>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="caption">系统参数配置</v-list-item-title>
                            <v-list-item-subtitle class="caption">非运维、管理员请谨慎操作。</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <div style="width:300px;" class="mr-3">
                        <v-text-field
                                loader-height="1"
                                single-line
                                filled
                                rounded
                                dense
                                clearable
                                placeholder="搜索字典关键词..."
                                prepend-inner-icon="mdi-magnify"
                                hide-details
                                clear-icon="mdi-close-circle-outline"
                        ></v-text-field>
                    </div>
                </div>
            </v-sheet>

            <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
            ></v-data-table>

        </v-card>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    {
                        text: '字典码',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: '描述', value: 'calories' },
                    { text: '值', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' },
                ],
                desserts: [
                    {
                        name: '描述',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%',
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%',
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                    },
                ],
            }
        },
    }
</script>

<style scoped>
.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>
