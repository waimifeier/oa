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
            <v-avatar size="35" v-on="on" style="cursor: pointer">
                <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="John"/>
            </v-avatar>
        </template>


        <v-card width="280"
                class="mx-auto"
                hover
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
                                        <v-icon size="20" color="darken-2">mdi-bell-ring-outline</v-icon>
                                    </v-btn>
                                </v-badge>
                            </template>
                            <span>系统通知</span>
                        </v-tooltip>


                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>

            <v-list dense>
                <v-subheader>导航布局</v-subheader>
                <v-list-item>
                    <v-item-group v-model="layoutValue">
                        <v-item v-slot:default="{ active, toggle }">
                            <v-tooltip top color="grey darken-4">
                                <template v-slot:activator="{ on }">
                                    <v-avatar tile :size="60" v-on="on">
                                        <img @click="toggle"
                                             src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg"
                                             alt="John"
                                        >
                                        <v-icon class="layout-check" color="red darken-1" v-if="active">mdi-fingerprint</v-icon>
                                    </v-avatar>
                                </template>
                                <span>左侧导航栏</span>
                            </v-tooltip>
                        </v-item>

                        <v-item v-slot:default="{ active, toggle }" >
                            <v-tooltip top color="grey darken-4">
                                <template v-slot:activator="{ on }" >
                                    <v-avatar tile :size="60" v-on="on" class="ml-7">
                                        <img @click="toggle"
                                             src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                                             alt="John"
                                        >
                                        <v-icon class="layout-check" color="red darken-1" v-if="active">mdi-fingerprint</v-icon>
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
                        <v-switch v-model="$vuetify.theme.dark" color="info"></v-switch>
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
                        <v-list-item-subtitle> 系统将主动推送最新系统通知 </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list dense rounded flat>
                <v-subheader>其他设置</v-subheader>
                <v-list-item link @click="modifyPasswordHandler">
                    <v-list-item-icon>
                        <v-icon size="16">mdi-key-wireless</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>修改密码</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link @click="logoutHandler">
                    <v-list-item-icon>
                        <v-icon size="16">mdi-power-standby</v-icon>
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
export default {

    data: () => ({
        layoutValue:0,         // 导航布局
        menu: false,           // 弹出菜单显示
        subscribeTopic: false, // 订阅通知
    }),

    watch:{
        layoutValue(val){
            // ==1  顶部导航 ==0 左侧菜单
            this.$emit("layoutNavClipped", val === 1)
        }
    },

    methods:{

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

<style rel="stylesheet/scss" lang="scss" scoped>
.layout-check{
    position: absolute;
}
</style>