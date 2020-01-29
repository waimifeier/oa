<template>
  <v-row>
    <v-col cols="12" sm="3">
      <v-card class="mx-auto" loader-height="1" flat  width="240" min-height="400">
        <v-list rounded dense>
        <v-list-item three-line>
          <v-list-item-avatar>
            <v-btn icon>
              <v-icon :size="30" color="primary">mdi-account-multiple-plus</v-icon>
            </v-btn>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
                新增账号
            </v-list-item-title>
            <v-list-item-subtitle>
                系统当前在线 2 人
            </v-list-item-subtitle>

          </v-list-item-content>
        </v-list-item>

        <v-subheader> 账号状态  </v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon :size="20">mdi-account-supervisor</v-icon>
            </v-list-item-icon>
              <v-list-item-title>全部</v-list-item-title>
              <v-list-item-icon>
                  <v-badge left content="132" color="success" offset-x="10" offset-y="20"></v-badge>
              </v-list-item-icon>

          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon :size="20">mdi-account-arrow-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title> 待分配 </v-list-item-title>
            <v-list-item-icon>
              <v-badge left content="5" color="teal" offset-x="10" offset-y="20"></v-badge>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon :size="20">mdi-account-cancel</v-icon>
            </v-list-item-icon>
            <v-list-item-title> 已禁用 </v-list-item-title>
            <v-list-item-icon>
              <v-badge left content="3" color="orange" offset-x="10" offset-y="20"></v-badge>
            </v-list-item-icon>
          </v-list-item>

          <v-subheader> 回收站 </v-subheader>
          <v-list-item>
            <v-list-item-icon>
              <v-icon :size="20">mdi-account-off</v-icon>
            </v-list-item-icon>
            <v-list-item-title> 已删除 </v-list-item-title>
            <v-list-item-icon>
              <v-badge left content="0" color="error" offset-x="10" offset-y="20"></v-badge>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="9">

<!--        <div style="border-radius:36px; border: 1px solid #ddd; width: 320px;text-align: center;padding: 2px;">-->
<!--            <v-btn-toggle rounded dense borderless color="teal" >-->
<!--                <v-btn outlined rounded  min-width="80">全部</v-btn>-->
<!--                <v-btn outlined rounded min-width="80"> 已禁用</v-btn>-->
<!--                <v-btn outlined rounded min-width="80">待分配</v-btn>-->
<!--                <v-btn outlined rounded min-width="80">已删除</v-btn>-->
<!--            </v-btn-toggle>-->
<!--        </div>-->
        <v-btn color="info" @click="handlerClick">
          click
        </v-btn>

      <v-card-title>
        账号列表
        <v-spacer></v-spacer>
        <v-text-field
                single-line
                filled
                rounded
                dense
                clearable
                placeholder="搜索账号、昵称、手机号"
                prepend-inner-icon="mdi-magnify"
                hide-details
                color="grey darken-1"
                clear-icon="mdi-close-octagon-outline"
        ></v-text-field>
      </v-card-title>
      <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data: () => ({
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
      handlerClick(){
        this.$message({text:'测试0001 ',color:'info'})
      }
    }
}
</script>
