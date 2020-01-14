<template>
    <v-app app>
        <v-navigation-drawer
                app
                width="200"
                v-model="primaryDrawer.model"
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :mini-variant="primaryDrawer.mini"
                :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"
                overflow
        >

            <v-toolbar elevation="0"
            >
                <v-toolbar-title >
                    微人事
                </v-toolbar-title>
            </v-toolbar>
            <LeftNavigation></LeftNavigation>

        </v-navigation-drawer>

        <!--
        :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"

        -->

        <v-app-bar
          :clipped-left="primaryDrawer.clipped"
          app
          elevate-on-scroll
        >

            <v-app-bar-nav-icon
                @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
            />


            <v-tabs
                    align-with-title
                    background-color="transparent"
            >
                <v-tab>工作台</v-tab>
                <v-tab>系统管理</v-tab>
                <v-tab>审核</v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

            <!--头像-->
            <Avatar @layoutNavClipped="layoutNavClipped"/>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-container fluid>
            <router-view />
        </v-container>
    </v-app>
</template>

<script>
import Avatar from './Avatar.vue'
import LeftNavigation from './LeftNavigation.vue'
export default {
    data: () => ({
        //  默认 permanent（不能隐藏或显示为true不能影藏）  Temporary（层叠模式）
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
            model: true,  // 控制左侧菜单是否显示
            type: 'Permanent', //
            clipped: false,  // 顶部导航是否是通航
            floating: true, // 是否影藏边框
            mini: false,  // 是否用模拟模式
        },
        footer: {
            inset: true,
        },
    }),

    watch: {
        primaryDrawer: {
            handler: function (val) {
                console.log(val)
            },
            immediate: true,
            deep: true
        }
    },

    components:{
        Avatar,LeftNavigation
    },

    methods:{
        layoutNavClipped(val){
            this.primaryDrawer.clipped = val
        }
    }

}
</script>