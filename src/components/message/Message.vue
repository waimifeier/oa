<template>
    <v-snackbar
            dark
            v-model="snackbar"
    >
        {{ text }}
        <v-btn
                color="pink"
                text
        @click="snackbar = false"
        >
        close
    </v-btn>
</v-snackbar>
</template>


<script>
export default {
    name: 'Message',
    data: () => ({
        snackbar:true,
        text:"",
        color:"",
        location: {
            bottom:false,
            top:false,
            left:false,
            right:false
        }

    })
}
</script>
