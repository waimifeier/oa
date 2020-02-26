<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold mr-6">菜单配置</span>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                添加菜单
            </v-btn>
        </div>
        <div class="d-flex justify-space-between">
            <v-card flat min-width="300">
                <v-card class="pa-2" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../../assets/svg/undraw_personal_settings_kihd.svg" width="60" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black">菜单列表</v-list-item-title>
                                <v-list-item-subtitle class="caption">配置系统菜单资源。</v-list-item-subtitle>
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
                    <template v-slot:prepend="{ item, open }">
                        <v-icon small color="primary" v-text="item.icon">
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
}
</script>

<style scoped>

</style>
