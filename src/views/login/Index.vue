<template>
    <v-content class="login-container d-flex" :class="$vuetify.breakpoint.xsOnly ? '' : 'align-center'">
        <v-card class="ma-auto pb-10" :width="$vuetify.breakpoint.xsOnly ? '100%' : '428'"
                flat color="#FFF" height="100%">
            <v-img
                    class="text-alagin-center"
                    height="100"
                    src="../../assets/images/bg.png"
            >
                <div class="d-flex align-self-center justify-center">
                    <v-avatar v-if="$vuetify.breakpoint.xsOnly" class="mt-4">
                        <img
                            src="../../assets/logo.png"
                            alt="John"
                        >
                    </v-avatar>
                    <v-card-title v-else class="primary--text"> O A 登 陆 </v-card-title>
                </div>
            </v-img>
            <v-card-text class="px-8 pb-0">

                <v-text-field label="请输入账号/手机号..."
                              clear-icon="mdi-close-circle-outline"
                              prepend-inner-icon="mdi-account-tie"
                              :rules="[v => !!v || '请输入登陆账号']"
                              clearable autofocus single-line required loader-height="1"></v-text-field>

                <v-text-field label="请输入密码..."
                              :type="showPass ? 'text' : 'password'"
                              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPass = !showPass"
                              :rules="[v => !!v || '请输入登陆密码']"
                              prepend-inner-icon="mdi-lock"
                              single-line required loader-height="1"></v-text-field>

                <v-card-actions style="justify-content: flex-end;"
                                v-if="!$vuetify.breakpoint.xsOnly"
                    >
                    <v-btn text class="caption"> 手机验证码登陆 </v-btn> <v-btn color="primary" text class="caption"> 忘记密码? </v-btn>
                </v-card-actions>
            </v-card-text>

            <v-card-actions style="justify-content: center;" class="mt-10">
                <v-btn rounded class="caption" color="primary" style="width: 80%;" :loading="loginLoading"> 登 陆 </v-btn>
            </v-card-actions>
            <v-card-actions style="justify-content: center;" v-if="$vuetify.breakpoint.xsOnly">
                <v-btn rounded text class="caption" style="width: 80%;"> 手机验证码登陆 </v-btn>
            </v-card-actions>
            <v-card-actions style="justify-content: center;"  v-if="$vuetify.breakpoint.xsOnly">
                <v-btn rounded text class="caption" style="width: 80%;"> 忘记密码 </v-btn>
            </v-card-actions>
        </v-card>
    </v-content>
</template>


<script>
export default {
    data:()=>({
        // 现在登陆按钮的loading
        loginLoading: false,

        // 是否显示密码
        showPass:false,

        // 登陆参数
        loginParams:{
            account:'' ,
            password:'' ,
        },
    }),

    mounted() {
        console.log(this.$vuetify.breakpoint.xsOnly)
    },

    computed:{

    },
    watch : {
       '$vuetify.breakpoint.xsOnly' (val){
            console.log("测试题。。。。。" , val)
        }
    }
}
</script>

<style scoped>
.login-container{
    background-image: url("../../assets/images/login_background.png") ;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}
</style>
