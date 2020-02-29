<template>
    <apexchart width="200" type="donut" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
    export default {
        data:()=>({
            series: [219,44],
            chartOptions: {
                colors:["#633ffd" ,"#ef5350"],
                labels: ["男", "女"],
                chart: {
                    type: 'donut'
                },
                stroke: {   // 选中后的边框宽度
                    width: 0,
                },

                dataLabels: {
                    enabled: true, //显示百分比
                },

                plotOptions: {
                    pie: {
                        donut: {
                            size: '40%' // 圆圈比例
                        },
                        labels:{
                            show: true,
                        }
                    }
                },

                legend: {
                    position: 'left',
                    offsetY:30,
                    height: 230,
                },
            },
        })
    }
</script>
