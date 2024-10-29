<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>编辑食物信息</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list :inset="true">
        <ion-item style="font-weight: bold;">
          <ion-label>食物</ion-label>
          <ion-badge slot="end">所占权重</ion-badge>
          <ion-badge slot="end" color="secondary">已选次数</ion-badge>
        </ion-item>
        <ion-reorder-group :disabled="isOrderDisabled" @ionItemReorder="handleReorder($event)">
          <ion-item-sliding v-for="(food, index) in foodList" :key="food.name">
            <ion-item>
              <ion-label>{{ food.name }}</ion-label>
              <ion-checkbox slot="end" :disabled="isCheckBoxDisabled"
                @ion-change="toggleCheck(index, food.name)"></ion-checkbox>
              <ion-reorder slot="end"></ion-reorder>
              <ion-badge slot="end" v-for="(value, key) in food.weight" :key>{{mapTime(key)}} {{ value }}</ion-badge>
              <ion-badge slot="end" color="secondary">{{ food.counts }}</ion-badge>
            </ion-item>
            <ion-item-options side="end">
              <ion-item-option @click="editFood(food)"><ion-icon slot="end"
                  :icon="create"></ion-icon>编辑</ion-item-option>
              <ion-item-option color="danger" expandable @click="deleteFood(food.name)"><ion-icon slot="end"
                  :icon="trash"></ion-icon>删除</ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-reorder-group>
      </ion-list>
    </ion-content>
    <ion-item>
      <ion-toggle class="ion-padding" :enable-on-off-labels="true" :checked="true"
        @ion-change="toggleOrder">开启排序</ion-toggle>
      <ion-toggle class="ion-padding" :enable-on-off-labels="true" :checked="false"
        @ion-change="toggleCheckBox">开启选择</ion-toggle>
    </ion-item>
    <ion-note class="ion-padding" style="text-align: center;"><span v-html="bottomTip"></span></ion-note>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end" id="add-button">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-alert header="添加食物" trigger="add-button" :buttons=alertButtons :inputs=alertInputs></ion-alert>
    <ion-toast :is-open="message" :message="message" :duration="2000" @didDismiss="message = null"></ion-toast>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonAlert, IonToast, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, alertController, IonNote, IonBadge, AlertInput, IonReorder, IonReorderGroup, IonToggle, IonCheckbox } from '@ionic/vue';
import { add, create, trash } from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { FoodConstructor, IFood } from '@/composables/foodConstructor';
const { foodList, addFood, loadFoods, deleteFood, saveFoods } = FoodConstructor();
export const message = ref<string | null>(null);
export const checkedList = ref<boolean[]>([]);
export const isCheckBoxDisabled = ref(true);
</script>

<script setup lang="ts">
// 页面底部提示信息
const bottomTip = `TIP：点击右侧+号添加食物 滑动来编辑或删除<br/>所占权重越大，食物被选中的几率更高`;
// 是否禁用排序
const isOrderDisabled = ref(false);

// 添加食物的弹窗按钮配置
const alertButtons = [
  {
    text: '取消',
    role: 'cancel',
    handler: () => {
      message.value = null;
      console.log('已取消添加食物');
    },
  },
  {
    text: '添加',
    handler: async (data: FoodInputs) => {
      if (!(data.foodName && data.foodWeightMorning && data.foodWeightNoon && data.foodWeightEvening)) {
        console.log('食物未输入');
        message.value = '请输入食物名称和权重后再提交'; // 显示条形通知，提示格式不正确
        return false;
      } else if (data.foodWeightMorning < 0 || data.foodWeightNoon < 0 || data.foodWeightEvening < 0) {
        message.value = '权重不能是负数！';
        return false;
      }
      else {
        console.log(`准备添加食物${data.foodName}`);
        if (await addFood(data.foodName, { morning: data.foodWeightMorning, noon: data.foodWeightNoon, evening: data.foodWeightEvening })) {
          message.value = `${data.foodName}添加成功！`; // 显示条形通知，表示添加成功
          return true;
        } else {
          return false;
        }
      }
    }
  }
];

// 食物输入接口
interface FoodInputs {
  foodName: string;
  foodWeightMorning: number;
  foodWeightNoon: number;
  foodWeightEvening: number;
}

// 添加食物的弹窗输入配置
const alertInputs: AlertInput[] = [
  {
    name: 'foodName',
    placeholder: '食物名称',
  },
  {
    name: 'foodWeightMorning',
    type: 'number',
    placeholder: '权重：早',
    min: 0,
  },
  {
    name: 'foodWeightNoon',
    type: 'number',
    placeholder: '权重：午',
    min: 0,
  },
  {
    name: 'foodWeightEvening',
    type: 'number',
    placeholder: '权重：晚',
    min: 0,
  },
];

// 编辑食物函数
const editFood = async (food: IFood) => {
  console.log("正在编辑食物");
  const alert = await alertController.create({
    header: '编辑食物',
    inputs: [
      {
        name: 'foodName',
        placeholder: '食物名称',
        value: food.name,
      },
      {
        name: 'foodWeightMorning',
        type: 'number',
        placeholder: '权重',
        value: food.weight.morning,
        min: 0,
      },
      {
        name: 'foodWeightNoon',
        type: 'number',
        placeholder: '权重',
        value: food.weight.noon,
        min: 0,
      },
      {
        name: 'foodWeightEvening',
        type: 'number',
        placeholder: '权重',
        value: food.weight.evening,
        min: 0,
      }
    ],
    buttons: [
      {
        text: '取消',
        role: 'cancel',
      },
      {
        text: '保存',
        handler: async (data: FoodInputs) => {
          if (data.foodName && data.foodWeightMorning && data.foodWeightNoon && data.foodWeightEvening) {
            food.name = data.foodName;
            food.weight.morning = data.foodWeightMorning;
            food.weight.noon = data.foodWeightNoon;
            food.weight.evening = data.foodWeightEvening;
          }
        },
      },
    ],
  });
  await alert.present();
}

// 把morning, noon, evening分别映射到早中晚
const mapTime = (key: string) => {
  switch (key) {
    case 'morning':
      return '早';
    case 'noon':
      return '午';
    case 'evening':
      return '晚';
    default:
      return '';
  }
}


// 页面加载时加载食物列表
onMounted(() => {
  loadFoods().then(() => {
    console.log("加载食物列表：");
    console.log(foodList.value);
    checkedList.value = new Array(foodList.value.length).fill(false);
  })
})

// 处理排序事件
const handleReorder = (event: CustomEvent) => {
  console.log(`${foodList.value[event.detail.from].name}移到了位置${event.detail.to}`)
  const movedItem = checkedList.value.splice(event.detail.from, 1)[0];
  checkedList.value.splice(event.detail.to, 0, movedItem);
  foodList.value = event.detail.complete(foodList.value);
  saveFoods();
};

// 切换排序功能
const toggleOrder = (event: CustomEvent) => {
  isOrderDisabled.value = !event.detail.checked;
};

// 切换选择功能
const toggleCheckBox = (event: CustomEvent) => {
  isCheckBoxDisabled.value = !event.detail.checked;
}

// 切换选择状态
const toggleCheck = (index: number, foodName: string) => {
  checkedList.value[index] = !checkedList.value[index];
  console.log(`${foodName} 已${checkedList.value[index] ? '选中' : '取消勾选'}.`);
};
</script>

<style scoped>
#add-button {
  margin: 2vw;
}

ion-note {
  display: block;
}
</style>