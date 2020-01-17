<template>

    <v-list
            shaped
            dense
            nav
            class="py-0"
    >
        <v-subheader> 工作台 </v-subheader>
        <v-list-item-group color="primary">
            <v-list-item>
                <v-list-item-icon>
                    <v-icon :size="16">mdi-home-analytics</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>首页</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon :size="18">mdi-sign-text</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 我的日程 </v-list-item-title>
                <v-list-item-icon>
                    <v-badge left dot color="teal" offset-x="10" offset-y="16"></v-badge>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon :size="18">mdi-lightbulb-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 待办事项 </v-list-item-title>
                <v-list-item-icon>
                    <v-badge left dot color="orange" offset-x="10" offset-y="16"></v-badge>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon :size="18">mdi-email-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> 消息列表 </v-list-item-title>
                <v-list-item-icon>
                    <v-badge left dot color="error" offset-x="10" offset-y="16"></v-badge>
                </v-list-item-icon>
            </v-list-item>
        </v-list-item-group>


        <v-subheader> 系统管理 </v-subheader>
        <v-list-group
                v-for="item in menuData"
                :key="item.id"
                v-model="item.active"
                color="primary"
        >
            <template v-slot:activator>
                <v-list-item-icon><v-icon :size="18" v-text="item.icon"></v-icon></v-list-item-icon>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </template>
            <v-list-item-group color="primary">
                <v-list-item
                        v-for="subItem in item.items"
                        :key="subItem.id"
                >
                    <v-list-item-icon>
                        <v-icon :size="18" v-text="subItem.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list-item-group>

        </v-list-group>

    </v-list>
</template>

<script>
export default {
    name: "LeftNavigation",
    data:  () => ({

        menuData: [
            {
                id:1,
                icon: 'mdi-email-outline',
                title: '系统管理',
                active: true,
                items: [
                    { title: '用户管理' ,id:4,active:false,icon: 'mdi-email-outline',},
                    { title: '角色管理' ,id:5,active:false,icon: 'mdi-email-outline',},
                ]
            },
            {
                id:4,
                icon: 'mdi-email-outline',
                title: '审批',
                active: false,
                items: [
                    { title: '通知1' ,id:52,active:false,icon: 'mdi-email-outline',},
                    { title: '通知1' ,id:21,active:false,icon: 'mdi-email-outline',},
                ]
            },



        ]
    }),
}
</script>

<style scoped>

</style>