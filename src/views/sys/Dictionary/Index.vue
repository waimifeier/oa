<template>
    <div class="app-container container">
        <div class="d-flex align-center mb-1">
            <span class="subtitle-1 font-weight-bold">字典管理</span>
            <!--<div style="width:300px;">
                <v-text-field
                        loader-height="1"
                        single-line
                        dense
                        clearable
                        placeholder="搜索字典关键词..."
                        prepend-inner-icon="mdi-magnify"
                        hide-details
                        color="grey darken-1"
                        clear-icon="mdi-close-circle-outline"
                ></v-text-field>
            </div>-->

            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                新建字典
            </v-btn>
        </div>
        <div class="d-flex align-center justify-space-between">
            <div style="width: 260px;">
                <v-text-field
                        loader-height="1"
                        single-line
                        dense
                        clearable
                        placeholder="搜索字典关键词..."
                        prepend-inner-icon="mdi-magnify"
                        hide-details
                        color="grey darken-1"
                        clear-icon="mdi-close-circle-outline"
                ></v-text-field>
            </div>
        </div>


        <v-sheet>
            <div class="d-flex">
                <!--<v-list-item>
                    <v-list-item-avatar>
                        <v-img src="../../../assets/svg/undraw_Bibliophile_hwqc.svg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-subtitle>系统参数管理</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>-->

              <!--  <v-list-item>

                </v-list-item>-->
            </div>
        </v-sheet>

        <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
        ></v-data-table>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' },
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
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

</style>
