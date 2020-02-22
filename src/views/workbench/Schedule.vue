<template>
    <div class="app-container container">
        <span class="subtitle-1 font-weight-bold">工作计划</span>
        <v-sheet class="d-flex" >
            <v-card flat class="mr-6 hidden-sm-and-down d-none" width="260">
                <v-sheet class="pa-5">
                    <v-img :aspect-ratio="16/9" contain   src="../../assets/svg/undraw_events_2p66.svg" />
                </v-sheet>
                <v-list dense flat>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="body-2">我的工作计划</v-list-item-title>
                            <v-list-item-subtitle class="overline">创建属于我的工作计划</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-card-actions>
                    <v-btn text block color="primary"> 开始使用 </v-btn>
                </v-card-actions>
             </v-card>

            <v-card flat id="external-events" class="mr-6 hidden-sm-and-down" width="260">
                <v-list dense flat>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>添加日程</v-list-item-title>
                            <v-list-item-subtitle>拖动日程到日历完成计划安排</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-btn icon> <v-icon :size="30" color="primary">mdi-calendar-plus</v-icon></v-btn>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>

                <v-subheader>列表
                    <v-btn icon><v-icon small color="red">mdi-calendar-minus</v-icon></v-btn>
                    <v-btn icon><v-icon small color="primary">mdi-calendar-check-outline</v-icon></v-btn>
                </v-subheader>
                <v-chip small close class="ma-2 fc-event shaky" color="primary" text-color="white" style="display: inline-block;">
                    开早会
                </v-chip>
                <v-chip small close class="ma-2 fc-event shaky" color="pink" text-color="white" style="display: inline-block;">
                    外出签合同
                </v-chip>

                <v-chip small class="ma-2 fc-event shaky" color="red" text-color="white" style="display: inline-block;">
                    发工资
                </v-chip>

                <v-card-actions>
                    完成
                </v-card-actions>
            </v-card>

            <v-card flat style="flex: 3" color="transparent" >
                <div class="d-flex justify-space-between">
                    <v-chip-group column active-class="primary--text" mandatory>
                        <v-chip @click="changeView('list')"><v-icon size="18">mdi-calendar-text-outline</v-icon></v-chip>
                        <v-chip @click="changeView('dayGridMonth')"><v-icon size="18">mdi-calendar-month-outline</v-icon></v-chip>
                        <v-chip @click="changeView('dayGridWeek')"><v-icon size="18">mdi-calendar-range-outline</v-icon></v-chip>
                        <v-chip @click="changeView('dayGridDay')"><v-icon size="18">mdi-calendar-minus</v-icon></v-chip>
                    </v-chip-group>
                    <span class="title align-self-center"> {{title}}</span>
                    <v-chip-group column active-class="primary--text" mandatory>
                        <v-chip @click="prev"><v-icon size="18">mdi-chevron-double-left</v-icon></v-chip>
                        <v-chip @click="today"><v-icon>mdi-alpha-t</v-icon></v-chip>
                        <v-chip @click="next"><v-icon size="18">mdi-chevron-double-right</v-icon></v-chip>
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

                    @dayRender="datesRender"
                    @dateClick="handleDateClick"
                    @eventClick="handleEventClick"
                    @eventMouseover="handlerEventMouseover"
                    @select="handlerSelect"
                    @eventDrop="handlerEventDrop"
                    @eventResize="handlerEventResize"
                    @drop="drop"
                    @eventRender="handlerEventRender"
                    />
            </v-card>
         </v-sheet>
    </div>
</template>


