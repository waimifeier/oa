<template>
    <apexchart type="bar" height="50" width="120" :options="chartOptions5" :series="series5"></apexchart>
</template>

<script>
    export default {
        inject: ['theme'],
        data:()=>({
            series5: [{
                data: [19, 20, 42, 23, 32, 40, 4, 23]
            }],
            chartOptions5: {
                chart: {
                    type: 'bar',
                    width: 120,
                    height: 60,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%'
                    }
                },
                labels: ["财务部", "销售部", "人事部", "研发部", "产品部", "信息部", "商品部", "后勤部"],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    theme: 'dark',
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName,cfg) {
                                return cfg.w.config.labels[cfg.dataPointIndex] +'(人)';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
        })
    }
</script>

<style scoped>

</style>
