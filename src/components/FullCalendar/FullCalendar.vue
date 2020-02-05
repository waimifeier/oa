<template>
  <FullCalendar
          :events="calendarEvents"
          ref="fullCalendar"
          @dateClick="handleDateClick"
          @eventClick="handleEventClick"
          :plugins="calendarPlugins"
          locale="zh-cn"
          :buttonText="buttonText"
          @eventMouseEnter="eventMouseEnter"
          :header="{
        right: 'prev,today,next',
        center: '',
        left:'title',
      }"
          :editable="true"
          :selectable="true"
          @select="select"
          :eventLimit="2"
          :height="600"
          allDayText="全天"
          :eventLimitText="config.eventLimitText"
          :firstDay="config.firstDay"
          :eventColor="config.eventColor"
          @dayRender="datesRender"
  />
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import timeGrid from '@fullcalendar/timegrid'
  import getDayData from '@/utils/lunarUtils.js'

  // https://www.jianshu.com/p/037d4c6c7824  参考
  export default {
    name:'v-fullCalendar',
    components: {
      FullCalendar
    },
    mounted(){
      //console.log(this.$refs.fullCalendar);

    },
    data() {
      return {
        calendarPlugins: [ dayGridPlugin,interactionPlugin ,timeGrid],
        buttonText: {
          today: '今天',
          prev:'上个月',
          next:'下个月'
        },
        monthData:[],
        selectMirror:true,

        calendarEvents:[
          { title: '15:00见客户', date: '2019-12-03' },
          { title: '市场调研', start: '2019-12-13' ,end:'2019-12-16'},
          { title: '晚上同学聚会', date: '2019-12-25'},
          { title: '加班', start: '2019-10-12',end:'2019-10-13' }
        ],
        config:{
          eventBackgroundColor:'#378006',   // 事件的背景色
          eventTextColor:'#fff',  // 事件文字颜色
          eventBorderColor:'#fff',// 事件边框颜色
          eventColor:'#1eb4a0',      // 事件的背景+边框色
          //设置是否可被单击或者拖动选择
          selectable: true,
          //点击或者拖动选择时，是否显示时间范围的提示信息，该属性只在agenda视图里可用
          selectHelper: true,
          //点击或者拖动选中之后，点击日历外的空白区域是否取消选中状态 true为取消 false为不取消，只有重新选择时才会取消
          unselectAuto: true,
          //Event是否可被拖动或者拖拽
          editable: true,
          weekends: false,  // 隐藏周六和周日
          firstDay:1, // //一周中第一天显示周几  默认是0 , 周日：0，周一：1....
          showNonCurrentDates:false, //不显示不是当月的日期
          fixedWeekCount:false, //根据当前月份的显示周

          eventLimit:1, //每个表格最多显示几个事件
          eventLimitText:'查看全部',

          height:260 , //设置整个日历的高度包括页眉和页脚
          contentHeight:200 , //设置日历查看区域的高度
          aspectRatio:2.1,
          lunar:true,  // 是否显示农历
        }
      }
    },
    methods:{

      datesRender(event){
        if(!this.config.lunar) return;

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


      // 点击日期网格回调
      handleDateClick (arg) {
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
          this.calendarEvents.push({ // add new event data
            title: 'New Event',
            start: arg.date,
            allDay: arg.allDay
          })
        }
      },

      //eventMouseEnter 当用户将鼠标悬停在事件上时触发

      // 点击事件回调
      handleEventClick (info) {
        // alert('Event: ' + info.event.title)
        // this.$prompt('sss','aaa') 输入框弹窗
       // this.$alert('message', 'title')
      },

      eventMouseEnter(){
        //alert(1)
      },
      select(){
        // alert(12)
      }
    }
  }

</script>



<style lang='scss'>

  .fc-content{
    text-align: center;
  }

  .fc-event-container .fc-event.fc-draggable {
    border-radius: 10px;
  }

  // 事件中的内容 剧中方式
  .fc-content-skeleton .fc-day-top{
    text-align: center;
  }

  .fc-button-group .fc-button-primary{
    color: #666;
    background-color: #fff;
    border-color: #f3f3f8;
  }

  .fc-button-group .fc-button-primary:hover {
    color: #222;
    background-color: #f3f3f8;
    border-color: #f3f3f8;
  }

  .fc-button-group .fc-button-primary:active {
    color: #222;
    background-color: #f3f3f8;
    border-color: #f3f3f8;
  }

  .fc-button-group .fc-button-primary:disabled{
    color: #222;
    background-color: #f3f3f8;
    border-color: #f3f3f8;
  }

  // 表格样式
  .fc-unthemed th, .fc-unthemed td,
  .fc-unthemed thead, .fc-unthemed tbody,
  .fc-unthemed .fc-divider, .fc-unthemed
  .fc-row, .fc-unthemed .fc-content,
  .fc-unthemed .fc-popover,
  .fc-unthemed .fc-list-view,
  .fc-unthemed .fc-list-heading td{
    border-color: #f5f5fb;
  }

  .fc-day-top.fc-other-month, .fc-day.fc-other-month{
    opacity:0.6;
  }

  /*农历或者节日的样式*/
  .fc-day.fc-widget-content .lunar{
    float: left;
    font-size: 12px;
    padding:2px;
  }

  /* 带节日的样式*/
  .fc-day.fc-widget-content .solar{
    text-decoration: underline;
    color:#fb648a;
  }

  /* 今天颜色背景 */
  .fc-unthemed td.fc-today {
    background-color: #f7f7fa;
    color:#1eb4a0;
    font-weight: bold;
  }
</style>
