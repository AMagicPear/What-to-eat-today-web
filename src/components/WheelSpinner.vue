<template>
  <div ref="chartRef" id="chart" :style="{ width: '100%', height: '400px', marginBottom: '20px' }"></div>
  <ion-button @click="chooseFood">选择食物</ion-button>
  <ion-toast :is-open="message" :message="message" :duration="2000" @didDismiss="message = null"></ion-toast>
</template>

<script lang="ts">
// echarts 相关引入
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);
import { IonButton, IonToast } from '@ionic/vue';

import { ref, onMounted, onUnmounted } from "vue"
import { getWeightByTimePeriod, selectFood, ValidFood } from '@/composables/foodSelector';
import { FoodConstructor, foodList } from '@/composables/foodConstructor';
const { loadFoods } = FoodConstructor();
</script>

<script setup lang="ts">
const chartRef = ref() // echarts 实例
let myChart: echarts.ECharts;
const selectedFood = ref<ValidFood | null>(null)
const message = ref<string | null>(null)

const initEcharts = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        name: '食物',
        type: 'pie', // 环形图
        radius: ['40%', '70%'], // 控制环形图的大小
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'rgba(0, 0, 0, 0.8)'
          }
        },
        labelLine: {
          show: false
        },
        data: foodList.value.map((food) => {
          return {
            value: getWeightByTimePeriod(food.weight),
            name: food.name
          }
        })
      }
    ]
  };
  myChart = echarts.init(chartRef.value)
  myChart.setOption(option)
};

const handleResize = () => {
  myChart?.resize()
}

const chooseFood = async () => {
  console.log('chooseFood')
  let randomRotation = 0;
  selectFood().then(food => {
    selectedFood.value = food

    // 计算随机旋转角度 (3-8圈)
    randomRotation = -(1080 + Math.random() * 1800); // 3-8圈之间随机

    // 先快速旋转
    myChart.setOption({
      series: [{
        startAngle: randomRotation,
        animationEasingUpdate: 'cubicInOut'
      }]
    });

    // 旋转结束后高亮显示选中项
    setTimeout(() => {
      const option = myChart.getOption();
      const seriesData = option.series[0].data;

      const selectedIndex = seriesData.findIndex((item: any) => item.name === food.name);
      if (selectedIndex !== -1) {
        myChart.setOption({
          series: [{
            data: seriesData.map((item: any, index: number) => ({
              ...item,
              itemStyle: {
                ...item.itemStyle,
                ...(index === selectedIndex ? {
                  borderWidth: 4,
                  borderColor: '#ff9800',
                  shadowBlur: 10,
                  shadowColor: 'rgba(255, 152, 0, 0.5)'
                } : {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2,
                  shadowColor: 'transparent'
                })
              }
            }))
          }]
        });
      }
      if (food) message.value = `今天吃${food?.name}`;
    }, 500);
  });
}

onMounted(async () => {
  await loadFoods();
  initEcharts()
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
  myChart?.dispose()
})
</script>

<style scoped>
ion-button {
  margin: auto auto;
  width: 100px;
  display: block;
}
</style>