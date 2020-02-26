<template>
    <div class="app-container container">
        <div class="d-flex justify-space-between mb-1">
            <div>
                <span class="subtitle-1 font-weight-bold">我的工单</span>
                <v-btn small text class="caption ml-4">草稿(1)</v-btn>
            </div>

            <v-dialog v-model="dialog" width="500" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on }">
                    <v-btn small rounded color="primary" v-on="on" >
                        <v-icon left>mdi-plus</v-icon>创建工单
                    </v-btn>
                </template>

                <v-card dense>
                    <div class="d-flex justify-space-between align-center pa-3">
                        <span class="subtitle-2 font-weight-bold">新建工单</span>
                        <div class="align-self-end">
                            <v-btn small text v-if="1===2"><v-icon small left>mdi-account-multiple-plus</v-icon> 选择审核人</v-btn>
                            <v-avatar size="30">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                            </v-avatar>
                            <v-btn icon size="18"><v-icon small>mdi-plus</v-icon></v-btn>
                        </div>
                    </div>
                    <v-divider></v-divider>

                    <div class="d-flex align-center mx-4 my-2">
                        <span class="caption font-weight-bold" style="width: 80px;">工单类型:</span>
                        <v-select
                                class="elevation-0"
                                :items="items"
                                label="请选择工单状态"
                                solo
                                dense
                                rounded
                                hide-details
                                full-width="100"
                        ></v-select>
                    </div>

                    <div class="d-flex mx-4 my-2">
                        <span class="caption font-weight-bold" style="width: 80px;">工单类型:</span>
                        <span class="caption">2020-02-23 18:00</span>
                    </div>


                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary"  @click="dialog = false" > 取消 </v-btn>
                        <v-btn text color="primary"  @click="dialog = false" > 保存 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>

        <div class="d-flex align-center justify-space-between mb-1">
            <v-chip-group column active-class="primary--text" mandatory v-model="state">
                <v-chip class="caption">所有</v-chip>
                <v-chip class="caption">待审核</v-chip>
                <v-chip class="caption">处理中</v-chip>
                <v-chip class="caption">已经完成</v-chip>
                <v-chip class="caption">已驳回</v-chip>
            </v-chip-group>
            <div>
                <v-btn-toggle tile group mandatory color="primary" v-model="timeState">
                    <v-btn small text class="caption">今天</v-btn>
                    <v-btn small text class="caption">本周</v-btn>
                    <v-btn small text class="caption">本月</v-btn>
                </v-btn-toggle>
                |
                <v-btn small text class="caption">自定义</v-btn>
            </div>
        </div>

        <v-row>
            <v-col md="3" v-for="(item,index) in 3" :key="index">
                <v-card flat :color="theme.isDark ? '' : '#FFF'">
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-avatar size="30" color="red lighten-2" class="white--text"> 急 </v-avatar>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-2">请假单</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-menu transition="slide-y-transition" bottom >
                                    <template v-slot:activator="{ on }">
                                        <v-btn v-on="on" icon small><v-icon small>mdi-dots-vertical</v-icon></v-btn>
                                    </template>
                                    <v-list dense nav>
                                        <v-list-item @click="getBackOrder">
                                            <v-list-item-title>取回</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click="modifyOrder">
                                            <v-list-item-title>修改</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title>详情</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                        <v-card-text >
                            Visit ten places on our planet that are undergoing the biggest changes today.
                        </v-card-text>

                        <div class="d-flex mx-4 my-2">
                            <span class="caption" style="width: 80px;">发起时间:</span>
                            <span class="caption">2020-02-23 18:00</span>
                        </div>

                        <div class="d-flex mx-4 my-2 align-center">
                            <span class="caption" style="width: 80px;"> 当前进度: </span>
                            <v-progress-linear value="33" rounded stream buffer-value="0" striped style="width: 130px;"></v-progress-linear>
                        </div>

                        <div class="d-flex align-center mx-4 my-2">
                            <span class="caption" style="width: 80px;">参与者:</span>
                            <div class="caption">
                                <v-avatar size="30">
                                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                                </v-avatar>
                            </div>
                        </div>
                        <v-card-actions>

                        </v-card-actions>
                    </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    export default {
        name: "Order",
        inject: ['theme'],
        data:()=>({
            timeState:0,
            state:0,
            dialog:false,
            dialog1:true,
            items: ['所有', '已提交', '处理中', '已驳回']
        }),
        methods:{
            getBackOrder(){

            },

            modifyOrder(){

            }
        }
    }
</script>

<style scoped>

</style>
