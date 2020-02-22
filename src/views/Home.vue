<template>
    <div class="app-container container">
      <span class="subtitle-1 font-weight-bold">首页</span>
      <v-row>
          <v-col cols="12" md="4">
            <v-card >
                <v-list class="pa-0" subheade >
                    <v-list-item>
                        <v-list-item-icon class="mr-0">
                            <v-icon small> mdi-flag </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="body-2 font-weight-bold"> 晚上聚会吃什么？</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-action-text class="caption">58人参与投票</v-list-item-action-text>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item-group class="pa-2">
                        <v-list-item>
                            <template v-slot:default="{ active }">
                                <v-list-item-action>
                                    <v-checkbox dense v-model="active" label="火锅"></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-progress-linear
                                                rounded
                                                v-model="valueDeterminate"
                                                color="deep-purple accent-4"
                                        ></v-progress-linear>
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>12人</v-list-item-action-text>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template v-slot:default="{ active }">
                                <v-list-item-action>
                                    <v-checkbox dense v-model="active" label="自助海鲜"></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-progress-linear
                                                rounded
                                                v-model="valueDeterminate"
                                                color="pink"
                                        ></v-progress-linear>
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>52人</v-list-item-action-text>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template v-slot:default="{ active }">
                                <v-list-item-action >
                                    <v-checkbox dense v-model="active" label="麻辣烧烤"></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-progress-linear
                                                rounded
                                                v-model="valueDeterminate"
                                                color="success"
                                        ></v-progress-linear>
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>4人</v-list-item-action-text>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <v-card-actions style="justify-content: center">
                    <v-btn text small color="primary">
                        <v-icon left v-text="1===1? 'mdi-thumb-up-outline': 'mdi-thumb-up'"></v-icon>
                        确认投票
                    </v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
             asdfasdfsfd
          </v-col>
      </v-row>


      <v-speed-dial
              v-model="fab"
              direction="top"
              right
      >
          <template v-slot:activator>
              <v-btn
                      v-model="fab"
                      color="blue darken-2"
                      dark
                      fab
              >
                  <v-icon v-if="fab">mdi-close</v-icon>
                  <v-icon v-else>mdi-account-circle</v-icon>
              </v-btn>
          </template>
          <v-btn
                  fab
                  dark
                  small
                  color="green"
          >
              <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
                  fab
                  dark
                  small
                  color="indigo"
          >
              <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
                  fab
                  dark
                  small
                  color="red"
          >
              <v-icon>mdi-delete</v-icon>
          </v-btn>
      </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'home',
    data:()=>({
        active:false,
        valueDeterminate:20
    })

}
</script>
