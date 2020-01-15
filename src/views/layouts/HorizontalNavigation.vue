<template>
    <v-tabs v-model="currentItem" background-color="transparent"  show-arrows  align-with-title>
      <!--  <v-tab  v-for="item in items"
                :key="item.id"
                :to="item.to"
        >
            {{ item.title }}

            <v-menu v-if="item.children.length" bottom left>
                <template v-slot:activator="{ on }">
                    <v-btn text class="align-self-center mr-4" v-on="on" >
                        more
                    <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                </template>

                <v-list class="grey lighten-3">
                    <v-list-item
                            v-for="item in more"
                            :key="item"
                    @click="addItem(item)"
                    >
                    {{ item }}
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-tab>-->

        <v-tabs-slider></v-tabs-slider>
        <v-tab  v-for="item in items"
                :key="item.id"
                :to="item.to"
        >

            {{ item.title }}

        </v-tab>

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
                    }
                ]
            },
            {
                id:3,
                title: '系统管理',
                icon:'' ,
                to: '/home',
                children:[]
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

<style rel="stylesheet/scss" lang="scss" scoped>

</style>