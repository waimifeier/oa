<template>
    <v-app app>

        <v-navigation-drawer
                app
                width="220"
                v-model="primaryDrawer.model"
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :mini-variant="primaryDrawer.mini"
                :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"
                overflow
        >

            <v-toolbar elevation="0" :style="{backgroundColor: $vuetify.theme.dark ? '#363636':''}">
                <v-btn icon>
                    <v-img contain src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" width="32px" height="32"/>
                </v-btn>

                <v-toolbar-title >
                    微人事
                </v-toolbar-title>
            </v-toolbar>

            <LeftNavigation></LeftNavigation>
        </v-navigation-drawer>



        <v-app-bar
          :clipped-left="primaryDrawer.clipped"
          app
          :style=" {backgroundColor: renderStyleBar()} "
          elevate-on-scroll
        >
            <v-app-bar-nav-icon
                v-if="primaryDrawer.model"
                @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
            />

            <v-toolbar-title v-if="!primaryDrawer.model">微人事</v-toolbar-title>

               <!--  class="hidden-xs-only"

                 theme--dark
                  v-text-field
                   v-text-field--single-line
                    v-text-field--solo
                     v-text-field--solo-inverted
                     v-text-field--solo-flat
                      v-text-field--is-booted
                -->
            <v-breadcrumbs :items="items" v-if="!this.primaryDrawer.clipped"></v-breadcrumbs>

            <HorizontalNavigation v-if="this.primaryDrawer.clipped"></HorizontalNavigation>
            <v-spacer></v-spacer>
            <FullScreen></FullScreen>

            <!--头像-->
            <Avatar @layoutNavClipped="layoutNavClipped"/>


<!--            <template v-slot:extension v-if="primaryDrawer.clipped">-->
<!--                <v-container>-->
<!--                    <HorizontalNavigation></HorizontalNavigation>-->
<!--                </v-container>-->
<!--            </template>-->

        </v-app-bar>


        <v-content>
            <v-container :fluid="!primaryDrawer.clipped" transition="fade-transition">
                <router-view />
            </v-container>
        </v-content>

    </v-app>
</template>

<script>
import Avatar from './Avatar.vue'
import LeftNavigation from './LeftNavigation.vue'
import HorizontalNavigation from './HorizontalNavigation.vue'
import FullScreen from './widget/FullScreen.vue'

export default {
    data: () => ({
        //  默认 permanent（不能隐藏或显示为true不能影藏）  Temporary（层叠模式）
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
            model: false,  // 控制左侧菜单是否显示
            type: 'Permanent', //
            clipped: true,  // 顶部导航是否是通航
            floating: true, // 是否影藏边框
            mini: true,  // 是否用模拟模式
        },
        footer: {
            inset: true,
        },

        items: [
            {
                text: '工作台',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
            {
                text: '待审核',
                disabled: true,
                href: 'breadcrumbs_link_1',
            }
        ],
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
        Avatar, LeftNavigation, HorizontalNavigation,FullScreen
    },

    methods:{
        layoutNavClipped(val){
            this.primaryDrawer.clipped = val
            this.primaryDrawer.model = !val
        },
        renderStyleBar(){
            if(this.$vuetify.theme.dark){
                return this.primaryDrawer.clipped ?  '#363636' : '#303030'
            }else {
                return this.primaryDrawer.clipped ?  '#fff' : '#eff4f8'
            }
        }
    },
    mounted () {
    }

}
</script>

<style>
    .test:focus{
        width: 300px;
    }
</style>
