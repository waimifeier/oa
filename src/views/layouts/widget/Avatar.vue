<template>
    <v-menu
        :nudge-bottom="35"
        v-model="menu"
        transition="scroll-x-reverse-transition"
        :close-on-content-click="false"
        origin="center center"
    >
        <!-- 头像 -->
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon size="20">mdi-account-settings</v-icon>
            </v-btn>
        </template>


        <v-card width="280"
                class="mx-auto"
                hover
                elevation="12"
        >
            <v-list dense>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="John">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>邓林杰</v-list-item-title>
                        <v-list-item-subtitle> 电商部</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-tooltip left color="grey darken-4">
                            <template v-slot:activator="{ on }">
                                <v-badge
                                        bordered
                                        top
                                        color="red accent-2"
                                        dot
                                        offset-x="10"
                                        offset-y="10"
                                >
                                    <v-btn icon v-on="on">
                                        <v-icon>mdi-certificate</v-icon>
                                    </v-btn>
                                </v-badge>
                            </template>
                            <span>个人中心</span>
                        </v-tooltip>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list dense>
                <v-subheader>导航布局</v-subheader>
                <v-list-item>
                    <v-item-group v-model="layoutValue">
                        <v-item v-slot:default="{ active, toggle }" value="horizontal">
                            <v-tooltip top color="grey darken-4">
                                <template v-slot:activator="{ on }">
                                    <v-avatar tile :size="60" v-on="on">
                                        <img @click="toggle"
                                             src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg"
                                             alt="John"
                                        >
                                        <v-icon class="layout-check" color="red darken-1" v-if="active">mdi-checkbox-marked-circle-outline</v-icon>
                                    </v-avatar>
                                </template>
                                <span>左侧导航栏</span>
                            </v-tooltip>
                        </v-item>

                        <v-item v-slot:default="{ active, toggle }" value="vertical">
                            <v-tooltip top color="grey darken-4">
                                <template v-slot:activator="{ on }" >
                                    <v-avatar tile :size="60" v-on="on" class="ml-7">
                                        <img @click="toggle"
                                             src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                                             alt="John"
                                        >
                                        <v-icon class="layout-check" color="red darken-1" v-if="active">mdi-checkbox-marked-circle-outline</v-icon>
                                    </v-avatar>
                                </template>
                                <span>顶部导航栏</span>
                            </v-tooltip>
                        </v-item>
                    </v-item-group>
                </v-list-item>
            </v-list>

            <v-list dense>
                <v-subheader>主题</v-subheader>
                <v-list-item>
                    <v-list-item-action>
                        <v-switch :input-value="themeDarkState" color="info" @change="darkThemeToggle"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>
                        深色模式
                    </v-list-item-title>
                </v-list-item>
            </v-list>

            <v-list dense>
                <v-subheader>消息通知</v-subheader>
                <v-list-item>
                    <v-list-item-action>
                        <v-switch v-model="subscribeTopic" color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>订阅通知</v-list-item-title>
                        <v-list-item-subtitle> 允许接受最新消息 </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list dense rounded flat>
                <v-subheader>其他设置</v-subheader>
                <v-list-item link @click="modifyPasswordHandler">
                    <v-list-item-icon>
                        <v-icon size="16">mdi-lock-open</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>修改密码</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link @click="logoutHandler">
                    <v-list-item-icon>
                        <v-icon size="16">mdi-location-enter</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>退出系统</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>

        </v-card>
    </v-menu>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'themeDark',
            'navbarStyle'
        ]),
        themeDarkState(){
            return this.themeDark;
        },
        layoutValue:{
            get(){
                return this.navbarStyle;
            },
            set(val){
                this.$store.dispatch('NavbarStyle',val);
            }
        }
    },
    data: () => ({
        menu: false,           // 弹出菜单显示
        subscribeTopic: false, // 订阅通知
    }),

    mounted(){
    },

    methods:{
        darkThemeToggle(){
            this.$store.dispatch('ThemeDarkToggle');
        },

        // 修改密码
        modifyPasswordHandler(){
            console.log(this.$vuetify);
        },

        // 退出系统
        logoutHandler(){

        }
    }
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
.layout-check
    position: absolute
</style>
