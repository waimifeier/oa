<template>
    <div>
        <span class="title">系统配置</span>
        <v-sheet color="transparent" dense>
            <v-btn-toggle group borderless dense color="primary" style="background-color: transparent;">
                <v-btn text >系统配置</v-btn>
                <v-btn text> 系统样式</v-btn>
                <v-btn text>Left</v-btn>
            </v-btn-toggle>
        </v-sheet>
<!--        <div class="btn-group">-->
<!--            <v-btn-toggle rounded dense borderless color="primary" >-->
<!--                <v-btn outlined rounded  min-width="80">系统样式 </v-btn>-->
<!--                <v-btn outlined rounded min-width="80"> 系统参数 </v-btn>-->
<!--                <v-btn outlined rounded min-width="80">待分配</v-btn>-->
<!--                <v-btn outlined rounded min-width="80">已删除</v-btn>-->
<!--            </v-btn-toggle>-->
<!--        </div>-->

        <v-list dense nav two-line max-width="220">
            <v-list-item>
                <v-list-item-icon>
                    <v-icon small>mdi-passport-biometric</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title> 系统配置 </v-list-item-title>
                    <v-list-item-subtitle> 系统占用率，系统所有 </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon small>mdi-passport-biometric</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title> 系统样式 </v-list-item-title>
                    <v-list-item-subtitle> 修改背景图片 </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon small>mdi-passport-biometric</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>  </v-list-item-title>
                    <v-list-item-subtitle> 修改背景图片 </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon small>mdi-passport-biometric</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>系统样式</v-list-item-title>
                    <v-list-item-subtitle> 修改背景图片 </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .btn-group{
        border-radius:36px; border: 1px solid #ddd; width: 325px;text-align: center;padding: 2px;
    }
</style>
