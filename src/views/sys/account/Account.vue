<template>
    <div class="app-container container">
        <div class="d-flex justify-space-between align-center">
            <span class="subtitle-1 font-weight-bold">账号列表</span>
            <div>
                <v-btn text small @click="filterSearch = !filterSearch" color="primary">
                    筛选 <v-icon right v-text=" filterSearch ? 'mdi-chevron-down' :'mdi-chevron-up'"></v-icon>
                </v-btn>
                <v-btn color="primary" small rounded @click="addAccount(null)">
                    <v-icon left>mdi-plus</v-icon>
                    创建账号
                </v-btn>
            </div>
        </div>

        <v-sheet class="d-flex mt-2 justify-space-between">
            <v-card flat loader-height="1" width="260" min-height="400" class="mr-5 hidden-sm-and-down">
                <v-card class="pa-2" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../../assets/svg/undraw_friends_online_klj6.svg" width="70" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black"> 账号状态 </v-list-item-title>
                                <v-list-item-subtitle class="caption">系统当前在线 2 人。</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon small v-on="on"><v-icon small class="white--text">mdi-chevron-down-circle</v-icon></v-btn>
                                    </template>
                                    <v-list dense>
                                        <v-list-item>
                                            <v-list-item-title class="caption">创建日程</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="caption">管理日程</v-list-item-title>
                                                <v-list-item-subtitle class="caption" >删除我的日程</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                </v-card>
                <v-list nav dense flat >
                    <v-subheader > 账号状态  </v-subheader>
                    <v-list-item-group color="primary" v-model="accountState" group="23" >
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon :size="18" color="deep-purple accent-2">mdi-account-supervisor</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption">全部</v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="132" color="success" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>

                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon :size="18" color="orange darken-1">mdi-account-arrow-right</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption"> 待分配 </v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="5" color="teal" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon :size="18" color="blue-grey lighten-3">mdi-account-cancel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption"> 已禁用 </v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="3" color="orange" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-subheader> 回收站 </v-subheader>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon :size="18" color="red lighten-1">mdi-account-off</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="caption"> 已删除 </v-list-item-title>
                            <v-list-item-icon>
                                <v-badge left content="0" color="error" offset-x="10" offset-y="20"></v-badge>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
            <div style="width: 100%;" class="mt-2">
                <v-expand-transition>
                    <div class="d-flex align-center justify-space-between" v-if="filterSearch">
                        <div style="width: 260px;" class="ml-2">
                            <v-text-field
                                    single-line
                                    filled
                                    rounded
                                    dense
                                    clearable
                                    placeholder="搜索账号、昵称、手机号..."
                                    prepend-inner-icon="mdi-magnify"
                                    hide-details
                                    color="grey darken-1"
                                    clear-icon="mdi-close-circle-outline"
                            ></v-text-field>
                        </div>
                        <v-chip-group column active-class="primary--text" mandatory class="hidden-md-and-up">
                            <v-chip pill class="caption">全部</v-chip>
                            <v-chip pill class="caption">已禁用</v-chip>
                            <v-chip pill class="caption">待分配</v-chip>
                            <v-chip pill class="caption">已删除</v-chip>
                        </v-chip-group>
                    </div>
                </v-expand-transition>
                <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                ></v-data-table>
            </div>
        </v-sheet>

        <v-dialog v-model="dialog" persistent max-width="450px">
            <v-card :color="theme.isDark ? '' : '#FFF'">
                <v-card-title color="primary" class="subtitle-2 font-weight-bold">添加员工</v-card-title>
                <v-card-text class="mt-2">
                  <!--  <v-stepper vertical value="2">
                        <v-stepper-header flat class="elevation-0 px-0">
                            <v-stepper-step step="1">基本信息</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">
                                关联权限
                                <small>选择菜单资源</small>
                            </v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>-->
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                    >
                        <v-text-field
                                :rules="[v => !!v || '登陆账号不能为空']"
                                v-model="accountParams.account" dense outlined single-line clearable label="请输入登陆账号"></v-text-field>

                        <v-text-field
                                :rules="[v => !!v || '姓名不能为空']"
                                v-model="accountParams.nickname" dense outlined single-line clearable label="请输入姓名"></v-text-field>

                        <v-text-field
                                :rules="[v => !!v || '密码不能为空']" type="password"
                                v-model="accountParams.password" dense outlined single-line clearable label="请输入密码"></v-text-field>

                        <v-text-field :rules="[v => !!v || '请再次输入密码']" type="password"
                                       v-model="accountParams.repassword" dense outlined single-line clearable label="请再次输入密码"></v-text-field>

                        <v-btn small text class="caption" @click="dialogHidden = !dialogHidden">
                            更多设置
                            <v-icon right small v-text=" dialogHidden ? 'mdi-chevron-down' :'mdi-chevron-up'"></v-icon>
                        </v-btn>
                        <v-expand-transition>
                            <div class="d-flex align-center justify-space-between" v-if="dialogHidden" style="background: #f6f7fb;border-radius: 5px;">
                                <div style="width: 260px;" class="ml-2">
                                    <v-chip-group dense column active-class="primary--text" v-model="accountParams.gender" >
                                        <v-chip small value="male"> <v-icon small left color="#169ffe">mdi-gender-male</v-icon> 男</v-chip>
                                        <v-chip small value="female" ><v-icon small left color="#f16d84">mdi-gender-female</v-icon> 女</v-chip>
                                    </v-chip-group>
                                </div>
                            </div>
                        </v-expand-transition>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text small @click="dialog = false"> 取 消 </v-btn>
                    <v-btn small dark depressed color="#66bccb" class="white-text" @click="dialog = false"> 下一步 </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        inject: ['theme'],
        data: () => ({
            valid:false,
            dialog:false,

            dialogHidden:false,
            accountParams:{
                id:1,
                account:'',
                nickname:'',
                password:'',
                repassword:'',
                gender:'' ,
            },

            accountState:0,
            filterSearch:'',
            headers: [
                {
                    text: '账号 ',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: '昵称', value: 'calories' },
                { text: '手机号', value: 'fat' },
                { text: '邮箱', value: 'carbs' },
                { text: '时间', value: 'protein' },
                { text: '图标', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
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
        mounted() {
        },
        methods:{
            addAccount(){
                this.dialog = true
            },
            handlerClick(){
                // this.$confirm('是否禁用当前账号？')
                //         .then(res => {
                //   console.log(res)
                // })


                this.$dialog.message.error('已存在该账号！', {
                    position:'top'
                })


                // this.$dialog.notify.success('保存成功！', {
                //   timeout: 5000,
                // })

                // this.$dialog.confirm({
                //   text: '是否禁用当前账号?',
                //   actions: ['否', '是'],
                //   title:'警告'
                // })
                /* this.$dialog.warning  ({
                   text: '是否禁用当前账号?',
                   actions: ['否', '是'],
                   title:'警告'
                 })*/
            }
        },
        watch:{
            accountState(val){
                console.log(val)
            }
        }
    }
</script>
