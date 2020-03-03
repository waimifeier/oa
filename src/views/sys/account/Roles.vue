<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold mr-6">角色管理</span>
            <v-btn color="primary" small rounded @click="addRoles(null)">
                <v-icon left>mdi-plus</v-icon>
                添加角色
            </v-btn>
        </div>
        <div class="d-flex justify-space-between">
            <v-card flat min-width="320">
                <v-card class="pa-2" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../../assets/svg/undraw_settings_ii2j.svg" width="60" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black">角色列表</v-list-item-title>
                                <v-list-item-subtitle class="caption">
                                    允许一个用户拥有多个角色
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
                                    placeholder="搜索角色名..."
                                    prepend-inner-icon="mdi-magnify"
                                    hide-details
                                    clear-icon="mdi-close-circle-outline"
                            ></v-text-field>
                        </div>
                    </v-expand-transition>
                </v-card>
                <v-list dense mav flat :color="theme.isDark ? '' : '#FFF'">
                    <v-list-item-group color="primary" v-model="roleActive" group="23" >
                        <v-list-item v-for="item in rolesList" :key="item.id" class="mb-1 card-border">
                            <v-list-item-content>
                                <v-list-item-title class="caption" v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle class="caption" v-text="item.description"></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-list-item-subtitle class="caption" v-text="item.code"></v-list-item-subtitle>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-item-group>

                    <v-pagination
                            circle
                            class="mt-1"
                            v-model="page"
                            :length="15"
                            :total-visible="7"
                    ></v-pagination>
                </v-list>

            </v-card>
            <v-card width="100%" class="ml-5 d-flex flex-column align-self-start" flat :color="theme.isDark ? '' : '#FFF'">
                阿斯顿发送到
            </v-card>

            <v-dialog v-model="dialog" persistent max-width="450px">
                <v-card>
                    <v-toolbar dense dark flat color="primary">
                        <v-card-title color="primary" class="subtitle-2 font-weight-bold">添加角色</v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-stepper vertical value="2">
                            <v-stepper-header flat class="elevation-0 px-0">
                                <v-stepper-step step="1">基本信息</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step step="2">
                                    关联权限
                                    <small>选择菜单资源</small>
                                </v-stepper-step>
                            </v-stepper-header>
                        </v-stepper>
                        <v-text-field label="角色名称" required></v-text-field>
                        <v-text-field label="角色码" required></v-text-field>
                        <v-text-field label="描述" required></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary darken-1" text @click="dialog = false"> 取 消 </v-btn>
                        <v-btn color="primary " text @click="dialog = false"> 下一步 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>
<script>
export default {
    inject: ['theme'],
    data:()=>({
        dialog:false,
        hidenSearch:false,
        search:'',
        page: 1,

        roleActive:1,
        rolesList:[
            {id:1, name:'管理员', code:'ADMIN',description:'用于系统管理,配置，等系统所有权限'},
            {id:2, name:'人事经理', code:'DES',description:'审核，人员管理，日程'},
            {id:3, name:'人事专员', code:'ADMIN',description:'人员管理'},
            {id:4, name:'普通用户', code:'BASIC',description:'工单，日程等操作'},
            {id:5, name:'财务', code:'COLS',description:'财务管理'},

            {id:8, name:'管理员', code:'ADMIN',description:'用于系统管理,配置，等系统所有权限'},
            {id:7, name:'人事经理', code:'DES',description:'审核，人员管理，日程'},
            {id:6, name:'人事专员', code:'ADMIN',description:'人员管理'},
            {id:10, name:'人事经理', code:'DES',description:'审核，人员管理，日程'},
            {id:9, name:'人事专员', code:'ADMIN',description:'人员管理'},
        ]

    }),
    methods:{
        addRoles(){
            this.dialog = true
        }
    }

}
</script>

<style>
    .card-border——{
        box-shadow: rgba(36, 46, 66, 0.06) 0 4px 8px 0;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
</style>
