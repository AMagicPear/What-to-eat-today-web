import { ref, computed, ComputedRef } from 'vue';
export const timeNow = ref(new Date());
import { FoodConstructor } from './foodConstructor';
const { foodList, loadFoods, saveFoods } = FoodConstructor();

import { Log } from './log'
import { toastController } from '@ionic/vue';
const { saveLog } = Log();

export interface ValidFood {
  name: string;
  weight: number;
}

const getValidFoods = async (): Promise<ValidFood[]> => {
  await loadFoods();
  const { isCheckBoxDisabled, checkedList } = await import('@/views/EditFood.vue');
  let validFoods = isCheckBoxDisabled.value ? foodList.value : foodList.value.filter((_, index) => checkedList.value[index]);
  console.log(`第一次筛选后的食物：`)
  console.log(validFoods)
  const { logs } = await import('@/composables/log');
  console.log("最后两项：", logs.value[logs.value.length - 1].name, logs.value[logs.value.length - 2].name);
  if (logs.value.length >= 2 && validFoods.length > 2 && logs.value[logs.value.length - 1].name === logs.value[logs.value.length - 2].name)
    validFoods = validFoods.filter(food => food.name !== logs.value[logs.value.length - 1].name);
  console.log(`第二次筛选后的食物：`)
  console.log(validFoods);
  return validFoods.map(food => {
    let weight = 0;
    if (timePeriod.value === '早')
      weight = food.weight.morning;
    else if (timePeriod.value === '早中')
      weight = (food.weight.morning + food.weight.noon) / 2;
    else if (timePeriod.value === '午')
      weight = food.weight.noon;
    else weight = food.weight.evening;
    return { name: food.name, weight };
  })
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
  const validFoods = await getValidFoods();
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