<template>
  <div class="app-container container">
      <div class="d-flex justify-space-between">
          <span class="subtitle-1 font-weight-bold">通讯录</span>
          <div style="width: 200px;">
              <v-text-field
                            single-line
                            filled
                            rounded
                            dense
                            clearable
                            placeholder="搜索联系人"
                            prepend-inner-icon="mdi-magnify"
                            hide-details
                            color="grey darken-1"
                            clear-icon="mdi-close-circle-outline"
              ></v-text-field>
          </div>
      </div>

   <!--   <v-sheet class="mt-2">
          <v-tabs slider-size="1">
              <v-tabs-slider></v-tabs-slider>
              <v-tab>全部</v-tab>
              <v-tab-item style="width: 400px;">
                  <v-hover
                          v-slot:default="{ hover }"
                          v-for="item in all" :key="item.id"
                  >
                      <v-list-item :key="item.id">
                          <v-list-item-avatar>
                              <v-img :src="item.avatar"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                              <v-list-item-title class="overline" v-text="item.name"></v-list-item-title>
                              <v-list-item-subtitle class="caption" v-text="item.tell"></v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-icon v-if="hover">
                              <v-tooltip left>
                                  <template v-slot:activator="{ on }">
                                      <v-btn icon small v-on="on">
                                          <v-icon small>mdi-content-copy</v-icon>
                                      </v-btn>
                                  </template>
                                  复制
                              </v-tooltip>
                          </v-list-item-icon>
                      </v-list-item>
                  </v-hover>
              </v-tab-item>

              <v-tab>部门</v-tab>
              <v-tab-item>
                  <v-list-item>
                      <v-list-item-avatar>
                          <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                          <v-list-item-title class="overline">财务部</v-list-item-title>
                          <v-list-item-subtitle class="caption">云南公司</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-icon>
                          <v-icon>mdi-content-copy</v-icon>
                      </v-list-item-icon>
                  </v-list-item>
              </v-tab-item>
          </v-tabs>
      </v-sheet>-->

      <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex align-center mt-2">
          <span class="caption font-weight-bold py-2 text-center" style="flex: 1">员工</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">工龄</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">所属部门</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">发送时间</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">复制</span>
      </v-card>

      <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex mt-1 align-center" v-for="item in all" :key="item.id">
          <span class="caption py-1 " style="flex: 1">
              <v-list-item class="py-0 ma-0 ml-9" dense>
                 <v-list-item-avatar>
                     <v-img :src="item.avatar"></v-img>
                 </v-list-item-avatar>
                  <v-list-item-content>
                      <v-list-item-title class="caption">{{item.name}}</v-list-item-title>
                       <v-list-item-subtitle class="caption">{{item.tell}}</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </span>
          <span class="caption py-1 text-center" style="flex: 1">{{item.workAge}} 年</span>
          <span class="caption py-1 text-center" style="flex: 1">{{item.department}}</span>
          <span class="caption py-1 text-center" style="flex: 1">{{item.time}}</span>
          <span class="caption py-1 text-center" style="flex: 1">
                        <v-btn small text color="red">取消</v-btn>
                    </span>
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
        all: [
            {id:1,avatar:'https://cdn.vuetifyjs.com/images/lists/1.jpg',name:'张三', tell:'1929923932',workAge:'1.2',department: '财务部'},
            {id:2,avatar:'https://cdn.vuetifyjs.com/images/lists/2.jpg',name:'李司棋', tell:'1529923242',workAge:'4.5',department: '财务部'},
            {id:3,avatar:'https://cdn.vuetifyjs.com/images/lists/3.jpg',name:'王刚', tell:'1479923932',workAge:'0.2',department: '财务部'},
            {id:4,avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'五私', tell:'1829923952',workAge:'5.2',department: '财务部'},
            {id:5,avatar:'https://cdn.vuetifyjs.com/images/lists/5.jpg',name:'刘得华', tell:'1479923932',workAge:'1.2',department: '财务部'},
            {id:6,avatar:'https://cdn.vuetifyjs.com/images/lists/2.jpg',name:'张三丰', tell:'1599923999',workAge:'4.5',department: '财务部'},
            {id:7,avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',name:'张无忌', tell:'13822929332',workAge:'0.8',department: '财务部'},
        ],
    }),
    inject: ['theme'],
}
</script>

<style scoped>

</style>
