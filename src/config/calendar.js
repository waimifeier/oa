import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
export default {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    calendarPlugins: [ dayGridPlugin ,resourceTimelinePlugin,interactionPlugin,timeGridPlugin,listPlugin],
    defaultView:'dayGridMonth', // 默认视图
    defaultEventMinutes:60,
    locale:'zh-cn', //默认语言
    //eventColor:'#1eb4a0',      // 默认事件的背景+边框色
    eventTextColor:'#fff',
    header:false,

    views: {
        dayGridMonth: {
            eventLimit: 2 ,
            eventTimeFormat:{
                hour: 'numeric',
                minute: '2-digit',
                hour12: false
            }
        }
     },

    buttonText: {},
    height:500,
    weekends:true, // 是否显示周末
    editable:true , //Event是否可被拖动或者拖拽
    dragOpacity:0.5, //Event被拖动时的不透明度

    droppable: true,  // 接受外部事件拖入
    selectable: true, ////设置是否可被单击或者拖动选择
    unselectAuto:true ,//点击或者拖动选中之后，点击日历外的空白区域是否取消选中状态 true为取消 false为不取消，只有重新选择时才会取消
    selectHelper:true , //点击或者拖动选择时，是否显示时间范围的提示信息
    firstDay:1,         //一周中第一天显示周几  默认是0 , 周日：0，周一：1....
    allDayText: '全天' ,
    businessHours:false,
    /*businessHours: {  // 区分工作时间 周末是否显示灰色
        startTime: '09:00',
        endTime: '17:30',
    } ,*/
    eventLimit:false, // 每天最多显示几个事件
    eventLimitText:'查看全部',
    showNonCurrentDates:true ,  //显示不是当月的日期
    fixedWeekCount:false, //根据当前月份的显示周
    allDaySlot:true,

    // 周，日视图时，左侧的显示的时间格式，以下为：00:00，00:30...5:30
    slotLabelFormat:{
            hour: 'numeric',
            minute: '2-digit',
            hour12: false
    },
    nowIndicator:true , // 红色标记(当前具体时间如：08:00)
    lunar:true          // 农历
}
