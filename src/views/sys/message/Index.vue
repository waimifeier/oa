<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <div>
                <span class="subtitle-1 font-weight-bold">消息中心</span>
                <span class="caption ml-3">|</span>
                <v-btn text small @click="filterContainer = !filterContainer">
                    筛选 <v-icon right v-text=" filterContainer ? 'mdi-chevron-down' :'mdi-chevron-up'"></v-icon>
                </v-btn>
            </div>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                新建消息
            </v-btn>
        </div>

        <v-expand-transition>
            <div class="d-flex align-center justify-space-between" v-if="filterContainer">
                <div style="width: 300px;">
                    <v-text-field
                            single-line
                            filled
                            rounded
                            dense
                            clearable
                            placeholder="搜索消息标题..."
                            prepend-inner-icon="mdi-magnify"
                            hide-details
                            color="grey darken-1"
                            clear-icon="mdi-close-circle-outline"
                    ></v-text-field>
                </div>
                <v-chip-group color="primary" mandatory >
                    <v-chip pill class="caption">所有/11</v-chip>
                    <v-chip pill class="caption">已发送/10</v-chip>
                    <v-chip pill class="caption">待发送/1</v-chip>
                </v-chip-group>
            </div>




        </v-expand-transition>

      <!--  <v-sheet class="d-flex mt-2 d-none">
            <v-card flat class="pa-0 hidden-sm-and-down mr-2" width="360">
                <v-list-item>
                    <v-list-item-avatar>
                        <svg id="loudspeaker" style="color: #324558;fill: #b6c2cd;" width="30" height="30" viewBox="0 0 24 24"><g fill-rule="evenodd"><path fill="currentColor" d="M11 7.167V20H9l-.966-6.625-2.289-.294A2 2 0 014 11.097V9.883a2 2 0 011.724-1.98L11 7.167zM19 9a1.5 1.5 0 010 3V9z"></path><path d="M11 7.167l4.02-2.546A4 4 0 0117.16 4H19v13h-1.814a4 4 0 01-2.18-.646L11 13.75V7.167z"></path></g></svg>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="body-2">消息模板</v-list-item-title>
                        <v-list-item-subtitle class="caption">当前可用模板数：12个</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn icon small   v-on="on"><v-icon small color="teal">mdi-chevron-down-circle</v-icon></v-btn>
                            </template>
                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-title class="caption">新建消息模版</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="templateManager()">
                                    <v-list-item-content>
                                        <v-list-item-title class="caption">模版管理</v-list-item-title>
                                        <v-list-item-subtitle class="caption">模版删除,修改</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-icon small>mdi-cube-send</v-icon>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                    </v-list-item-action>
                </v-list-item>

                <div class="d-flex flex-wrap" style="width: 360px;">
                    <v-card flat width="160" class="card-border ma-2 pa-1" v-for="item in messageTemplate" :key="item.id">
                        <v-list-item-content>
                            <v-list-item-title class="caption" v-text="item.name"></v-list-item-title>
                            <v-list-item-subtitle class="d-inline-block text-truncate caption text&#45;&#45;secondary" v-text="item.describe"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-card-actions class="task">
                            <v-btn text color="primary">发布</v-btn>
                            <v-btn text color="primary">移出</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-card>
            <div class="d-flex justify-space-between">

                <v-avatar tile size="100">
                    <v-img src="../../../assets/svg/undraw_message_sent_1030.svg" />
                </v-avatar>
            </div>
        </v-sheet>-->

        <div class="fill-height"  style="width: 100%;">
            <v-sheet class="d-none">
                <div class="d-flex justify-space-between">
                    <v-chip-group color="primary" mandatory >
                        <v-chip pill class="caption">所有/11</v-chip>
                        <v-chip pill class="caption">已发送/10</v-chip>
                        <v-chip pill class="caption">待发送/1</v-chip>
                    </v-chip-group>
                    <v-chip-group  mandatory>
                        <v-chip pill class="caption">📦 草稿箱</v-chip>
                    </v-chip-group>
                </div>
            </v-sheet>
            <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
            ></v-data-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    data:()=>({
        filterContainer:false,
        dialog:false,
        messageTemplate:[
            {id:1,name:'放假通知' , describe:'放假通知'},
            {id:2,name:'员工公告' , describe: '员工手册员工手册员工手册员工手册员工手册' },
            {id:3,name:'员工公告' , describe: 'ass' },
            {id:5,name:'员工公告' , describe: '员工手册员工手册员工手册员工手册员工手册' },
            {id:6,name:'员工公告' , describe: '开会' },
            {id:7,name:'系统停用' , describe: '开会' }
        ],
        headers: [
            {
                text: '标题',
                align: 'left',
                sortable: false,
                value: 'name',
            },
            { text: '内容', value: 'calories' },
            { text: '发送时间', value: 'fat' },
            { text: '发送状态', value: 'carbs' },
            { text: '操作', value: 'iron' },
        ],
        desserts: [
            {
                name: '放假通知',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%',
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%',
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%',
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%',
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%',
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%',
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%',
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%',
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%',
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
            },
        ],
    }),
    inject: ['theme'],
    methods:{
        templateManager(){
            alert(1);
        }
    }
}
</script>

<style scoped>
 .card-border{
     box-shadow: rgba(36, 46, 66, 0.06) 0 4px 8px 0;
     text-align: center;
     cursor: pointer;
     transition: all .3s ease-in-out;
 }
 .task{
     position: absolute;
     background: #222222;
     left: 0;
     top: 0;
     height: 100%;
     width: 100%;
     display: block;
     border-radius: 3px;
     transition: all .3s;
     line-height: 70px;
     opacity: 0;
 }
 .card-border:hover{
     cursor: pointer;
     transform: translateY(-3px) translate3d(0,0,0);
 }
 .card-border:hover .task{
     opacity: .8;
 }
</style>