<script>
import FullCalendar from '@fullcalendar/vue'
import  { Draggable } from '@fullcalendar/interaction';
import calendarConfig from '@/config/calendar.js'
import getDayData from '@/utils/lunarUtils.js'
export default {
    data: () => ({
        events:[
            { title: '19:00见客户', date: '2020-02-13',className:'event-style',textColor: 'white', description: 'description for All Day Event',},
            { title: '市场调研', start: '2020-02-13' ,end:'2020-02-18',className:'event-style',textColor: 'white'},
            { title: '晚上同学聚会', date: '2020-02-19',className:'event-style',textColor: 'white'},
            { title: '加班', start: '2020-02-01',end:'2020-02-03' ,className:'event-style',url:'http://www.baidu.com' ,textColor: 'white'}
        ],
        calendarConfig:calendarConfig,
        title:'',

    }),

    methods:{
        datesRender(event){
            if(!this.calendarConfig.lunar) return;

            let [ year,month,day ] = [...event.el.dataset.date.split('-')]
            let lu = getDayData(year,month,day)
            //  月份 ，初一，阳历节日，农历节日
            let {lunarMonthName,lunarDayName,solarFestival,lunarFestival} = {...lu}

            let iSsolar = false // 是否是节日
            let text = lunarDayName;

            if(lunarFestival ){ // 农历节日
                text =  lunarFestival
                iSsolar = true
            }else if(solarFestival){  // 阳历节日
                let solar = solarFestival.split(' ')[0]
                if(solar.length<5) {
                    text =  solar
                    iSsolar = true
                }
            }else if(lunarDayName==='初一'){
                text = lunarMonthName
            }else {
                text = lunarDayName
            }

            console.log(text)
            event.el.innerHTML = `<span class="${iSsolar ? 'lunar solar' :'lunar'}">${text}</span>`
        },

        prev(){
            this.$refs.fullCalendar.getApi().prev();
            this.setHeaderTitle()
        },
        next(){
            this.$refs.fullCalendar.getApi().next();
            this.setHeaderTitle()
        },
        today(){
            this.$refs.fullCalendar.getApi().today();
            this.setHeaderTitle()
        },

        setHeaderTitle(){
            this.title = this.$refs.fullCalendar.getApi().view.title;
        },

        changeView(viewName){
            this.$refs.fullCalendar.getApi().changeView(viewName);
            this.setHeaderTitle()
        },
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
        },

        handlerEventRender(info){
            console.log(info.event.extendedProps.description)
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

        this.setHeaderTitle();
    },
    components:{ FullCalendar }
}
</script>

<style rel="stylesheet/scss" lang="scss">

    .shaky{
        -webkit-animation: icon-bounce 0.6s infinite linear;
        -moz-animation: icon-bounce 0.6s infinite linear;
        -o-animation: icon-bounce 0.6s infinite linear;
        animation: icon-bounce 0.6s infinite linear ;
    }
    @keyframes icon-bounce {
        0%, 100% {
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        25% {
            -moz-transform: rotate(3deg);
            -ms-transform: rotate(5deg);
            -webkit-transform: rotate(3deg);
            transform: rotate(3deg);
        }

        50% {
            -moz-transform: rotate(-3deg);
            -ms-transform: rotate(-3deg);
            -webkit-transform: rotate(-3deg);
            transform: rotate(-3deg);
        }

        75% {
            -moz-transform: rotate(1deg);
            -ms-transform: rotate(1deg);
            -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
        }

        85% {
            -moz-transform: rotate(-1deg);
            -ms-transform: rotate(-1deg);
            -webkit-transform: rotate(-1deg);
            transform: rotate(-1deg);
        }
    }
</style>

<style>
    .popper,
    .tooltip {
        position: absolute;
        z-index: 9999;
        background: #FFC107;
        color: black;
        width: 150px;
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(0,0,0,0.5);
        padding: 10px;
        text-align: center;
    }
    .style5 .tooltip {
        background: #1E252B;
        color: #FFFFFF;
        max-width: 200px;
        width: auto;
        font-size: .8rem;
        padding: .5em 1em;
    }
    .popper .popper__arrow,
    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
    }

    .tooltip .tooltip-arrow,
    .popper .popper__arrow {
        border-color: #FFC107;
    }
    .style5 .tooltip .tooltip-arrow {
        border-color: #1E252B;
    }
    .popper[x-placement^="top"],
    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }
    .popper[x-placement^="top"] .popper__arrow,
    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }
    .popper[x-placement^="bottom"],
    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }
    .tooltip[x-placement^="bottom"] .tooltip-arrow,
    .popper[x-placement^="bottom"] .popper__arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent;
        border-right-color: transparent;
        border-top-color: transparent;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }
    .tooltip[x-placement^="right"],
    .popper[x-placement^="right"] {
        margin-left: 5px;
    }
    .popper[x-placement^="right"] .popper__arrow,
    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent;
        border-top-color: transparent;
        border-bottom-color: transparent;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }
    .popper[x-placement^="left"],
    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }
    .popper[x-placement^="left"] .popper__arrow,
    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

</style>
