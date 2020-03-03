<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <div>
                <span class="subtitle-1 font-weight-bold mr-6">消息中心</span>
                <v-btn small text class="caption" color="primary">草稿 (0)</v-btn>
            </div>
            <div>
                <v-btn text small @click="filterContainer = !filterContainer" color="primary">
                    筛选 <v-icon right v-text=" filterContainer ? 'mdi-chevron-up' :'mdi-chevron-down'"></v-icon>
                </v-btn>
                <v-btn color="primary" small rounded @click="addMessage(null)">
                    <v-icon left>mdi-plus</v-icon>
                    新建消息
                </v-btn>
            </div>
        </div>

        <div class="d-flex mt-2 justify-space-between">
            <div style="width: 100%;">
                <v-expand-transition>
                    <div class="d-flex align-center justify-space-between" v-if="filterContainer">
                        <div style="width: 200px;">
                            <v-text-field
                                    single-line
                                    filled
                                    rounded
                                    dense
                                    clearable
                                    placeholder="搜索消息标题..."
                                    prepend-inner-icon="mdi-comment-search-outline"
                                    hide-details
                                    color="grey darken-1"
                                    clear-icon="mdi-close-circle-outline"
                            ></v-text-field>
                        </div>
                        <v-chip-group column active-class="primary--text" mandatory v-model="timeState">
                            <v-chip class="caption">全部</v-chip>
                            <v-chip class="caption">待发送</v-chip>
                            <v-chip class="caption">已发送</v-chip>
                        </v-chip-group>
                    </div>
                </v-expand-transition>
                <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex">
                    <span class="caption font-weight-bold py-2 text-center" style="flex: 1">标题</span>
                    <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">创建者</span>
                    <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">发送状态</span>
                    <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">发送时间</span>
                    <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">操作</span>
                </v-card>

                <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex mt-1 align-center" v-for="item in messageList" :key="item.id">
                    <span class="caption py-1 text-center" style="flex: 1">{{item.title}}</span>
                    <span class="caption py-1 text-center" style="flex: 1">{{item.author}}</span>
                    <span class="caption py-1 text-center" style="flex: 1">{{item.state}}</span>
                    <span class="caption py-1 text-center" style="flex: 1">{{item.time}}</span>
                    <span class="caption py-1 text-center" style="flex: 1">
                        <v-btn small text color="red">取消</v-btn>
                    </span>
                </v-card>

                <v-pagination
                        circle
                        class="mt-1"
                        v-model="page"
                        :length="15"
                        :total-visible="7"
                ></v-pagination>
            </div>

            <v-card flat class="pa-0 hidden-sm-and-down ml-5" width="365" :color="theme.isDark ? '' : '#FFF'">
                <v-card class="d-flex justify-space-between pa-3" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark style="height: 100px;">
                    <v-img src="../../../assets/svg/undraw_profile_data_mk6k.svg" width="120" contain/>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="caption font-weight-black">消息模版</v-list-item-title>
                            <v-list-item-subtitle class="caption">您可以在这里管理消息模版。 <!--<v-btn small text>立即使用</v-btn>--></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon small v-on="on"><v-icon small class="white--text">mdi-chevron-down-circle</v-icon></v-btn>
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
                </v-card>
                <div class="d-flex flex-wrap" style="width: 360px;">
                    <v-card flat width="164" class="card-border ma-2 pa-1" v-for="item in messageTemplate" :key="item.id">
                        <v-list-item-content>
                            <v-list-item-title class="caption" v-text="item.name"></v-list-item-title>
                            <v-list-item-subtitle class="d-inline-block text-truncate caption text--secondary" v-text="item.describe"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-card-actions class="task">
                            <v-btn text color="primary">发布</v-btn>
                            <v-btn text color="primary">移出</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-card>
        </div>

        <v-dialog v-model="dialog" persistent max-width="450px">
            <v-card>
                <v-toolbar dark flat color="primary">
                    <v-card-title color="primary" class="subtitle-2 font-weight-bold">添加系统消息</v-card-title>
                </v-toolbar>
                <v-card-text>
                    <v-stepper vertical value="2">
                        <v-stepper-header flat class="elevation-0 px-0">
                            <v-stepper-step step="1">基本信息</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">
                                关联权限
                                <small>选择菜单资源</small>
                            </v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                    <v-text-field label="消息标题" required></v-text-field>
                    <v-text-field label="消息内容" required></v-text-field>
                    <v-row>
                        <v-rol>
                            <span class="subtitle-2">发送时间:</span>
                            <v-text-field label="发送时间" required></v-text-field>

                        </v-rol>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary darken-1" text @click="dialog = false"> 取 消 </v-btn>
                    <v-btn color="primary " text @click="dialog = false"> 下一步 </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "Message",
    data:()=>({
        filterContainer:false,
        dialog:false,
        page:2,
        messageTemplate:[
            {id:1,name:'放假通知' , describe:'放假通知',time:'',},
            {id:2,name:'员工公告' , describe: '员工手册员工手册员工手册员工手册员工手册' },
            {id:3,name:'员工公告' , describe: 'ass' },
            {id:5,name:'员工公告' , describe: '员工手册员工手册员工手册员工手册员工手册' },
            {id:6,name:'员工公告' , describe: '开会' },
            {id:7,name:'系统停用' , describe: '开会' }
        ],

        messageList:[
            {id:1,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
            {id:2,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
            {id:3,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
            {id:4,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'待发送'},
            {id:5,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
        ]
    }),
    inject: ['theme'],
    methods:{
        templateManager(){
            console.log(this.theme.isDark)
        },

        addMessage(){
            this.dialog = true
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
     background: #242e42;
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
