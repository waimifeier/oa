<template>
    <v-app app>
     <v-content>
        <v-container >
            <v-app-bar
                    color="indigo darken-2"
                    dark
                    absolute
            >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Title</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
            </v-app-bar>
        </v-container>
     </v-content>
    </v-app>
</template>


<script>
export default {
    name: 'Index_',
    data: () => ({
        model:''
    })
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped>

</style>