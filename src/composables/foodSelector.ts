import { ref, computed, ComputedRef } from 'vue';
export const timeNow = ref(new Date());
import { FoodConstructor, foodList } from './foodConstructor';
const { saveFoods } = FoodConstructor();

import { Log, logs } from './log'
import { toastController } from '@ionic/vue';
const { saveLog } = Log();

export interface ValidFood {
  name: string;
  weight: number;
}

export const validFoodsComputed = computed(async (): Promise<ValidFood[]> => {
  // 第一次筛选：根据是否被选中来筛选
  const { isCheckBoxDisabled, checkedList } = await import('@/views/EditFood.vue');
  let validFoods = isCheckBoxDisabled.value ? foodList.value : foodList.value.filter((_, index) => checkedList.value[index]);
  console.log(`第一次筛选后的食物：`)
  console.log(validFoods)
  
  // 第二次筛选：根据最近两次选择的食物来筛选
  if (logs.value.length >= 2) {
    console.log("最后两项：", logs.value[logs.value.length - 1].name, logs.value[logs.value.length - 2].name);
    if (validFoods.length > 2 && logs.value[logs.value.length - 1].name === logs.value[logs.value.length - 2].name) {
      validFoods = validFoods.filter(food => food.name !== logs.value[logs.value.length - 1].name);
      console.log(`第二次筛选后的食物：`)
      console.log(validFoods);
    }
  }
  
  // 第三次筛选：根据最近30次选择的食物来筛选
  if (isCheckBoxDisabled.value && logs.value.length >= 30) {
    const recentLogs = logs.value.slice(-30);
    const recentLogNames = recentLogs.map(log => log.name);
    const neverAppearedFoods = validFoods.filter(food => !recentLogNames.includes(food.name));
    if (neverAppearedFoods.length > 0) {
      validFoods = neverAppearedFoods;
    }
    console.log(`第三次筛选后的食物：`)
    console.log(validFoods);
  }

  return validFoods.map(food => ({
    name: food.name,
    weight: getWeightByTimePeriod(food.weight)
  }));
})

export function getWeightByTimePeriod(weight: { morning: number, noon: number, evening: number }): number {
  if (timePeriod.value === '早') {
    return weight.morning;
  } else if (timePeriod.value === '早中') {
    return (weight.morning + weight.noon) / 2;
  } else if (timePeriod.value === '午') {
    return weight.noon;
  } else {
    return weight.evening;
  }
}

export const timePeriod: ComputedRef<string> = computed(() => {
  const hour = timeNow.value.getHours();
  if (hour >= 6 && hour < 9) {
    return '早';
  } else if (hour >= 9 && hour < 11) {
    return '早中';
  } else if (hour >= 11 && hour < 14) {
    return '午';
  } else {
    return '晚';
  }
})

export const selectFood = async () => {
  const validFoods = await validFoodsComputed.value;
  console.log("正在选择食物，当前可选食物列表：");
  console.log(validFoods);
  const totalWeight = validFoods.reduce((sum, food) => sum + Number(food.weight), 0);
  console.log(`当前总重：${totalWeight}`);
  if (totalWeight === 0) {
    await (await toastController.create({
      message: "当前时段所有可选食物的概率都为零，无法选择！",
      duration: 2000,
    })).present();
    return null;
  }
  const selectFoodByWeight = (foods: ValidFood[], totalWeight: number) => {
    let randomWeight = Math.random() * totalWeight;
    for (const food of foods) {
      randomWeight -= Number(food.weight);
      if (randomWeight <= 0) {
        return food;
      }
    }
    return null;
  }
  const selectedFood = selectFoodByWeight(validFoods, totalWeight);
  if (selectedFood) {
    const foodInList = foodList.value.find(food => food.name === selectedFood.name);
    if (foodInList) {
      console.log("选择了：");
      foodInList.counts += 1;
      await saveFoods();
      console.log(foodInList);
      console.log("目前的食物列表：")
      console.log(foodList.value);
      await saveLog(foodInList.name);
    }
  }
  return selectedFood;
}