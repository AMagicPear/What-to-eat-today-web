import { ref } from 'vue';
import storage from './storage';
import { message } from '@/views/EditFood.vue';
class Food {
    name: string;
    weight: number;
    counts: number;

    constructor(name: string, weight: number, counts: number = 0) {
        this.name = name;
        this.weight = weight;
        this.counts = counts;
    }
    toStorage() {
        return {
            name: this.name,
            weight: this.weight,
            counts: this.counts
        }
    }
    static fromStorage(json: any) {
        return new Food(json.name, json.weight, json.counts);
    }
}
const foodList = ref<Food[]>([]);

export const FoodCalculator = () => {
    const loadFoods = async () => {
        console.log("正在加载食物，加载前：");
        console.log(foodList.value);
        const storedFoods = await storage.get('foodList');
        console.log("读取到的存储：");
        console.log(storedFoods);
        if (storedFoods)
            foodList.value = storedFoods.map((food: any) => Food.fromStorage(food));
        console.log("加载后：");
        console.log(foodList.value);
    }
    const saveFoods = async () => {
        const plainFoods = foodList.value.map(food => food.toStorage());
        console.log(plainFoods);
        await storage.set('foodList', plainFoods);
    }
    const addFood = async (name: string, weight: number) => {
        if (foodList.value.find(food => food.name === name)) {
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
        loadFoods,
        foodList,
        addFood,
        saveFoods,
        deleteFood,
    }
}
