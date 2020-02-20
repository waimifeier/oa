<template>

    <v-list
            subheader
            shaped
            dense
            nav
            class="py-0"
    >
        <v-subheader> 工作台 </v-subheader>
        <v-list-item-group color="primary">
            <v-tooltip right :disabled="false" color="info">
                <template v-slot:activator="{ on }">
                    <v-list-item to="/" link v-on="on">
                        <v-list-item-icon>
                            <v-icon small>mdi-home-analytics</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>首页</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <span >首页</span>
            </v-tooltip>

            <v-list-item to="/workbench/schedule">
                <v-list-item-icon>
                    <v-icon small>mdi-sign-text</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 工作计划 </v-list-item-title>
                <v-list-item-icon class="teal--text">
                    <v-badge left dot color="teal" offset-x="16" offset-y="16"></v-badge>
                    <svg style="position: absolute;top:4px;right:5px;" focusable="false" stroke="currentColor" width="2em" height="2em" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" class="q-spinner text-primary"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="19.3147"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="10.3255"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item to="/workbench/todo">
                <v-list-item-icon>
                    <v-icon small>mdi-lightbulb-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 待办事项 </v-list-item-title>
                <v-list-item-icon class="orange--text">
                    <v-badge left dot color="orange" offset-x="16" offset-y="16"></v-badge>
                    <svg style="position: absolute;top:4px;right:5px;" focusable="false" stroke="currentColor" width="2em" height="2em" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" class="q-spinner text-primary"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="19.3147"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="10.3255"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>
                </v-list-item-icon>
            </v-list-item>
            <!--<v-list-item to="/workbench/message">
                <v-list-item-icon>
                    <v-icon small>mdi-email-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 消息列表 </v-list-item-title>
                <v-list-item-icon class="error&#45;&#45;text">
                    <v-badge left dot color="error" offset-x="16" offset-y="16"></v-badge>
                    <svg style="position: absolute;top:4px;right:5px;" focusable="false" stroke="currentColor" width="2em" height="2em" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" class="q-spinner text-primary"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="19.3147"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="10.3255"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>
                </v-list-item-icon>
            </v-list-item>-->
        </v-list-item-group>


        <template v-for="sh in menuData">
            <v-subheader :key="sh.id"> {{sh.name}}</v-subheader>
            <template v-for="item in sh.children">
                <v-list-group
                        :key="item.id"
                        v-if="item.children"
                        no-action
                        eager
                        color="primary"
                >
                    <template v-slot:activator>
                        <v-list-item-icon><v-icon small v-text="item.icon"></v-icon></v-list-item-icon>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </template>

                    <v-list-item
                            v-for="subItem in item.children"
                            ripple
                            :to="subItem.link"
                            :key="subItem.id"
                    >
                        <v-list-item-content>
                            <v-list-item-title class="caption" v-text="subItem.name"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                    <v-list-item :to="item.link" :key="item.id" v-else color="primary">
                        <v-list-item-icon>
                            <v-icon small>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
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

<style>

</style>
