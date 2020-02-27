<template>
    <apexchart type="bar" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
    export default {
        data:()=>({
            series: [{
                name: '员工数量',
                data: [19, 42, 6, 5, 9, 6, 8, 23]
            }],

            chartOptions: {
                xaxis: {
                    categories: ["财务部", "销售部", "人事部", "研发部", "产品部", "信息部", "商品部", "后勤部"],
                },
                yaxis: {
                    axisBorder: {
                        show: true
                    },
                    axisTicks: {
                        show: true,
                    },
                    labels: {
                        show: true,
                        formatter: function (val) {
                            return val + "人";
                        }
                    }
                },
                chart:{
                    type: 'bar',
                    toolbar:{
                        show: false
                    }
                }

            },

        })
    }
</script>

<style scoped>

</style>
