<template>
    <v-container>
        <span class="title">系统配置</span>
        <v-sheet color="transparent" md="5">
            <div class="d-flex justify-space-between">
                <v-chip-group color="primary" mandatory >
                    <v-chip pill class="caption">系统参数</v-chip>
                    <v-chip pill class="caption">OAuth授权</v-chip>
                    <v-chip pill class="caption">系统主题</v-chip>
                </v-chip-group>
                <v-chip-group color="primary" mandatory class="d-none">
                    <v-chip pill class="caption">全部</v-chip>
                    <v-chip pill class="caption">系统样式</v-chip>
                </v-chip-group>
            </div>
        </v-sheet>


        <v-row dense  >
            <v-col cols="12" md="4">
                <v-card dark color="#1F7087">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="subtitle-1">OA服务</v-card-title>
                            <v-card-text class="overline">
                                <div>版本：jdk8.1</div>
                                <div>jvm内存: 3789MB</div>
                                <div>jvm剩余内存: 107MB</div>
                            </v-card-text>
                        </div>


                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-progress-circular
                                    :rotate="-90"
                                    :size="100"
                                    :width="5"
                                    :value="12"
                                    color="teal"
                            >
                                cpu (12%)
                            </v-progress-circular>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card dark color="#009688">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="subtitle-1">授权服务</v-card-title>
                            <v-card-text class="overline">
                                <div>版本：jdk8.1</div>
                                <div>jvm内存: 3789MB</div>
                                <div>jvm剩余内存: 107MB</div>
                            </v-card-text>
                        </div>


                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-progress-circular
                                    :rotate="-90"
                                    :size="100"
                                    :width="5"
                                    :value="59"

                            >
                                cpu (59%)
                            </v-progress-circular>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card dark color="#1F7087">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="subtitle-1">资源服务</v-card-title>
                            <v-card-text class="overline">
                                <div>版本：jdk8.1</div>
                                <div>jvm内存: 3789MB</div>
                                <div>jvm剩余内存: 107MB</div>
                            </v-card-text>
                        </div>

                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-progress-circular
                                    :rotate="-90"
                                    :size="100"
                                    :width="5"
                                    :value="4"
                                    color="teal"
                            >
                                cpu (4%)
                            </v-progress-circular>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            <!--<v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
                    md="4"
                >
                    <v-card
                        :color="item.color"
                        dark
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                        class="subtitle-1"
                                        v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                            </div>

                            <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                            >
                                <v-img :src="item.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>-->

            </v-row>

        <v-row dense class="d-none">
            <v-col md="3">
                <v-card flat hover>
                    <v-img :aspect-ratio="16/9" v-ripple="{ center: true }"
                    >
                        <div
                                class="d-flex"
                                style="height: 100%;align-items: center;justify-content: center;"
                        >
                            <v-btn icon>
                                <v-icon large>mdi-plus</v-icon>
                            </v-btn>
                        </div>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="12" md="3"  >
                <v-hover v-slot:default="{ hover }">
                    <v-card flat>
                        <v-img
                                :aspect-ratio="16/9"
                                src="../../../assets/store.png"
                        >
                            <v-expand-transition>
                                <div
                                        v-if="hover"
                                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3"
                                        style="height: 100%;"
                                >
                                    <v-list-item dense color="white" dark>
                                        <v-list-item-content>
                                            <v-list-item-title class="body-1">电商系统</v-list-item-title>
                                            <v-list-item-subtitle>电商系统</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn icon>
                                                <v-icon color="grey lighten-1">mdi-information</v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
                <v-list-item dense>
                    <v-list-item-content>
                        <v-list-item-title class="body-2">电商系统</v-list-item-title>
                        <v-list-item-subtitle class="caption">2018/12/10</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-switch
                                v-model="ex11"
                                color="indigo"
                                hide-details
                        ></v-switch>
                    </v-list-item-action>
                </v-list-item>

            </v-col>
            <v-col cols="12" md="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card flat>
                        <v-img
                                :aspect-ratio="16/9"
                                src="https://img.zcool.cn/community/0138eb5c36fdb0a8012090db2e28d0.jpg@2o.jpg"
                        >
                            <v-expand-transition>
                                <div
                                        v-if="hover"
                                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3"
                                        style="height: 100%;"
                                >

                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
                <v-list-item dense>
                    <v-list-item-content>
                        <v-list-item-title class="body-2">任务调度系统</v-list-item-title>
                        <v-list-item-subtitle class="caption">2019/09/30</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-switch
                                v-model="ex11"
                                color="indigo"
                                hide-details
                        ></v-switch>
                    </v-list-item-action>
                </v-list-item>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "index",
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: '系统资源',
                    artist: 'Foster the People',
                },
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: '系统资源',
                    artist: 'Foster the People',
                },
                {
                    color: '#952175',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Halcyon Days',
                    artist: 'Ellie Goulding',
                },]
        })
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .8;
        position: absolute;
        width: 100%;
    }
</style>
