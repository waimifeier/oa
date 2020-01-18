<template>
    <v-tabs v-model="currentItem" background-color="transparent"  show-arrows  align-with-title>
        <v-tabs-slider></v-tabs-slider>

        <v-menu
                open-on-hover
                allow-overflow
                nudge-bottom="3"
                internal-activator
                eager

                :close-on-content-click="true"
                offset-y
                close-delay="200"
                v-for="item in items" :key="item.id" >
            <template v-slot:activator="{ on }">
                <v-tab  v-on="on">{{item.title}}</v-tab>
            </template>

            <v-list dense
                    min-width="120"
                    v-if="item.children.length>0" >

                <v-list-item link
                        v-for="subitem in item.children"
                        :key="subitem.id"
                >

                    <v-list-item-icon class="mr-2">
                        <v-icon :size="14">mdi-email-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>

                        <v-list-item-subtitle v-html="subitem.title"></v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
    </v-tabs>

</template>

<script>
export default {
    name: 'HorizontalNavigation',
    created(){
        console.log(this)
    },
    data: () => ({
        currentItem:"",
        items: [
            {
                id:1,
                title: '工作台',
                icon:'' ,
                to: '/',
                children:[
                    {
                        id:2,
                        title: '首页',
                        icon:'' ,
                        to: '/',
                    },
                    {
                        id:2,
                        title: 'test01',
                        icon:'' ,
                        to: '/',
                    },
                    {
                        id:2,
                        title: 'test02',
                        icon:'' ,
                        to: '/',
                    }
                ]
            },
            {
                id:3,
                title: '系统管理',
                icon:'' ,
                to: '/home',
                children:[
                    {
                        id:2,
                        title: '首页',
                        icon:'' ,
                        to: '/',
                    },
                ]
            },
            {
                id:4,
                title: '账号管理',
                icon:'' ,
                to: '/acc',
                children:[]
            },
            {
                id:5,
                title: '测试',
                icon:'' ,
                to: '/test',
                children:[]
            }
        ]
    })
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped>

</style>