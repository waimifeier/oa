<template>
    <div class="app-container container">
        <span class="subtitle-1 font-weight-bold">工作计划</span>
        <div class="d-flex">
            <v-card flat class="mr-6 hidden-sm-and-down" width="300" v-if="!eventsList || eventsList.length<=0">
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
                    <v-btn text block color="primary" @click="eventDialog=!eventDialog"> 开始使用 </v-btn>
                </v-card-actions>
             </v-card>


            <v-card flat id="external-events" class="mr-6 hidden-sm-and-down" width="300" v-else>
                <v-card class="pa-1" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark>
                    <div class="d-flex justify-space-between">
                        <v-img src="../../assets/svg/undraw_events_2p66.svg" width="60" contain/>
                        <v-list-item dense>
                            <v-list-item-content>
                                <v-list-item-title class="caption font-weight-black">我的日程</v-list-item-title>
                                <v-list-item-subtitle class="caption">拖动日程到日历完成计划安排。</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon small v-on="on"><v-icon small class="white--text">mdi-chevron-down-circle</v-icon></v-btn>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click="eventDialog=!eventDialog">
                                            <v-list-item-title class="caption">创建日程</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click="isEditor=!isEditor">
                                            <v-list-item-content>
                                                <v-list-item-title class="caption">管理日程</v-list-item-title>
                                                <v-list-item-subtitle class="caption" >删除我的日程</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                </v-card>

                <v-chip
                        style="display:inline-block"
                        v-for="item in eventsList" :key="item.id"
                        :close="isEditor"
                        :class="isEditor? '' : 'fc-event'"
                        :color="item.color"
                        text-color="white"
                        class="ma-2 caption px-2"
                        label
                >
                    {{item.title}}
                </v-chip>

                <v-card-actions class="mt-8" style="justify-content: center" v-if="isEditor">
                    <v-btn outlined small color="primary"  @click="isEditor=!isEditor"> 取消 </v-btn>
                    <v-btn outlined small color="primary"  @click="saveSlefEvents()"> 完成 </v-btn>
                </v-card-actions>
            </v-card>

            <v-card flat style="flex: 3" color="transparent" >
                <div class="d-flex justify-space-between">
                    <v-chip-group column active-class="primary--text" mandatory class="hidden-sm-and-down">
                     <!--   <v-chip @click="changeView('list')"><v-icon size="18">mdi-calendar-text-outline</v-icon></v-chip>-->
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
         </div>

        <v-dialog v-model="eventDialog" width="400" >
            <v-card>
                <v-card-title class="subtitle-1"  primary-title>
                    新建日程
                </v-card-title>

                <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation  >
                        <v-text-field
                                :counter="10"
                                label="我的日程名称"
                                required
                        ></v-text-field>
                        <v-subheader> 颜色 </v-subheader>

                        <div>
                            <span></span>
                        </div>
                    </v-form>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="eventDialog = false">
                        保存
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
import FullCalendar from '@fullcalendar/vue'
import  { Draggable } from '@fullcalendar/interaction';
import calendarConfig from '@/config/calendar.js'
import getDayData from '@/utils/lunarUtils.js'
export default {
    inject: ['theme'],
    data: () => ({
        valid:false,
        events:[
            { title: '19:00见客户', date: '2020-03-13',color:'#3e51b5',textColor: 'white', description: 'description for All Day Event',},
            { title: '市场调研', start: '2020-03-09' ,end:'2020-03-11 00:01',color:'#00bcd4',textColor: 'white'},
            { title: '清明假期', start: '2020-04-04',end:'2020-04-07',color:'#f44335',textColor: 'white'},
            { title: '加班', start: '2020-03-01',end:'2020-03-01' ,color:'#9c26b0',url:'http://www.baidu.com' ,textColor: 'white'}
        ],
        calendarConfig:calendarConfig,
        title:'',
        isEditor:false,

        eventsList:[
            {id:1, title:'外出签合同',color:'#109ab1'},
            {id:2, title:'加班',color:'#4caf50'},
            {id:3, title:'开早会',color:'#ff9800'},
            {id:4, title:'开发项目',color:'#00bcd4'},
            {id:5, title:'项目调试',color:'#cddc38'}
        ],

        colors:['#109ab1','#e91e63','#9c26b0','#f44335','#1f96f3','#3e51b5','#00bcd4','#009688','#4caf50','#cddc38','#ff9800','#ffc104','#ffc104','#9e9e9e'],
        eventDialog:false
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

        // 外部托入
        drop: function(info) {
            let classNameList = info.draggedEl.className.split(" ");
            let currentClassName = classNameList.filter(item => this.colors.indexOf(item)> -1)
           // console.log(" drop " ,currentClassName[0])
            console.log(info)
        },

        handlerEventRender(info){
            console.log('handlerEventRender',info)
        },

        saveSlefEvents(){
            this.isEditor = !this.isEditor;
        }
    },
    mounted(){
        new Draggable(document.getElementById('external-events'),{
            itemSelector: '.fc-event',
            eventData(eventEl) {
                let backgroundColor  = eventEl.style.backgroundColor;
                return {
                    title: eventEl.innerText,
                    color:backgroundColor,
                };
            }
        })

        this.setHeaderTitle();
    },
    components:{ FullCalendar }
}
</script>

<style rel="stylesheet/scss" lang="scss">

    .fc-event {
        border-radius: 5px;
        border: none;
        cursor: move;
        font-size: .5125rem;
        padding: 4px;
        margin: 1px 4px;
        text-align: center;
    }

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
    .bg-danger {
        background-color: #fa5c7c!important;
    }
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
