<template>
    <div class="app-container container">
        <span class="title">文件管理</span>
        <v-row>
            <v-col md="3" class="hidden-sm-and-down pa-0">
                <v-card flat width="225">
                    <v-card-subtitle>系统占用 892M/128G
                        <v-progress-linear
                                color="teal"
                                rounded
                                stream
                                height="2"
                                value="100"
                                v-model="valueDeterminate"
                        ></v-progress-linear>
                    </v-card-subtitle>
                    <v-list dense flat>
                        <v-list-item-group color="primary">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="18">mdi-folder-open</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="caption">全部文件</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="18">mdi-folder-lock</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="caption">私密文件</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-subheader>传输列表</v-subheader>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="18">mdi-cloud-upload</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="caption">正在上传</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="18">mdi-cloud-download</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="caption">正在下载</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon>
                                    <v-progress-circular
                                            :value="20"
                                            size="20"
                                            width="2"
                                    ></v-progress-circular>
                                </v-list-item-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="18">mdi-cloud-check</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="caption">传输完成</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon>
                                    <v-badge
                                            color="success"
                                            content="6"
                                            offset-y="22"
                                            offset-x="-1"
                                    >
                                    </v-badge>
                                </v-list-item-icon>
                            </v-list-item>

                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
            <v-col class="pa-0">
                <v-toolbar extended flat dense color="transparent" class="pa-0">
                    <v-btn color="primary" depressed small>
                        <v-icon left>mdi-cloud-upload</v-icon>
                        上传文件
                    </v-btn>

                    <v-btn text outlined small class="ml-2 hidden-xs-only">
                        <v-icon left>mdi-folder-plus-outline</v-icon>
                        新建文件
                    </v-btn>

                    <v-btn text outlined small class="ml-2">
                        <v-icon left>mdi-cloud-download</v-icon>
                        下载
                    </v-btn>

                    <v-btn text outlined small class="ml-2 hidden-xs-only">
                        更多
                        <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn-toggle dense color="primary" class="hidden-xs-only">
                        <v-btn small>
                            <v-icon>mdi-view-headline</v-icon>
                        </v-btn>
                        <v-btn small>
                            <v-icon left>mdi-view-grid-outline</v-icon>
                        </v-btn>
                    </v-btn-toggle>

                    <v-btn small text outlined class="ml-1">
                        <v-icon small>mdi-restart</v-icon>
                    </v-btn>

                    <template v-slot:extension style="height: 30px;">
                        <v-breadcrumbs :items="items" divider=">" style="padding: 0;"></v-breadcrumbs>
                        <v-spacer></v-spacer>
                        <span class="caption">已加载全部, 共0个</span>
                    </template>
                </v-toolbar>
                <EmptyContent></EmptyContent>
            </v-col>
        </v-row>
    </div>

    <!--<div class="app-container container">
        <span class="title">文件管理</span>
        <v-sheet flat class="d-flex">
            <v-card flat width="225" class="mr-6 hidden-sm-and-down">
                <v-card-subtitle>系统占用 892M/128G
                    <v-progress-linear
                            color="teal"
                            rounded
                            stream
                            height="2"
                            value="100"
                            v-model="valueDeterminate"
                    ></v-progress-linear>
                </v-card-subtitle>
                <v-list dense flat>
                    <v-list-item-group color="primary">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon size="18">mdi-folder-open</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="caption">全部文件</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon size="18">mdi-folder-lock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="caption">私密文件</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-subheader>传输列表</v-subheader>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon size="18">mdi-cloud-upload</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="caption">正在上传</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon size="18">mdi-cloud-download</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="caption">正在下载</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-progress-circular
                                        :value="20"
                                        size="20"
                                        width="2"
                                ></v-progress-circular>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon size="18">mdi-cloud-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="caption">传输完成</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-badge
                                        color="success"
                                        content="6"
                                        offset-y="22"
                                        offset-x="-1"
                                >
                                </v-badge>
                            </v-list-item-icon>
                        </v-list-item>

                    </v-list-item-group>
                </v-list>
            </v-card>
            <div style="width:100%;">
                <div class="d-flex justify-space-between mt-2">
                    <v-btn color="primary" depressed small>
                        <v-icon left>mdi-cloud-upload</v-icon>
                        上传文件
                    </v-btn>

                    <v-btn text outlined small class="ml-2 hidden-xs-only">
                        <v-icon left>mdi-folder-plus-outline</v-icon>
                        新建文件
                    </v-btn>

                    <v-btn text outlined small class="ml-2">
                        <v-icon left>mdi-cloud-download</v-icon>
                        下载
                    </v-btn>

                    <v-btn text outlined small class="ml-2 hidden-xs-only">
                        更多
                        <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn-toggle dense color="primary" class="hidden-xs-only">
                        <v-btn small>
                            <v-icon>mdi-view-headline</v-icon>
                        </v-btn>
                        <v-btn small>
                            <v-icon left>mdi-view-grid-outline</v-icon>
                        </v-btn>
                    </v-btn-toggle>

                    <v-btn small text outlined class="ml-1">
                        <v-icon small>mdi-restart</v-icon>
                    </v-btn>
                </div>
                <div class="d-flex justify-space-around" style="line-height: 48px;">
                    <v-breadcrumbs :items="items" divider=">" style="padding: 0;"></v-breadcrumbs>
                    <v-spacer></v-spacer>
                    <span class="caption align-self-center">已加载全部, 共0个</span>
                </div>
                <EmptyContent></EmptyContent>
            </div>
        </v-sheet>
    </div>-->
</template>

<script>
import EmptyContent from '@/components/empty_content/EmptyContent.vue'
export default {
    components:{EmptyContent},
    data: () => ({
        valueDeterminate:13,
        items: [
            {
                text: '全部文件',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
            {
                text: '系统文件',
                disabled: false,
                href: 'breadcrumbs_link_1',
            },
            {
                text: '公文',
                disabled: true,
                href: 'breadcrumbs_link_2',
            },
        ],
    }),
}
</script>

<style scoped>

</style>
