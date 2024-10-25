import { ref } from 'vue';
import storage from './storage';

export interface Weight {
    morning: number;
    noon: number;
    evening: number;
}

class Food {
    name: string;
    weight: Weight;
    counts: number;

    constructor(name: string, weight: Weight, counts: number = 0) {
        this.name = name;
        this.weight = weight;
        this.counts = counts;
    }
    static fromStorage(json: IFood) {
        return new Food(json.name, json.weight, json.counts);
    }
}
export interface IFood {
    name: string;
    weight: Weight;
    counts: number;
}
const foodList = ref<Food[]>([]);

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
    }
    const addFood = async (name: string, weight: Weight) => {
        if (foodList.value.find(food => food.name === name)) {
            const { message } = await import('@/views/EditFood.vue');
            message.value = "已经存在该食物，请勿重复添加";
            return false;
        }
        console.log(`正在添加食物${name}，${weight}`);
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
        foodList,
        loadFoods,
        addFood,
        saveFoods,
        deleteFood,
    }
}
