<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold mr-6">菜单配置</span>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                添加菜单
            </v-btn>
        </div>
        <div class="d-flex">
            <v-card flat min-width="300">
                <v-card class="pa-2" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../../assets/svg/undraw_personal_settings_kihd.svg" width="60" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black">菜单列表</v-list-item-title>
                                <v-list-item-subtitle class="caption"> 配置系统菜单资源。</v-list-item-subtitle>
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
                                    placeholder="搜索消息标题..."
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
                        :items="items"
                >
                    <template v-slot:prepend="{ item, oen }">
                        <v-icon small color="primary" v-text="item.icon"></v-icon>
                    </template>
                    <template v-slot:append="{ item, open }">
                        <v-btn small icon color="pink accent-1" class="show-close-btn" @click="removeNode(item)">
                            <v-icon small>mdi-close-circle-outline</v-icon>
                        </v-btn>
                    </template>

                </v-treeview>
            </v-card>


            <div class="ml-8" style="width: 100%;">
                <v-alert
                        text
                        outlined
                        dense
                        color="primary"
                        border="left"
                >
                 <span class="caption">  当前路径: 工作/工作计划 </span>
                </v-alert>

            <v-card flat class="mt-2 align-self-start" width="500" height="500">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-avatar color="grey lighten-3">
                            <v-icon small>mdi-account-circle</v-icon>
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="caption font-weight-black">首页</v-list-item-title>
                        <v-list-item-subtitle class="caption">类型：资源模块</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon small color="primary"><v-icon small>mdi-square-edit-outline</v-icon></v-btn>
                    </v-list-item-action>
                </v-list-item>

                <div class="d-flex justify-space-around">
                    <div class="d-flex flex-column pa-4 link-card" style="width: 120px;">
                        <v-icon color="primary">mdi-shield-key-outline</v-icon>
                        <span class="caption my-3 text-center"> user:list </span>
                        <span class="caption font-weight-black text-center">权限码</span>
                    </div>
                    <div class="d-flex flex-column pa-4 link-card" style="width: 120px;">
                        <v-icon color="orange darken-1">mdi-link-variant</v-icon>
                        <span class="caption my-3 text-center"> /user/list </span>
                        <span class="caption font-weight-black text-center">路由</span>
                    </div>
                </div>

                <v-card-text>
                    <div class="d-flex ma-4">
                        <span class="caption" style="width: 80px;">上级菜单:</span>
                        <span class="caption"> 办公 </span>
                    </div>
                    <div class="d-flex ma-4">
                        <span class="caption" style="width: 80px;">创建时间:</span>
                        <span class="caption">2020-02-23 18:00</span>
                    </div>
                    <div class="d-flex ma-4">
                        <span class="caption" style="width: 80px;">描述:</span>
                        <span class="caption">数据测试</span>
                    </div>
                    <div class="d-flex ma-4">
                        <span class="caption" style="width: 80px;">序号:</span>
                        <span class="caption"> 1 </span>
                    </div>
                    <div class="d-flex ma-4 ">
                        <span class="caption" style="width: 80px;">是否显示:</span>
                        <span class="caption pa-0">
                            <v-switch disabled v-model="switch1" color="indigo darken-3" class="ma-0 pa-0"></v-switch>
                        </span>
                    </div>
                </v-card-text>

            </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import menuList from '@/config/resource.js'
export default {
    inject: ['theme'],
    data: () => ({
        search:"",
        hidenSearch:false,
        icons:{
            company:'',
            department:''
        },
        items: menuList,
    }),
    methods:{
        removeNode(node){
            this.$dialog.confirm({
              text: `是否删除菜单[${node.name}] ${node.children && node.children.length>0? ',及其子菜单' : ''}`,
              actions: ['否', '是'],
              title:'警告'
            }).then(()=>{
                // console.log(node.id)
                alert(node.id)
            })
        }
    }
}
</script>

<style scoped>
.link-card{
    box-shadow: 6px 11px 41px -28px #a99de7;
}
.show-close-btn{
    display: none;
    transition: all .3s;
}
.v-treeview-node__root:hover .show-close-btn{
   display: block;
}
</style>
