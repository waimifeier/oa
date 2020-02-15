import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
export default {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        calendarPlugins: [ dayGridPlugin ,resourceTimelinePlugin,interactionPlugin,timeGridPlugin,listPlugin],
        defaultView:'timeGridWeek', // 默认视图
        defaultEventMinutes:60,
        locale:'zh-cn', //默认语言
        timeZone:'UTC',
        eventColor:'#1eb4a0',      // 默认事件的背景+边框色
        eventTextColor:'#fff',

        /* header:{
            left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay, list'
         },*/
        header:false,
        views: {
        listDay: { buttonText: 'list day' },
        listWeek: { buttonText: 'list week' },
        listMonth: { buttonText: 'list month' }
    },

    buttonText: {
        /*today: "今天",
        month: "月",
        week: "周",
        day: "日",
        list: '表'*/
    },

    height:500,
        weekends:true, // 是否显示周末
        editable:true , //Event是否可被拖动或者拖拽
        dragOpacity:0.5, //Event被拖动时的不透明度

        droppable: true,
        selectable: true, ////设置是否可被单击或者拖动选择
        unselectAuto:true ,//点击或者拖动选中之后，点击日历外的空白区域是否取消选中状态 true为取消 false为不取消，只有重新选择时才会取消
        selectHelper:true , //点击或者拖动选择时，是否显示时间范围的提示信息
        firstDay:1,         //一周中第一天显示周几  默认是0 , 周日：0，周一：1....
        allDayText: '全天' ,
        businessHours: {  // 区分工作时间 周末是否显示灰色
        startTime: '09:00',
            endTime: '17:30',
        // daysOfWeek: [ 1, 3, 5 ] // Mon,Wed,Fri
    } ,
    eventLimit:3, // 每天最多显示几个事件
        eventLimitText:'查看全部',
        showNonCurrentDates:true ,  //不显示不是当月的日期
        fixedWeekCount:true, //根据当前月份的显示周
        allDaySlot:true,
        // aspectRatio:1.8 //月视图下日历格子宽度和高度的比例
        slotLabelFormat:{ // 周，日视图时，左侧的显示的时间格式，以下为：00:00，00:30...5:30
        hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: 'short',
            hour12: false
    },
    displayEventTime: true, // 是否显示事件时间
    nowIndicator:true  // 红色标记
}
