<template>
    <v-dialog eager @input="change" value="true" :max-width="width" :persistent="persistent" @keydown.esc="choose(false)">
        <v-card tile>
            <v-toolbar v-if="Boolean(title)" dark :color="color" dense flat>
                <v-icon v-if="Boolean(icon)" left>{{ icon }}</v-icon>
                <v-toolbar-title class="white--text subtitle-1" v-text="title"/>
            </v-toolbar>
            <v-card-text class="body-1 py-3 overline font-weight-medium" v-html="message"/>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                        v-if="Boolean(buttonFalseText)"
                        :color="buttonFalseColor"
                        text
                        @click="choose(false)"
                >
                    {{ buttonFalseText }}
                </v-btn>
                <v-btn
                        v-if="Boolean(buttonTrueText)"
                        :color="buttonTrueColor"
                        text
                        @click="choose(true)"
                >
                    {{ buttonTrueText }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { VCard, VCardActions, VCardText, VDialog, VIcon, VToolbar, VToolbarTitle, VSpacer, VBtn } from 'vuetify/lib'

    export default {
        components: {
            VCard,
            VCardActions,
            VCardText,
            VDialog,
            VIcon,
            VToolbar,
            VToolbarTitle,
            VSpacer,
            VBtn
        },
        props: {
            buttonTrueText: {
                type: String,
                default: '是'
            },
            buttonFalseText: {
                type: String,
                default: '否'
            },
            buttonTrueColor: {
                type: String,
                default: 'primary'
            },
            buttonFalseColor: {
                type: String,
                default: 'grey'
            },
            color: {
                type: String,
                default: 'info'
            },
            icon: {
                type: String,
                default: 'mdi-robber'
            },
            message: {
                type: String,
                required: true
            },
            persistent: Boolean,
            title: {
                type: String,
                default:'警告'
            },
            width: {
                type: Number,
                default: 320
            }
        },
        data () {
            return {
                value: false
            }
        },
        mounted () {
            document.addEventListener('keyup', this.onEnterPressed)
        },
        destroyed () {
            document.removeEventListener('keyup', this.onEnterPressed)
        },
        methods: {
            onEnterPressed (e) {
                if (e.keyCode === 13) {
                    e.stopPropagation()
                    this.choose(true)
                }
            },
            choose (value) {
                this.$emit('result', value)
                this.value = value
                this.$destroy()
            },
            change (res) {
                this.$destroy()
            }
        }
    }
</script>
