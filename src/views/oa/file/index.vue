<template>
    <div class="d-flex" style="min-height: 650px;">
        <v-card flat width="260" class="pa-1">
            <v-card-title> 文件管理 </v-card-title>
            <v-card-subtitle>系统占用 892M/128G
                <v-progress-linear
                        color="teal"
                        rounded
                        stream
                        value="100"
                        v-model="valueDeterminate"
                ></v-progress-linear>
            </v-card-subtitle>

            <v-list nav dense flat>
                <v-list-item-group color="primary">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon size="18">mdi-folder-open</v-icon>
                        </v-list-item-icon>
                        <v-list-content>
                            <v-list-title class="body-2">全部文件</v-list-title>
                        </v-list-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon size="18">mdi-folder-lock</v-icon>
                        </v-list-item-icon>
                        <v-list-content>
                             <v-list-title class="body-2">私密文件</v-list-title>
                        </v-list-content>
                    </v-list-item>

                    <v-subheader>传输列表</v-subheader>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon size="18">mdi-cloud-upload</v-icon>
                        </v-list-item-icon>
                        <v-list-content>
                            <v-list-title class="body-2">正在上传</v-list-title>
                        </v-list-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon size="18">mdi-cloud-download</v-icon>
                        </v-list-item-icon>
                        <v-list-content>
                            <v-list-title class="body-2">正在下载</v-list-title>
                        </v-list-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon size="18">mdi-cloud-check</v-icon>
                        </v-list-item-icon>
                        <v-list-content>
                            <v-list-title class="body-2">传输完成</v-list-title>
                        </v-list-content>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-card>
        <v-card flat style="width: 100%">
            <v-toolbar extended flat dense color="transparent">
                <v-btn color="primary" depressed small>
                    <v-icon left>mdi-cloud-upload</v-icon>
                    上传文件
                </v-btn>

                <v-btn text outlined small class="ml-2">
                    <v-icon left>mdi-folder-plus-outline</v-icon>
                    新建文件
                </v-btn>

                <v-btn text outlined small class="ml-2">
                    <v-icon left>mdi-cloud-download</v-icon>
                    下载
                </v-btn>

                <v-btn text outlined small class="ml-4">
                    更多
                    <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn-toggle dense color="primary">
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
                    <span class="caption">已加载全部, 共1个</span>
                </template>
            </v-toolbar>


        </v-card>
    </div>
</template>

<script>
export default {
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
