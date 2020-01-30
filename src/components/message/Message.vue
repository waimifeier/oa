<template>
    <v-snackbar
            color="success"
            :top="true"
            v-model="snackbar"
            :multi-line="false"
    >
        保存成功
        <v-btn
                icon
                @click="doClose"
        >
            <v-icon small>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>
</template>


<script>
export default {
    name: 'Message',
    props:{
        text:{
            type: String,
            default: ''
        },
        color:{
            type: String,
            default: 'info'
        },
        snackbar:{
            type:Boolean,
            default:false
        },
    },
    data: () => ({
        location: {
            bottom:false,
            top:true,
            left:false,
            right:false
        }

    }),

    methods:{
        doClose(){
            this.$emit('close');
        }
    }
}
</script>
