<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold mr-6">部门管理</span>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                添加部门
            </v-btn>
        </div>

        <div class="d-flex justify-space-between">
            <v-card flat min-width="300">
                <v-card class="pa-2" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../../assets/svg/undraw_career_development_oqcb.svg" width="60" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black">部门节点树</v-list-item-title>
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

            <v-card width="100%" class="ml-8" flat>
                asdfasdf s
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        inject: ['theme'],
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

        created() {

        }
    }
</script>

<style scoped>

</style>
