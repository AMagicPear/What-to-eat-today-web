import { ref } from 'vue';
import storage from './storage';

interface Weight {
    morning: number;
    noon: number;
    evening: number;
}

export interface IFood {
    name: string;
    weight: Weight;
    counts: number;
}

class Food implements IFood {
    constructor(
        public name: string,
        public weight: Weight,
        public counts: number = 0
    ) {}

    static fromStorage({ name, weight, counts }: IFood) {
        return new Food(name, {
            morning: Number(weight.morning),
            noon: Number(weight.noon),
            evening: Number(weight.evening)
        }, counts);
    }
}
export const foodList = ref<IFood[]>([]);

export const FoodConstructor = () => {
    const loadFoods = async () => {
        console.log("正在加载食物");
        const storedFoods = await storage.get('foodList');
        console.log("读取到的存储：");
        console.log(storedFoods);
        if (storedFoods)
            foodList.value = storedFoods.map((food: IFood) => Food.fromStorage(food));
    }
    const saveFoods = async () => {
        const plainFoods = foodList.value.map(food => JSON.parse(JSON.stringify(food)));
        console.log(plainFoods);
        await storage.set('foodList', plainFoods);
        const { initEcharts } = await import('@/components/WheelSpinner.vue');
        initEcharts(); // 食物改变后重新初始化echarts
    }
    const addFood = async (name: string, weight: Weight) => {
        if (foodList.value.find(food => food.name === name)) {
            const { message } = await import('@/views/EditFood.vue');
            message.value = "已经存在该食物，请勿重复添加";
            return false;
        }
        console.log(`正在添加食物${name}`);
        foodList.value.push(new Food(name, weight));
        await saveFoods();
        return true;
    }
    const deleteFood = async (name: string) => {
        console.log(`正在删除食物${name}`);
        foodList.value = foodList.value.filter(food => food.name !== name);
        await saveFoods();
        return true;
    }

    return {
        loadFoods,
        addFood,
        saveFoods,
        deleteFood,
    }
}
