<template>
  <div>
      <div class="d-flex justify-space-between">
          <v-chip-group
                  column
                  active-class="primary--text"
          >
              <v-chip><v-icon size="18">mdi-chevron-double-left</v-icon></v-chip>
              <v-chip>今天</v-chip>
              <v-chip><v-icon size="18">mdi-chevron-double-right</v-icon></v-chip>
          </v-chip-group>
          <span class="title align-self-center"> 2020年02月</span>
          <v-chip-group
                  column
                  active-class="primary--text"
          >
              <v-chip>列表</v-chip>
              <v-chip>周</v-chip>
              <v-chip>月</v-chip>
              <v-chip>天</v-chip>
          </v-chip-group>
      </div>
      <FullCalendar
              :plugins="calendarPlugins"
              locale="zh-cn"
              :header="false"
              :buttonText="buttonText"
              :events="calendarEvents"
              ref="fullCalendar"
              @dateClick="handleDateClick"
              @eventClick="handleEventClick"

              @eventMouseEnter="eventMouseEnter"
              :editable="true"
              :selectable="true"
              @select="select"
              :eventLimit="2"
              :height="500"
              allDayText="全天"
              :eventLimitText="config.eventLimitText"
              :firstDay="config.firstDay"
              :eventColor="config.eventColor"
              @dayRender="datesRender"
      />
  </div>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import timeGridPlugin from '@fullcalendar/timegrid';
  import listPlugin from '@fullcalendar/list';
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
        calendarPlugins: [dayGridPlugin,interactionPlugin ,timeGridPlugin,listPlugin],
        header:{
            left:   'title',
            center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            right:  'prev,today,next'
        },
          buttonText: {
            today:    '今天',
            month:    'month',
            week:     'week',
            day:      'day',
            list:     'list'
        },
        monthData:[],
        selectMirror:true,

        calendarEvents:[
          { title: '15:00见客户', date: '2020-02-13',className:'event-style',textColor: 'white'},
          { title: '市场调研', start: '2020-02-13' ,end:'2020-02-18',className:'event-style',textColor: 'white'},
          { title: '晚上同学聚会', date: '2020-02-19',className:'event-style',textColor: 'white'},
          { title: '加班', start: '2020-02-01',end:'2020-02-03' ,className:'event-style',url:'http://www.baidu.com' ,textColor: 'white'}
        ],
        config:{
            weekMode :['liquid'],
          defaultView: 'month',
          eventBackgroundColor:'#fff',   // 事件的背景色
          eventTextColor:'#fff',  // 事件文字颜色
          eventBorderColor:'#fff',// 事件边框颜色
          eventColor:'#1eb4a0',      // 默认事件的背景+边框色
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

          aspectRatio: 2.1,//月视图下日历格子宽度和高度的比例
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
@import '~vuetify/src/styles/styles.sass';




</style>
