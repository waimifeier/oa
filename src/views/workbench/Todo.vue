<template>
    <div class="app-container container">
        <span class="title">代办事项</span>
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
