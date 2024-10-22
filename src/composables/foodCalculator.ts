import { ref } from 'vue';
class Food {
    name: string;
    weight: number;
    counts: number;

    constructor(name: string, weight: number, counts: number = 0) {
        this.name = name;
        this.weight = weight;
        this.counts = counts;
    }
}
const foodList = ref<Food[]>([]);

export const FoodCalculator = () => {
    
    return {
        Food,
        foodList,
    }
}