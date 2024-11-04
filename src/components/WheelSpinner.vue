<template>
  <div class="wheel-container">
    <div class="circle" ref="wheel" :style="wheelStyle"></div>
    <ion-button @click="chooseFood">选择食物</ion-button>
  </div>
</template>

<script lang="ts">
export const selectedFood = ref<ValidFood | null>(null);
import { validFoodsComputed, ValidFood, selectFood } from '@/composables/foodSelector';
import { ref, watch } from 'vue';
</script>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';

const wheel = ref<HTMLDivElement | null>(null); // 引用转盘元素
const isSpinning = ref(false); // 防止重复点击
const wheelStyle = ref({}); // 转盘样式
const currentRotation = ref(0); // 记录当前转盘的角度
let totalWeight = 0;

// 绘制转盘
const drawWheel = async () => {
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx) return;
  ctx.canvas.width = 300;
  ctx.canvas.height = 300;
  ctx.translate(150, 150);

  let currentAngle = 0;
  const data: ValidFood[] = await validFoodsComputed.value;
  data.forEach((item, index) => {
    const sliceAngle = (item.weight / totalWeight) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 150, currentAngle, currentAngle + sliceAngle);
    ctx.fillStyle = `hsl(${(index / data.length) * 360}, 100%, 70%)`;
    ctx.fill();

    // 绘制文本
    ctx.save();
    ctx.rotate(currentAngle + sliceAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.fillText(item.name, 130, 10);
    ctx.restore();
    currentAngle += sliceAngle;
  });

  if (wheel.value) {
    wheel.value.style.backgroundImage = `url(${ctx.canvas.toDataURL()})`;
  }
};

// 旋转转盘并停在任意位置
const spinWheel = (degree: number) => {
  if (isSpinning.value) return;
  isSpinning.value = true;
  const spinningTime = 2; // 旋转时间

  const finalDegree = degree;
  const newRotation = currentRotation.value - currentRotation.value % 360 + finalDegree + 1080;

  wheelStyle.value = {
    transform: `rotate(${newRotation}deg)`,
    transition: `transform ${spinningTime}s ease-out`
  };

  setTimeout(() => {
    isSpinning.value = false;
    currentRotation.value = newRotation; // 更新当前角度
    const finalDegree = newRotation % 360;
    console.log(`Wheel stopped at ${finalDegree} degrees`);
    alert(selectedFood.value.name);
  }, spinningTime * 1000);
};

const getFoodAngleRanges = async () => {
  let currentAngle = 0;
  const ranges = new Map<string, { start: number, end: number }>();

  (await validFoodsComputed.value).forEach(item => {
    const sliceAngle = (item.weight / totalWeight) * 360;
    ranges.set(item.name, {
      start: currentAngle,
      end: currentAngle + sliceAngle
    });
    currentAngle += sliceAngle;
  });

  return ranges;
};
// 选择食物
const chooseFood = async () => {
  if (isSpinning.value) return null;
  selectedFood.value = await selectFood();
  const ranges = await getFoodAngleRanges();
  if (!selectedFood.value) return null;
  const selectedRange = ranges.get(selectedFood.value.name);
  if (!selectedRange) return null;
  spinWheel((selectedRange.start + selectedRange.end) / 2);
  return selectedFood;
};

watch(validFoodsComputed, async () => {
  totalWeight = (await validFoodsComputed.value).reduce((acc, item) => acc + item.weight, 0);
  drawWheel();
}, { immediate: true });

</script>

<style scoped>
.wheel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.circle {
  width: 300px;
  height: 300px;
  border: transparent;
  overflow: hidden;
}

ion-button {
  margin-top: 20px;
  padding: 10px 20px;
}
</style>