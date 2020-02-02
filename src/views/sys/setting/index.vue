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
                <v-chip-group color="primary" mandatory >
                    <v-chip pill class="caption">全部</v-chip>
                    <v-chip pill class="caption">系统样式</v-chip>
                </v-chip-group>
            </div>
        </v-sheet>


        <v-row dense>
            <v-col cols="12" md="4">
                <v-card dark color="#1F7087">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="subtitle-1">OA服务</v-card-title>
                            <v-card-text class="overline">
                                <div>版本：jdk8.1</div>
                                <div>系统内存: 3789MB</div>
                                <div>剩余内存: 107MB</div>
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
                                <div>系统内存: 3789MB</div>
                                <div>剩余内存: 107MB</div>
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
                                <div>系统内存: 3789MB</div>
                                <div>剩余内存: 107MB</div>
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
    .btn-group{
        border-radius:36px; border: 1px solid #ddd; width: 325px;text-align: center;padding: 2px;
    }
</style>
