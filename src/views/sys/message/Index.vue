<template>
    <div class="app-container container">
        <span class="title">消息中心</span>
        <v-card flat class="pa-0" width="380">
            <v-list-item>
                <v-list-item-avatar>
                    <svg id="loudspeaker" style="color: #324558;fill: #b6c2cd;" width="30" height="30" viewBox="0 0 24 24"><g fill-rule="evenodd"><path fill="currentColor" d="M11 7.167V20H9l-.966-6.625-2.289-.294A2 2 0 014 11.097V9.883a2 2 0 011.724-1.98L11 7.167zM19 9a1.5 1.5 0 010 3V9z"></path><path d="M11 7.167l4.02-2.546A4 4 0 0117.16 4H19v13h-1.814a4 4 0 01-2.18-.646L11 13.75V7.167z"></path></g></svg>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="body-2">消息模板</v-list-item-title>
                    <v-list-item-subtitle class="caption">当前可用模板数：12个</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon small><v-icon small color="teal">mdi-chevron-down-circle</v-icon></v-btn>
                </v-list-item-action>
            </v-list-item>

             <div class="d-flex flex-wrap">
                 <v-card flat width="180" class="card-border ma-2">
                     <v-card-text class="caption pa-0">放假通知</v-card-text>
                     <v-card-text class="caption">放假通知</v-card-text>
                 </v-card>
                 <v-card flat  width="180" class="card-border ma-2">
                     <v-card-title class="caption">放假通知</v-card-title>
                     <v-card-text class="caption">放假通知</v-card-text>
                 </v-card>
                 <v-card flat  width="180" class="card-border ma-2">
                     <v-card-title class="caption">放假通知</v-card-title>
                     <v-card-text class="caption">放假通知</v-card-text>
                 </v-card>
                 <v-card flat  width="180" class="card-border ma-2">
                     <v-card-title class="caption">放假通知</v-card-title>
                     <v-card-text class="caption">放假通知</v-card-text>
                 </v-card>

                 <v-hover v-slot:default="{ hover }">
                     <v-card flat  width="180" class="card-border ma-2" :elevation="hover ? 12 : 0">
                         <v-card-title class="caption">放假通知</v-card-title>
                         <v-card-text class="caption">放假通知</v-card-text>
                         <v-expand-transition>
                             <div
                                     v-if="hover"
                                     class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                     style="height: 100%;"
                             >
                                 $14.99
                             </div>
                         </v-expand-transition>
                     </v-card>

                 </v-hover>
             </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>
 .card-border{
     border:1px solid #eee;
     text-align: center
 }
</style>
