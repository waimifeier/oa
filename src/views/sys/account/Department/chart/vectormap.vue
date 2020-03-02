<template>
    <div id="container"/>
</template>

<script>
    import DataSet from '@antv/data-set';
    import { Chart } from '@antv/g2';

export default {
    data:()=>({
        pieData: [],
        sumData: 0
    }),
    methods:{
        initRequestData(){
            this.pieData = [
                { type: '男性', number: 201 },
                { type: '女性', number: 120 }
            ];

            this.sumData = this.pieData.map(item=>item.number).reduce((x,y)=>x+y);
        },
        initComponents(){
            const chart = new Chart({
                container: 'container',
                autoFit: true,
                height: 140,
                formatter: '.0%',
            });
            chart.data(this.pieData);

            chart.tooltip({
                showTitle: false,
                showMarkers: false,
                itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} 人</li>',
            });

            chart.coordinate('theta', {
                radius: 1,
                innerRadius: 0.4,
            });

            // 辅助文本
            chart
                .annotation()
                .text({
                    position: ['50%', '50%'],
                    content: `${this.sumData} 人`,
                    style: {
                        fontSize: 12,
                        textAlign: 'center',
                    }
                });
            chart.legend('type',{
                    position: 'left',
                }
            );
            chart
                .interval()
                .adjust('stack')
                .position('number')
                .color('type', ["#633ffd" ,"#ef5350"])
                .style({
                    opacity: 0.1,
                    stroke: "#fff",
                    shadowColor: 'transparent',
                })
                .label('number', {
                    offset: -10,
                    content: (data) => {
                        return data.type + '\n' + ( data.number / this.sumData).toFixed(2)*100.0 + '%';
                    },
                })
                .tooltip('type*number', (type, number) => {
                    return {
                        name: type,
                        value: number,
                    };
                });

            chart.interaction('element-highlight');

            chart.render();
        }
    },
    mounted() {
        this.initRequestData();
        this.initComponents();
    }

}
</script>

<style scoped>

</style>
