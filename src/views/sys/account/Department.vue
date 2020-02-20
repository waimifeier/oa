<template>
    <div class="app-container container">
        <span class="title">部门管理</span>
        <v-card flat width="300">
            <v-sheet class="pa-4 primary lighten-1">
                <v-text-field
                        v-model="search"
                        label="搜索部门名称"
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
                    <v-icon small color="primary">
                        {{ item.code==='COMPANY' ? 'mdi-home-analytics' : 'mdi-lan' }}
                    </v-icon>
                </template>
            </v-treeview>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            search:"",
            icons:{
                company:'',
                department:''
            },
            items: [
                {
                    id: 1,
                    name: '昆明怡泰祥珠宝有限公司',
                    code:'COMPANY',
                    children: [
                        {
                            id: 2,
                            name: '销售部',
                            code:'DEPARTMENT' ,
                            children:[
                                { id: 5, name: '销售一组', code:'DEPARTMENT'},
                                { id: 6, name: '销售二组', code:'DEPARTMENT'},
                            ]
                        },
                        { id: 3, name: '人事部', code:'DEPARTMENT'},
                        { id: 4, name: '财务部',  code:'DEPARTMENT'},
                    ],
                }
            ],
        }),
    }
</script>

<style scoped>

</style>
