<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold mr-6">组织架构</span>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                添加部门
            </v-btn>
        </div>
        <div class="d-flex justify-space-between">
            <v-card flat min-width="300">
                <v-card class="pa-2" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../../../assets/svg/undraw_career_development_oqcb.svg" width="60" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black">组织架构节点</v-list-item-title>
                                <v-list-item-subtitle class="caption">
                                    您可以 <a href="javascript:;" class="white--text" style="text-decoration: none;">生成组织架构图</a>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon small @click="hidenSearch=!hidenSearch">
                                    <v-icon small v-text=" hidenSearch ? 'mdi-chevron-down' :'mdi-chevron-up'"></v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                    <v-expand-transition>
                        <div class="px-2" v-if="hidenSearch">
                            <v-text-field
                                    v-model="search"
                                    single-line
                                    filled
                                    rounded
                                    dense
                                    clearable
                                    placeholder="搜索部门名称..."
                                    prepend-inner-icon="mdi-magnify"
                                    hide-details
                                    clear-icon="mdi-close-circle-outline"
                            ></v-text-field>
                        </div>
                    </v-expand-transition>
                </v-card>
                <v-treeview
                        :search="search"
                        dense
                        transition
                        activatable
                        open-on-click
                        open-all
                        :items="items"
                >
                    <template v-slot:prepend="{ item, open }">
                        <v-icon small color="primary">
                            {{ item.code==='COMPANY' ? 'mdi-home-analytics' : 'mdi-lan' }}
                        </v-icon>
                    </template>
                </v-treeview>
            </v-card>
            <v-card width="100%" class="ml-8 d-flex flex-column align-self-start" flat :color="theme.isDark ? '' : '#FFF'">
                <div class="d-flex mt-2 pa-3">
                    <div style="width: 100%;" class="align-self-center d-flex">

                        <div class="d-flex flex-column justify-center">
                            <v-icon color="#acbdce" size="30">mdi-account-tie</v-icon>
                            <span class="caption" style="color:#acbdce">负责人</span>
                            <span class="caption font-weight-bold text-center">爱丽丝</span>
                        </div>

                        <div class="d-flex flex-column justify-center">
                            <v-icon color="#acbdce" size="30">mdi-cellphone</v-icon>
                            <span class="caption" style="color:#acbdce"> 部门数量 </span>
                            <span class="caption font-weight-bold">12</span>
                        </div>

                    </div>

                    <div class="ma-6">
                        <v-divider vertical></v-divider>
                    </div>

                    <div class="align-self-center">
                        <span class="caption font-weight-bold mr-6">男女占比</span>
                        <PieChart></PieChart>
                    </div>
                </div>
            </v-card>


            <span class="caption font-weight-bold mr-6">人数分配</span>
            <MiniBar></MiniBar>

        </div>
    </div>
</template>

<script>
    import PieChart from './chart/pie-chart.vue'
    import MiniBar from './chart/mini-bar.vue'
    export default {
        inject: ['theme'],
        components:{PieChart,MiniBar},
        data: () => ({
            hidenSearch:false,
            search:"",
            icons:{
                company:'',
                department:''
            },
            items: [
                {
                    id: 1,
                    name: '昆明怡泰祥珠宝有限公司',
                    code:'COMPANY',
                    children: [
                        {
                            id: 2,
                            name: '销售部',
                            code:'DEPARTMENT' ,
                            children:[
                                { id: 5, name: '销售一组', code:'DEPARTMENT'},
                                { id: 6, name: '销售二组', code:'DEPARTMENT'},
                            ]
                        },
                        { id: 3, name: '人事部', code:'DEPARTMENT'},
                        { id: 4, name: '财务部',  code:'DEPARTMENT'},
                    ],
                }
            ],
        }),

        mounted() {

        }
    }
</script>

<style scoped>

</style>
