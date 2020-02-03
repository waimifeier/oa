var LunarCalendar = require("lunar-calendar");

export default function (year,month,day) {

  let monthData = LunarCalendar.calendar(year,month,false).monthData;

  let dayData = monthData.find(item => {
   if( item.year === Number.parseInt(year) && item.month ===  Number.parseInt(month) && item.day ===  Number.parseInt(day) )
     return item
  })

  return dayData
}
