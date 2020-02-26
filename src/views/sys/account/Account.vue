<template>
    <div class="app-container container">
        <div class="d-flex justify-space-between align-center">
            <span class="subtitle-1 font-weight-bold">账号列表</span>
            <div style="width: 260px;">
                <v-text-field
                        single-line
                        filled
                        rounded
                        dense
                        clearable
                        placeholder="搜索账号、昵称、手机号..."
                        prepend-inner-icon="mdi-magnify"
                        hide-details
                        color="grey darken-1"
                        clear-icon="mdi-close-circle-outline"
                ></v-text-field>
            </div>
        </div>
        <v-chip-group column active-class="primary--text" mandatory class="hidden-md-and-up">
            <v-chip pill small class="caption">全部</v-chip>
            <v-chip pill small class="caption">已禁用</v-chip>
            <v-chip pill small class="caption">待分配</v-chip>
            <v-chip pill small class="caption">已删除</v-chip>
        </v-chip-group>
        <v-sheet class="d-flex mt-2 justify-space-between">
            <v-card flat loader-height="1" width="260" min-height="400" class="mr-5 hidden-sm-and-down">
                <v-list nav dense flat >
                    <v-list-item two-line >
                        <v-list-item-avatar>
                            <v-btn icon>
                                <v-icon :size="30" color="primary">mdi-account-multiple-plus</v-icon>
                            </v-btn>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="caption">新增账号 </v-list-item-title>
                            <v-list-item-subtitle class="caption">系统当前在线 2 人</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-subheader > 账号状态  </v-subheader>
                    <v-list-item-group color="primary" v-model="accountState" group="23" >
                        <v-list-item >
                            <v-list-item-icon>
                                <v-icon :size="20">mdi-account-supervisor</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption">全部</v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="132" color="success" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>

                        </v-list-item >
                        <v-list-item >
                            <v-list-item-icon>
                                <v-icon :size="20">mdi-account-arrow-right</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption"> 待分配 </v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="5" color="teal" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item >
                            <v-list-item-icon>
                                <v-icon :size="20">mdi-account-cancel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption"> 已禁用 </v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="3" color="orange" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-subheader> 回收站 </v-subheader>
                        <v-list-item >
                            <v-list-item-icon>
                                <v-icon :size="20">mdi-account-off</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption"> 已删除 </v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="0" color="error" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
            <v-data-table
                    style="width: 100%; "
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
            ></v-data-table>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        inject: ['theme'],
        data: () => ({
            accountState:0,

            headers: [
                {
                    text: '账号 ',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: '昵称', value: 'calories' },
                { text: '手机号', value: 'fat' },
                { text: '邮箱', value: 'carbs' },
                { text: '时间', value: 'protein' },
                { text: '图标', value: 'iron' },
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
        }),
        mounted() {
        },
        methods:{
            handlerClick(){
                // this.$confirm('是否禁用当前账号？')
                //         .then(res => {
                //   console.log(res)
                // })


                this.$dialog.message.error('已存在该账号！', {
                    position:'top'
                })


                // this.$dialog.notify.success('保存成功！', {
                //   timeout: 5000,
                // })

                // this.$dialog.confirm({
                //   text: '是否禁用当前账号?',
                //   actions: ['否', '是'],
                //   title:'警告'
                // })
                /* this.$dialog.warning  ({
                   text: '是否禁用当前账号?',
                   actions: ['否', '是'],
                   title:'警告'
                 })*/
            }
        },
        watch:{
            accountState(val){
                console.log(val)
            }
        }
    }
</script>
