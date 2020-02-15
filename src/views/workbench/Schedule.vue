<template>
    <div class="app-container container">
        <span class="title">工作计划</span>
        <v-sheet class="d-flex" color="transparent" >
            <v-card flat class="mr-6 hidden-sm-and-down d-none" width="260">
                <v-sheet class="pa-5">
                    <v-img :aspect-ratio="16/9" contain
                            src="../../assets/svg/undraw_events_2p66.svg" />
                </v-sheet>

                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="body-2">我的工作计划</v-list-item-title>
                            <v-list-item-subtitle class="overline">创建属于我的工作计划</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-card-actions>
                    <v-btn
                            text
                            block
                            color="primary"
                    >
                        开始使用
                    </v-btn>
                </v-card-actions>
             </v-card>

            <v-card flat id="external-events" class="mr-6 hidden-sm-and-down" width="260">
                <v-list-item>
                    <v-list-item-icon>
                       <v-btn icon> <v-icon :size="30" color="primary">mdi-calendar-plus</v-icon></v-btn>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>添加日程</v-list-item-title>
                        <v-list-item-subtitle>拖动日程到日历完成计划安排</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list dense dark nav color="transparent">
                    <v-list-item class="fc-event">
                        <v-list-item-content>早上例会</v-list-item-content>
                    </v-list-item>
                    <v-list-item class="fc-event" style="background-color:#3c5afe;">
                        <v-list-item-content>开会</v-list-item-content>
                    </v-list-item>
                    <v-list-item class="fc-event" style="background-color:#fb648a;">
                        <v-list-item-content>招聘面试</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>

            <v-card flat style="flex: 3" color="transparent" >
                <div class="d-flex justify-space-between">
                    <v-chip-group column active-class="primary--text" mandatory>
                        <v-chip><v-icon size="18">mdi-calendar-text-outline</v-icon></v-chip>
                        <v-chip><v-icon size="18">mdi-calendar-month-outline</v-icon></v-chip>
                        <v-chip><v-icon size="18">mdi-calendar-range-outline</v-icon></v-chip>
                        <v-chip><v-icon size="18">mdi-calendar-minus</v-icon></v-chip>
                    </v-chip-group>
                    <span class="title align-self-center"> 2020年02月</span>
                    <v-chip-group column active-class="primary--text" mandatory>
                        <v-chip><v-icon size="18">mdi-chevron-double-left</v-icon></v-chip>
                        <v-chip><v-icon>mdi-alpha-t</v-icon></v-chip>
                        <v-chip><v-icon size="18">mdi-chevron-double-right</v-icon></v-chip>
                    </v-chip-group>
                </div>
                <full-calendar
                    ref="fullCalendar"
                    :schedulerLicenseKey="calendarConfig.schedulerLicenseKey"
                    :views="calendarConfig.views"
                    :header="calendarConfig.header"
                    :buttonText="calendarConfig.buttonText"
                    :events="events"
                    :plugins="calendarConfig.calendarPlugins"
                    :defaultView="calendarConfig.defaultView"
                    :defaultEventMinutes="calendarConfig.defaultEventMinutes"
                    :locale="calendarConfig.locale"
                    :timeZone="calendarConfig.timeZone"
                    :eventColor="calendarConfig.eventColor"
                    :eventTextColor="calendarConfig.eventTextColor"

                    :height="calendarConfig.height"
                    :weekends="calendarConfig.weekends"
                    :editable="calendarConfig.editable"
                    :dragOpacity="calendarConfig.dragOpacity"
                    :droppable="calendarConfig.droppable"
                    :selectable="calendarConfig.selectable"
                    :unselectAuto="calendarConfig.unselectAuto"
                    :selectHelper="calendarConfig.selectHelper"
                    :firstDay="calendarConfig.firstDay"
                    :allDayText="calendarConfig.allDayText"
                    :businessHours="calendarConfig.businessHours"
                    :eventLimit="calendarConfig.eventLimit"
                    :eventLimitText="calendarConfig.eventLimitText"
                    :showNonCurrentDates="calendarConfig.showNonCurrentDates"
                    :fixedWeekCount="calendarConfig.fixedWeekCount"
                    :allDaySlot="calendarConfig.allDaySlot"
                    :aspectRatio="calendarConfig.aspectRatio"
                    :slotLabelFormat="calendarConfig.slotLabelFormat"
                    :displayEventTime="calendarConfig.displayEventTime"
                    :nowIndicator="calendarConfig.nowIndicator"

                    @dateClick="handleDateClick"
                    @eventClick="handleEventClick"
                    @eventMouseover="handlerEventMouseover"
                    @select="handlerSelect"
                    @eventDrop="handlerEventDrop"
                    @eventResize="handlerEventResize"
                    @drop="drop"
                    />
            </v-card>

         </v-sheet>
    </div>
</template>


<script>
import FullCalendar from '@fullcalendar/vue'
import  { Draggable } from '@fullcalendar/interaction';
import calendarConfig from '@/config/calendar.js'
export default {
    data: () => ({
        events:[
            { title: '15:00见客户', date: '2020-02-13',className:'event-style',textColor: 'white'},
            { title: '市场调研', start: '2020-02-13' ,end:'2020-02-18',className:'event-style',textColor: 'white'},
            { title: '晚上同学聚会', date: '2020-02-19',className:'event-style',textColor: 'white'},
            { title: '加班', start: '2020-02-01',end:'2020-02-03' ,className:'event-style',url:'http://www.baidu.com' ,textColor: 'white'}
        ],
        calendarConfig:calendarConfig
    }),
    methods:{
        // 点击日期网格回调
        handleDateClick(arg){
            alert(arg.date+"天被点击了")
        },

        // 事件被点击
        handleEventClick(event){
            console.log('eventClick中选中Event：', event);
        },

        // 事件被鼠标移动过的时候
        handlerEventMouseover(event){
            console.log('鼠标经过 ...' + event);
        },

        // 当存在日期点击事件当时候，也会触发选择事件
        handlerSelect(arg){
            console.log('select触发的开始时间为：', arg.start);
            console.log('select触发的结束时间为：', arg.end);
        },

        // 当事件被拖动时触发
        handlerEventDrop(arg){
            console.log("事件被拖动" , arg)
        },

        //
        handlerEventResize(arg){
            console.log("handlerEventResize" , arg)
        },

        drop: function(info) {
            console.log(" drop " ,info)
        }
    },
    mounted(){
        new Draggable(document.getElementById('external-events'),{
            itemSelector: '.fc-event',
            eventData: function(eventEl) {
                return {
                    title: eventEl.innerText
                };
            }
        })
    },
    components:{ FullCalendar }
}
</script>

<style rel="stylesheet/scss" lang="scss">


</style>
