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
        <ion-item-sliding v-for="food in foodList" :key="food.name">
          <ion-item>
            <ion-label>{{ food.name }}</ion-label>
            <ion-badge slot="end">早 {{ food.weight.morning }}</ion-badge>
            <ion-badge slot="end">午 {{ food.weight.noon }}</ion-badge>
            <ion-badge slot="end">晚 {{ food.weight.evening }}</ion-badge>
            <ion-badge slot="end" color="secondary">{{ food.counts }}</ion-badge>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="editFood(food)"><ion-icon slot="end" :icon="create"></ion-icon>编辑</ion-item-option>
            <ion-item-option color="danger" expandable @click="deleteFood(food.name)"><ion-icon slot="end"
                :icon="trash"></ion-icon>删除</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
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
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonAlert, IonToast, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, alertController, IonNote, IonBadge } from '@ionic/vue';
import { add, create, trash } from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { FoodConstructor, IFood } from '@/composables/foodConstructor';
const { foodList, addFood, loadFoods, deleteFood } = FoodConstructor();
export const message = ref<string | null>(null);
</script>

<script setup lang="ts">
//页面逻辑
const bottomTip = `TIP：<br/>点击右侧+号添加食物 滑动来编辑或删除<br/>所占权重越大，食物被选中的几率更高`;
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
    handler: async (data: any) => {
      if (!(data.foodName && data.foodWeightMorning && data.foodWeightNoon && data.foodWeightEvening)) {
        console.log('食物未输入');
        message.value = '请输入食物名称和权重后再提交'; //显示条形通知，提示格式不正确
        return false;
      } else if (data.foodWeightMorning < 0 || data.foodWeightNoon < 0 || data.foodWeightEvening < 0) {
        message.value = '权重不能是负数！';
        return false;
      }
      else {
        console.log(`准备添加食物${data.foodName}`);
        if (await addFood(data.foodName, { morning: data.foodWeightMorning, noon: data.foodWeightNoon, evening: data.foodWeightEvening })) {
          message.value = `${data.foodName}添加成功！`; //显示条形通知，表示添加成功
          return true;
        } else {
          return false;
        }
      }
    }
  }
];
const alertInputs = [
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
        handler: async (data) => {
          if (data.foodName && data.foodWeightMorning && data.foodWeightNoon && data.foodWeightEvening) {
            food.name = data.foodName;
            food.weight.morning = Number(data.foodWeightMorning);
            food.weight.noon = Number(data.foodWeightNoon);
            food.weight.evening = Number(data.foodWeightEvening);
          }
        },
      },
    ],
  });
  await alert.present();
}
onMounted(() => {
  loadFoods().then(() => {
    console.log("加载食物列表：");
    console.log(foodList.value);
  })
})
</script>

<style scoped>
#add-button {
  margin: 2vw;
}

ion-note {
  display: block;
}
</style>