<template>
    <apexchart type="bar" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
    const colors = ["#3fa0fc","#50e7a6","#ffbc4a","#ff6478","#7964b8","#50b3a9","#d941ec","#6e838e"]
    export default {
        data:()=>({

            series: [{
                name: '员工数量',
                data: [19, 42, 6, 5, 9, 6, 8, 23]
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function(chart, w, e) {
                            alert(1);
                        }
                    },
                    toolbar:{
                        show: false
                    }
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: ["财务部", "销售部", "人事部", "研发部", "产品部", "信息部", "商品部", "后勤部"],
                    labels: {
                        style: {
                            colors: colors,
                            fontSize: '12px'
                        }
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },

        })
    }
</script>

<style scoped>

</style>
