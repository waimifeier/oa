<template>
    <div class="app-container container">
        <span class="subtitle-1 font-weight-bold">菜单配置</span>
        <v-card flat width="300">
            <v-sheet class="pa-4 primary lighten-1">
                <v-text-field
                        v-model="search"
                        label="搜索菜单名称"
                        dark
                        rounded
                        dense
                        flat
                        solo-inverted
                        hide-details
                        clearable
                        clear-icon="mdi-close-circle-outline"
                ></v-text-field>
            </v-sheet>
            <v-treeview
                    :search="search"
                    dense
                    transition
                    activatable
                    open-on-click
                    open-all
                    :items="items"
            >
                <template v-slot:prepend="{ item, open }">
                    <v-icon small color="primary" v-text="item.icon">
                    </v-icon>
                </template>
            </v-treeview>
        </v-card>
    </div>
</template>

<script>
import menuList from '@/config/resource.js'
export default {
    data: () => ({
        search:"",
        icons:{
            company:'',
            department:''
        },
        items: menuList,
    }),
}
</script>

<style scoped>

</style>
