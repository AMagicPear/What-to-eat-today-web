<template>
  <ion-page>
    <ion-content>
      <ion-note class="make-central">编辑食物表格的页面</ion-note>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end" id="add-button">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <ion-alert header="添加食物" trigger="add-button" :buttons=alertButtons :inputs=alertInputs></ion-alert>
    <ion-toast :is-open="isAdmitSuccessOpen" message="添加成功！" :duration="2000"
      @didDismiss="setAdmitSuccessOpen(false)"></ion-toast>
  </ion-page>
</template>

<script lang="ts">
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
</script>

<script setup lang="ts">
import { IonPage, IonContent, IonFab, IonFabButton, IonIcon, IonNote, IonAlert, IonToast } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { ref } from 'vue';
//页面逻辑
const isAdmitSuccessOpen = ref(false);
const setAdmitSuccessOpen = (state: boolean) => {
  isAdmitSuccessOpen.value = state;
}
const alertButtons = [
  {
    text: '取消',
    role: 'cancel',
    handler: () => {
      console.log('取消');
    },
  },
  {
    text: '添加',
    handler: (data: any) => {
      console.log('添加');
      foodList.value?.push(new Food(data.foodName, data.foodWeight));
      console.log(foodList.value);
      setAdmitSuccessOpen(true); //显示条形通知，表示添加成功
    }
  }
];
const alertInputs = [
  {
    name: 'foodName',
    placeholder: '食物名称',
  },
  {
    name: 'foodWeight',
    type: 'number',
    placeholder: '权重',
    min: 0,
  },
];

//读取食物信息

</script>

<style scoped>
.make-central {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#add-button {
  margin: 2vw;
}
</style>