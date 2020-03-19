<template>
    <div class="app-container container">
        <span class="subtitle-1 font-weight-bold">工作计划</span>
        <div class="d-flex">
            <v-sheet flat class="mr-6 hidden-sm-and-down" width="300" v-if="!eventsList || eventsList.length<=0">
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
             </v-sheet>

            <div flat class="mr-6 hidden-sm-and-down" v-else style="width: 300px;">
                <v-card class="pa-1" :color="theme.isDark ? '' : 'indigo accent-3'" flat dark >
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

                <div id="external-events">
                    <v-chip
                            style="display:inline-block"
                            v-for="(item,index) in eventsList" :key="index"
                            :close="isEditor"
                            :class="isEditor? 'shaky' : 'fc-event'"
                            :color="item.color"
                            text-color="white"
                            class="ma-2 caption px-2"
                            label
                    >
                        {{item.title}}
                    </v-chip>
                </div>


                <v-card-actions class="mt-8" style="justify-content: center" v-if="isEditor">
                    <v-btn outlined small color="primary"  @click="isEditor=!isEditor"> 取消 </v-btn>
                    <v-btn outlined small color="primary"  @click="saveSlefEvents()"> 完成 </v-btn>
                </v-card-actions>
            </div>

            <v-card flat style="flex: 3" color="transparent" >
                <div class="d-flex justify-space-between">
                    <v-chip-group column active-class="primary--text" mandatory class="hidden-sm-and-down" v-model="calendarParams.viewState">
                     <!--   <v-chip @click="changeView('list')"><v-icon size="18">mdi-calendar-text-outline</v-icon></v-chip>-->
                        <v-chip @click="changeView('dayGridMonth')"><v-icon size="18">mdi-calendar-month-outline</v-icon></v-chip>
                        <v-chip @click="changeView('dayGridWeek')"><v-icon size="18">mdi-calendar-range-outline</v-icon></v-chip>
                        <v-chip @click="changeView('dayGridDay')"><v-icon size="18">mdi-calendar-minus</v-icon></v-chip>
                    </v-chip-group>
                    <span class="title align-self-center"> {{calendarParams.title}}</span>
                    <v-chip-group column active-class="primary--text" mandatory v-model="calendarParams.prevState">
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

        <v-dialog v-model="eventDialog" width="230" persistent>
            <v-card flat dense  :color="theme.isDark ? '' : '#FFF'" >
                <v-textarea
                        no-resize
                        rows="2"
                        v-model="messageTips.title"
                        :counter="10"
                        label="输入日程名称"
                        clear-icon="mdi-close-circle-outline"
                        :error-messages="nameErrors"
                        @input="$v.messageTips.title.$touch()"
                        @blur="$v.messageTips.title.$touch()"
                        required
                        autofocus
                        solo
                        flat
                        clearable
                        single-line
                ></v-textarea>

                <v-item-group mandatory v-model="messageTips.color" class="mb-1 pa-2">
                    <v-item v-slot:default="{ active, toggle }" v-for="(item,index) in colors" :key="index" class="itemActive" :value="item">
                        <v-avatar :color="item" :size="22" class="ma-1" @click="toggle" style="cursor: pointer" >
                            <v-icon small v-if="active" color="white">mdi-check</v-icon>
                        </v-avatar>
                    </v-item>
                </v-item-group>
                <v-card-text>

                    <span class="caption pl-3 red--text d-none">请勾选颜色</span>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text small @click="eventDialog=!eventDialog">取消</v-btn>
                    <v-btn small text color="primary" @click="saveMessageTips()">  保存</v-btn>
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
import colors from '@/config/colors.js'
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
    inject: ['theme'],
    components:{ FullCalendar },
    validations: {
        messageTips:{
            title: { required, maxLength: maxLength(10) },
            color: { required },
        }
    },
    data: () => ({
        colors,
        calendarConfig,
        draggableNode:null,
        // 日历参数
        calendarParams:{
            title:'',
            prevState:1,
            viewState:0
        },
        // 消息提示参数
        isEditor:false,
        eventDialog:false,
        messageTips:{
            color:'',
            title:''
        },
        events:[
            { title: '19:00见客户', date: '2020-03-13',color:'#3e51b5',textColor: 'white', description: 'description for All Day Event',},
            { title: '市场调研', start: '2020-03-09' ,end:'2020-03-11 00:01',color:'#00bcd4',textColor: 'white'},
            { title: '清明假期', start: '2020-04-04',end:'2020-04-07',color:'#f44335',textColor: 'white'},
            { title: '加班', start: '2020-03-01',end:'2020-03-01' ,color:'#9c26b0',url:'http://www.baidu.com' ,textColor: 'white'}
        ],
        eventsList:[]
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
            this.calendarParams.title = this.$refs.fullCalendar.getApi().view.title;
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
        },

        // 保存消息标签
        saveMessageTips () {
            this.$v.$touch()
            if(this.$v.$invalid) return;

            this.eventsList.push({
                ...this.messageTips
            });

            this.eventDialog = false;
            this.$nextTick(()=>{
                this.initDraggable();
            })
        },

        // 初始化外部拖拽组件
        initDraggable: function () {

            let nodeEvent = document.getElementById('external-events');
            if(!nodeEvent || this.draggableNode) return;

            this.draggableNode = new Draggable(nodeEvent, {
                itemSelector: '.fc-event',
                eventData(eventEl) {
                    let backgroundColor = eventEl.style.backgroundColor;
                    return {
                        title: eventEl.innerText,
                        color: backgroundColor,
                    };
                }
            })
        }
    },

    watch:{
        'messageTips.color'(val){
            console.log(val)
        }
    },

    computed:{
        nameErrors () {
            const errors = []
            if (!this.$v.messageTips.title.$dirty) return errors
            !this.$v.messageTips.title.maxLength && errors.push('名称长度不能大于10')
            !this.$v.messageTips.title.required && errors.push('日程名称不能为空')
            return errors
        },
    },
    mounted(){
        // 初始化外部拖拽组件
        this.initDraggable();
        this.setHeaderTitle();
    },

}
</script>

<style rel="stylesheet/scss" lang="scss">

    .itemActive{
        -moz-transition:all .4s;
        -webkit-transition:all .4s;
        -o-transition:all .4s;
    }
    .itemActive:hover{
        transform:scale(1.2);
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

