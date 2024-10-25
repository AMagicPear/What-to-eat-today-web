import { ref,computed,ComputedRef } from 'vue';
export const timeNow = ref(new Date());
import { FoodConstructor } from './foodConstructor';
const { foodList, loadFoods, saveFoods } = FoodConstructor();

import { Log } from './log'
const { saveLog } =  Log();

const getValidFoods = async () => {
    await loadFoods();
    // timePeriod;
    const validFoods = foodList.value;
    return validFoods;
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
    if (totalWeight === 0) {
        alert("当前时段所有可选食物的概率都为零。无法选择！");
        return null;
    }
    const selectFoodByWeight = (foods: any[], totalWeight: number) => {
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
            saveFoods();
            console.log(foodInList);
            console.log("目前的食物列表：")
            console.log(foodList.value);
            saveLog(foodInList.name);
        }
    }
    return selectedFood;
}