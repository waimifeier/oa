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
                            prepend-inner-icon="mdi-account-search"
                            hide-details
                            color="grey darken-1"
                            clear-icon="mdi-close-circle-outline"
              ></v-text-field>
          </div>
      </div>

      <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex align-center mt-2">
          <span class="caption font-weight-bold py-2 text-center" style="flex: 1">员工</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">联系方式</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">工龄</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">所属部门</span>
          <span class="caption font-weight-bold py-1 text-center"  style="flex: 1">复制</span>
      </v-card>

      <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex mt-1 align-center" v-for="item in all" :key="item.id">
          <div style="flex: 1;">
              <v-list-item class="py-0 ma-auto" dense>
                  <v-list-item-avatar :size="34">
                      <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content class="pa-0">
                      <v-list-item-title class="caption">{{item.name}}</v-list-item-title>
                      <v-list-item-subtitle class="caption">
                          <v-icon small left color="#169ffe">{{1===1 ? 'mdi-gender-male' : 'mdi-gender-female'}}</v-icon>
                      </v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </div>
          <span class="caption py-1 text-center" style="flex: 1">{{item.tell}}</span>
          <span class="caption py-1 text-center" style="flex: 1">{{item.workAge}} 年</span>
          <span class="caption py-1 text-center" style="flex: 1">{{item.department}}</span>
          <span class="caption py-1 text-center" style="flex: 1">
            <v-btn small text color="success">复制</v-btn>
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
