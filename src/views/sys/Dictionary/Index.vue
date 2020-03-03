<template>
    <div class="app-container container">
        <div class="d-flex align-center justify-space-between mb-1">
            <span class="subtitle-1 font-weight-bold">字典管理</span>
            <v-btn color="primary" small rounded>
                <v-icon left>mdi-plus</v-icon>
                新建字典
            </v-btn>
        </div>


            <v-sheet class=" mx-auto" color="primary" elevation="0" dark>
                <div class="d-flex align-center">
                     <span class="ml-2">
                         <v-img aspect-ratio="1" contain src="../../../assets/svg/undraw_Bibliophile_hwqc.svg" width="80" height="80"></v-img>
                    </span>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="caption">系统参数配置</v-list-item-title>
                            <v-list-item-subtitle class="caption">非运维、管理员请谨慎操作。</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <div style="width:300px;" class="mr-3">
                        <v-text-field
                                loader-height="1"
                                single-line
                                filled
                                rounded
                                dense
                                clearable
                                placeholder="搜索字典关键词..."
                                prepend-inner-icon="mdi-magnify"
                                hide-details
                                clear-icon="mdi-close-circle-outline"
                        ></v-text-field>
                    </div>
                </div>
            </v-sheet>

            <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex mt-1">
                <span class="caption font-weight-bold py-2 text-center" style="flex: 1">字典码</span>
                <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">值</span>
                <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">描述</span>
                <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">创建时间</span>
                <span class="caption font-weight-bold py-2 text-center"  style="flex: 1">操作</span>
            </v-card>

            <v-card flat :color="theme.isDark ? '' : '#FFF'" class="d-flex mt-1 align-center" v-for="item in dictionaryList" :key="item.id">
                <span class="caption py-1 text-center" style="flex: 1">{{item.title}}</span>
                <span class="caption py-1 text-center" style="flex: 1">{{item.author}}</span>
                <span class="caption py-1 text-center" style="flex: 1">{{item.state}}</span>
                <span class="caption py-1 text-center" style="flex: 1">{{item.time}}</span>
                <span class="caption py-1 text-center" style="flex: 1">
                        <v-btn small text color="red">修改</v-btn>
                </span>
            </v-card>

            <v-pagination
                    circle
                    class="mt-1"
                    v-model="page"
                    :length="15"
                    :total-visible="7"
            ></v-pagination>


    </div>
</template>

<script>
    export default {
        inject: ['theme'],
        data:()=>({
            page:1,
            dictionaryList:[
                {id:1,title:'授权地址' , describe:'www.baidu.com',time:'2018-01-21', author:'授权地址',state:'授权地址'},
                {id:2,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
                {id:3,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
                {id:4,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'待发送'},
                {id:5,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},

                {id:11,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
                {id:12,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
                {id:13,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
                {id:14,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'待发送'},
                {id:15,title:'放假通知' , describe:'放假通知',time:'2018-01-21', author:'admin',state:'已发送'},
            ]
        })
    }
</script>

<style scoped>
.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>
