<template>
    <apexchart width="240" type="pie" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
    export default {
        data:()=>({
            series: [50, 13],
            chartOptions: {
                labels: ["男", "女"],
                stroke: {   // 选中后的边框宽度
                    width: 0,
                }
            }
        })
    }
</script>
