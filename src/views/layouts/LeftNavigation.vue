<template>

    <v-list
            subheader
            expand
            shaped
            dense
            nav
            class="py-0"
    >
        <v-subheader> 工作台 </v-subheader>
        <v-list-item-group color="primary">
            <v-list-item link to="/home">
                <v-list-item-icon>
                    <v-icon :size="16">mdi-home-analytics</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>首页</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/workbench/schedule">
                <v-list-item-icon>
                    <v-icon :size="18">mdi-sign-text</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 我的日程 </v-list-item-title>
                <v-list-item-icon>
                    <v-badge left dot color="teal" offset-x="10" offset-y="16"></v-badge>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item to="/workbench/todo">
                <v-list-item-icon>
                    <v-icon :size="18">mdi-lightbulb-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 待办事项 </v-list-item-title>
                <v-list-item-icon>
                    <v-badge left dot color="orange" offset-x="10" offset-y="16"></v-badge>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item to="/workbench/message">
                <v-list-item-icon>
                    <v-icon :size="18">mdi-email-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 消息列表 </v-list-item-title>
                <v-list-item-icon>
                    <v-badge left dot color="error" offset-x="10" offset-y="16"></v-badge>
                </v-list-item-icon>
            </v-list-item>
        </v-list-item-group>


        <template v-for="sh in menuData">
            <v-subheader :key="sh.id"> {{sh.subheader}}</v-subheader>
            <template v-for="item in sh.list">
                <v-list-group
                        :key="item.id"
                        v-model="item.active"
                        v-if="item.children"
                        no-action
                        color="primary"
                >
                    <template v-slot:activator>
                        <v-list-item-icon><v-icon :size="18" v-text="item.icon"></v-icon></v-list-item-icon>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </template>
                    <v-list-item-group
                            v-for="subItem in item.children"
                            :key="subItem.id"
                    >
                        <v-list-item
                                ripple
                                :to="subItem.link"
                                :key="subItem.id"
                        >
                            <v-list-item-icon>
                                <v-icon :size="14" v-text="subItem.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="caption" v-text="subItem.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list-group>
                <v-list-item :to="item.link" :key="item.id" ripple v-else>
                    <v-list-item-icon>
                        <v-icon small>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </template>

        </template>
    </v-list>
</template>

<script>

import menuList from '@/config/resource.js'
export default {
    name: "LeftNavigation",
    data:  () => ({
        menuData: menuList
    }),
}
</script>

<style scoped>

</style>
