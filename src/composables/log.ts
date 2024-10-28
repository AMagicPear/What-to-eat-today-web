import storage from "@/composables/storage";
import { timeNow } from "./foodSelector";
import { ref } from "vue";

export const logs = ref<{ time?: Date, name?: string }[]>([])

export const Log = () => {
    const saveLog = async (foodName: string) => {
        const selectedFoodLog = {
            time: timeNow.value,
            name: foodName
        };
        logs.value.push(selectedFoodLog);
        await storage.set('log', JSON.parse(JSON.stringify(logs.value)));
        console.log("成功保存记录");
    }
    const loadLog = async () => {
        const storedLogs = await storage.get('log');
        logs.value = storedLogs ? storedLogs.map((log: any) => ({
            ...log,
            time: new Date(log.time)
        })) : [];
        console.log("已读取记录");
        console.log(logs.value);
    }
    loadLog();  //在组件初始化时加载日志记录
    return {
        saveLog,
    }
}