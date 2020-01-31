<template>
    <v-tabs v-model="currentItem"
            background-color="transparent"
            show-arrows
            align-with-title
            center-active
            centered
            next-icon
    >
        <v-tabs-slider></v-tabs-slider>
        <template  v-for="item in items"  >
            <v-menu
                    transition="slide-y-reverse-transition"
                    allow-overflow
                    nudge-bottom="3"
                    internal-activator
                    eager
                    :close-on-content-click="true"
                    offset-y
                    close-delay="200"
                    :key="item.id"
                    v-if="item.children && item.children.length>1"
                   >
                <template v-slot:activator="{ on }">
                    <v-tab v-on="on" >
                        {{item.title}}
                        <v-icon :size="12" class="ml-2">mdi-chevron-down</v-icon>
                    </v-tab>

                </template>

                <v-list dense
                        min-width="120">

                    <v-list-item :to="subitem.link" color="primary"
                                 v-for="subitem in item.children"
                                 :key="subitem.id"
                    >

                        <v-list-item-icon class="mr-2">
                            <v-icon :size="14">{{subitem.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-subtitle v-html="subitem.title"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-tab v-else :key="item.id" :to="item.link">
                {{item.children ? item.children[0]['title'] : item.title}}
            </v-tab>
        </template>

    </v-tabs>

</template>

<script>
    import menuList from '@/config/resource.js'
export default {
    name: 'HorizontalNavigation',
    mounted(){
        console.log(this.items)
    },
    data: () => ({
        currentItem:"",
        items:menuList.map(item=>item.list).reduce((x,y)=>[...x,...y])
    })
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped>

</style>
