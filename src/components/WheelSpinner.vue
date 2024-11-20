<template>
  <v-chart class="chart" :option="option" autoresize/>
  <ion-button @click="chooseFood">选择食物</ion-button>
  <ion-toast :is-open="message" :message="message" :duration="2000" @didDismiss="message = null"></ion-toast>
</template>

<script lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  PieChart,
  TooltipComponent,
  LegendComponent
]);
import { IonButton, IonToast } from '@ionic/vue';

import { ref, onMounted, onUnmounted } from "vue"
import { getWeightByTimePeriod, selectFood, ValidFood } from '@/composables/foodSelector';
import { foodList, FoodConstructor } from '@/composables/foodConstructor';
const { loadFoods } = FoodConstructor();
const option = ref({
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
      data: []
    }
  ]
});
export const updateChartData = () => {
  option.value.series[0].data = foodList.value.map((food) => {
    return {
      value: getWeightByTimePeriod(food.weight),
      name: food.name
    }
  });
};
</script>

<script setup lang="ts">
const selectedFood = ref<ValidFood | null>(null)
const message = ref<string | null>(null)

const chooseFood = async () => {
  console.log('chooseFood')
  let randomRotation = 0;
  selectFood().then(food => {
    selectedFood.value = food

    // 计算随机旋转角度 (3-8圈)
    randomRotation = -(1080 + Math.random() * 1800); // 3-8圈之间随机

    // 先快速旋转
    option.value.series[0].startAngle = randomRotation;
    option.value.series[0].animationEasingUpdate = 'cubicInOut';

    // 旋转结束后高亮显示选中项
    setTimeout(() => {
      const seriesData = option.value.series[0].data;

      const selectedIndex = seriesData.findIndex((item: any) => item.name === food?.name);
      if (selectedIndex !== -1) {
        option.value.series[0].data = seriesData.map((item: any, index: number) => ({
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
        }));
      }
      if (food) message.value = `今天吃${food?.name}`;
    }, 500);
  });
}

onMounted(async () => {
  await loadFoods();
  updateChartData();
})

onUnmounted(() => {
})
</script>

<style scoped>
ion-button {
  margin: 4vh auto;
  width: 100px;
  display: block;
}
.chart {
    height: 60vh;
}
</style>