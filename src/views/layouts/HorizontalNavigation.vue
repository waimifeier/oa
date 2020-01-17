<template>
    <v-tabs v-model="currentItem" background-color="transparent"  show-arrows  align-with-title>
        <v-tabs-slider></v-tabs-slider>

        <v-menu open-on-hover
                eager
                :close-on-content-click="true"
                offset-y
                origin="center center"
                transition="scale-transition"
                v-for="item in items" :key="item.id">
            <template v-slot:activator="{ on }">
                <v-tab  v-on="on">{{item.title}}</v-tab>
            </template>

            <v-list dense v-if="item.children.length>0">
                <v-list-item link
                        v-for="subitem in item.children"
                        :key="subitem.id"
                >
                {{ subitem.title }}
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