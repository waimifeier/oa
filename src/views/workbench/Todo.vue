<template>
    <div class="app-container container">
        <div class="d-flex justify-space-between">
            <span class="title">代办事项</span>
            <div style="width: 300px;">
                <v-menu
                        v-model="modal"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-model="date"
                                label="按时间搜索..."
                                prepend-inner-icon="mdi-calendar-outline"
                                readonly
                                single-line
                                filled
                                rounded
                                dense
                                clearable
                                hide-details
                                clear-icon="mdi-close-circle-outline"
                                color="grey darken-1"
                                v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" locale="zh-en" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">取消</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">确定</v-btn>
                    </v-date-picker>
                </v-menu>
            </div>
        </div>
        <v-chip-group color="primary" mandatory >
            <v-chip pill class="caption">工单审核</v-chip>
            <v-chip pill class="caption">工作提醒</v-chip>
            <v-chip pill class="caption"></v-chip>
        </v-chip-group>

        <button id="button" aria-describedby="tooltip">My button</button>
        <div id="tooltip" role="tooltip">My tooltip</div>
    </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
export default {
    name: "Todo",
    mounted(){
        const popcorn = document.querySelector('#popcorn');
        const tooltip = document.querySelector('#tooltip');
        createPopper(popcorn, tooltip, {
            placement: 'right-start',
        });
    },
    data:() => ({
        date:"",
    }),

    methods:{

    }
}
</script>

<style>
    #arrow,
    #arrow::before {
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: -1;
    }

    #arrow::before {
        content: '';
        transform: rotate(45deg);
        background: #333;
    }

    #tooltip[data-popper-placement^='top'] > #arrow {
        bottom: -4px;
    }

    #tooltip[data-popper-placement^='bottom'] > #arrow {
        top: -4px;
    }

    #tooltip[data-popper-placement^='left'] > #arrow {
        right: -4px;
    }

    #tooltip[data-popper-placement^='right'] > #arrow {
        left: -4px;
    }
</style>
